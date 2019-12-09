const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const _next = next({ dev })
const handle = _next.getRequestHandler()
const server = express()

server.get('/p/:id', (req, res) => {
    console.log("path p");
    const actualPage = '/p/:id'
    const queryParams = { id: req.params.id }
    console.log("url: " + req.originalUrl);
    _next.render(req, res, actualPage, queryParams)
})

server.get('/about', (req, res) => {
    console.log("about");
    const actualPage = '/about'
    const queryParams = { id: req.params.id }
    console.log("url: " + req.originalUrl);
    _next.render(req, res, actualPage, queryParams)
})

server.get('*', (req, res, middleware) => {
    return handle(req, res)
})

_next.prepare().then(() => {

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })