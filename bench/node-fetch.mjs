import fetch from 'node-fetch'
import { Agent } from 'node:http'
import { Writable } from 'node:stream'

const parallelRequests = 1000
const samples = 100

function makeParallelRequests (cb) {
  return Promise.all(Array.from(Array(parallelRequests)).map(() => new Promise(cb)))
}

async function main() {
  const httpAgent = new Agent({
    keepAlive: true,
    connections: 50
  });
  console.time('node-fetch')
  for (let i = 0; i < samples; ++i) {
    await makeParallelRequests(async (resolve) => {
      const res = await fetch('http://localhost:3000', { agent: httpAgent })
      res.body.pipe(
        new Writable({
          write (chunk, encoding, callback) {
            callback()
          }
        })
        .on('finish', resolve)
      )
    })
  }
  console.timeEnd('node-fetch')
}

main()
