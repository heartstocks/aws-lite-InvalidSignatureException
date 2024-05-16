import arc from "@architect/functions";

export async function handler (req) {
  const client = await arc.tables()
  const things = client.things
  return things.scanAll()
}