import config from "./config.js"
import { Controller } from "./controller.js"
import { logger } from "./util.js"
const {
  location,
  pages: {
    homeHTML,
    controllerHTML
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

  if (method === 'GET' && url === '/controller') {
    const {
      stream
    } = await controller.getFileStream(controllerHTML)

    // padrão do response é text/html
    // res.writeHead(200, {
    //   'Content-Type': 'text/html'
    // })

    return stream.pipe(res)
  }

  // files
  if(method === 'GET') {
    const {
      stream,
      type
    } = await controller.getFileStream(url)

    return stream.pipe(res)
  }

  res.writeHead(404)
  return res.end('hello')
}

export function handler(req, res) {
  return routes(req, res)
  .catch(error => logger.error(`Deu ruimmmmm: ${error.stack}`))
}
