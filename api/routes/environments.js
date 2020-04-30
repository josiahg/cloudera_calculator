async function routes (fastify, options) {
    fastify.get('/api/environments', async (request, reply) => {
        return { 'environments': [
            { id: '1', name: 'demo-aws', provider: 'AWS', region: 'us-east-1', hours: '730' },
            { id: '2', name: 'demo-aws4', provider: 'AWS', region: 'us-east-1', hours: '730' },  
            { id: '2', name: 'demo-aws2', provider: 'AWS', region: 'us-east-1', hours: '730' }
            ] 
        }
    })
}

module.exports = routes