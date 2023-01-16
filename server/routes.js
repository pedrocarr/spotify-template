import config from "./config.js"
import { Controller } from "./controller.js"
import { logger } from "./util.js"
const {
  location,
  pages: {
    homeHTML
  }
} = config
const controller = new Controller()

async function routes(req, res) {
  const { method, url } = req

  if (method === 'GET' && url === '/') {
    res.writeHead(302, {
      'Location': location.home
    })

    return res.end()
  }

  if (method === 'GET' && url === '/home') {
    const {
      stream
    } = await controller.getFileStream(homeHTML)

    // padrão do response é text/html
    // res.writeHead(200, {
    //   'Content-Type': 'text/html'
    // })

    return stream.pipe(res)
  }

  return res.end('hello')
}

export function handler(req, res) {
  return routes(req, res)
  .catch(error => logger.error(`Deu ruimmmmm: ${error.stack}`))
}
