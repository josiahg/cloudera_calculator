estimate = { 
  'environments': [
    // { id: '1', name: 'demo-aws', provider: 'AWS', region: 'us-east-1', hours: '730', 'aws_infra': [
    //   { role: 'FreeIPA Service', instance_type: 'm5.large', count: 1, hours: 730, infra_cost: 70, cldr_cost: 0 },
    //   { role: 'IDBroker Service', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
    //   { role: 'DataLake Master Node', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
    //   { role: 'RDS DB Instance', instance_type: 'db.m5.large', count: 1, hours: 730, infra_cost: 130, cldr_cost: 0 }
    // ] },  
    //{ id: '2', name: 'demo-aws2', provider: 'AWS', region: 'us-east-1', hours: '730' }
  ]
}

env_infra = {
  'aws_infra': [
    { role: 'FreeIPA Service', instance_type: 'm5.large', count: 1, hours: 730, infra_cost: 70, cldr_cost: 0 },
    { role: 'IDBroker Service', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
    { role: 'DataLake Master Node', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
    { role: 'RDS DB Instance', instance_type: 'db.m5.large', count: 1, hours: 730, infra_cost: 130, cldr_cost: 0 }
  ]
}

async function routes (fastify, options) {
    fastify.get('/api/environments', async (request, reply) => {
        return estimate
    })

    fastify.post('/api/environments/add', async (request, reply) => {
        request.body.aws_infra = env_infra.aws_infra
        console.log(request.body)
        estimate.environments.push(request.body)
        return request.body
    })

    // fastify.get('/api/environments/infra_cost', async(request, reply) => {
    //   infra_cost = 0;
    //   for(role in env_infra.aws_infra) {
    //     infra_cost += env_infra.aws_infra[role].infra_cost;
    //   }      
    //   return infra_cost
    // })

    // fastify.get('/api/environments/cldr_cost', async(request, reply) => {
    //   cldr_cost = 0;
    //   for(role in env_infra.aws_infra) {
    //     cldr_cost += env_infra.aws_infra[role].cldr_cost;
    //   }      
    //   return cldr_cost
    // })

    fastify.get('/api/environments/cost', async(request, reply) => {
      cldr_cost = 0;
      infra_cost = 0;
      total_cost = 0;
      for(idx in estimate.environments) {
        env = estimate.environments[idx]
        for(role in env.aws_infra) {
          cldr_cost += env.aws_infra[role].cldr_cost;
        }        
        for(role in env.aws_infra) {
          infra_cost += env.aws_infra[role].infra_cost;
        }
      }      
      total_cost = cldr_cost + infra_cost
      reply = { total_cost, cldr_cost, infra_cost }
      return reply
    })
}

module.exports = routes