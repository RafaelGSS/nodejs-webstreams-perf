const { fetch, setGlobalDispatcher, Agent } = require('undici')

const parallelRequests = 1000
const samples = 100

function makeParallelRequests (cb) {
  return Promise.all(Array.from(Array(parallelRequests)).map(() => new Promise(cb)))
}

async function main() {
  setGlobalDispatcher(new Agent({ connections: 50 }))
  console.time('fetch')
  for (let i = 0; i < samples; ++i) {
    await makeParallelRequests(async (resolve) => {
      const res = await fetch('http://localhost:3000')
      res.body.pipeTo(new WritableStream({ write () {}, close () { resolve() } }))
    })
  }
  console.timeEnd('fetch')
}

main()
