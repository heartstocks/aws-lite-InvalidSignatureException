import arc from "@architect/functions"

export async function handler (req) {
  const {things} = await arc.tables()
  return things.scan()
}
