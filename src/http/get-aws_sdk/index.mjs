import arc from "@architect/functions"

export async function handler (req) {
  await arc.services()
}
