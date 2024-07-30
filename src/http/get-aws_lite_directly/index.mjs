import arc from "@architect/functions"
import awsLite from '@aws-lite/client'

export async function handler (req) {
  const arcTables = await arc.tables()
  const physicalTableName = arcTables.name('things');
  console.log({physicalTableName})

  const aws = await awsLite({ plugins: [ import('@aws-lite/dynamodb') ] })
  return aws.DynamoDB.Scan({ TableName: physicalTableName })
}
