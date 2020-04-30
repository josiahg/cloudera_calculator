'use strict'

const fastify = require('fastify') ({
    logger: true
})

fastify.register(require('fastify-cors'))

//fastify.register(require('./routes/hello'))
fastify.register(require('./routes/environments'))

fastify.listen(4000, function (err, address) {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})