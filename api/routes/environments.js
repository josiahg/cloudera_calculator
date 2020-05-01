estimate = { 
  'environments': [
    { id: '1', name: 'demo-aws', provider: 'AWS', region: 'us-east-1', hours: '730' },
    { id: '2', name: 'demo-aws4', provider: 'AWS', region: 'us-east-1', hours: '730' },  
    { id: '3', name: 'demo-aws2', provider: 'AWS', region: 'us-east-1', hours: '730' }
  ]
}

async function routes (fastify, options) {
    fastify.get('/api/environments', async (request, reply) => {
        return estimate
    })

    fastify.post('/api/environments/add', async (request, reply) => {
        //estimate.environments.push({ id: '3', name: 'demo-aws-bob', provider: 'AWS', region: 'us-east-1', hours: '730' })
        //return estimate.environments
        estimate.environments.push(request.body)
        return request.body
    })
}

module.exports = routes