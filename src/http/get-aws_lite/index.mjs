import arc from "@architect/functions"

export async function handler (req) {
  // add > 20 SSM params in order to be easily reproducible with `k6 --vus 200 --iterations 200 …`
  await arc.services()
}
