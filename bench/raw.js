const { ReadableStream } = require('node:stream/web')

let i = 0
const readable = new ReadableStream({
  pull: function (controller) {
    controller.enqueue('some data' + i)
    ++i
    if (i >= 1e7) {
      controller.close()
    }
  }
})


async function main() {
  try {
    console.time('raw readable')
    for await (const _ of readable) {
      console.assert(_)
    }
    console.timeEnd('raw readable')
  } catch (e) {
    console.error(e)
  }
}

main()
