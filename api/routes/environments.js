estimate = { 
  'environments': [
    { id: '1', name: 'demo-aws', provider: 'AWS', region: 'us-east-1', hours: '730', 'aws_infra': [
      { role: 'FreeIPA Service', instance_type: 'm5.large', count: 1, hours: 730, infra_cost: 70, cldr_cost: 0 },
      { role: 'IDBroker Service', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
      { role: 'DataLake Master Node', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
      { role: 'RDS DB Instance', instance_type: 'db.m5.large', count: 1, hours: 730, infra_cost: 130, cldr_cost: 0 }
    ] },  
    //{ id: '2', name: 'demo-aws2', provider: 'AWS', region: 'us-east-1', hours: '730' }
  ],
  'datahubs': [
    { id: '1', name: 'opdb-demo-aws', template: 'Operational Database with SQL', environment: 'demo-aws', provider: 'AWS', region: 'us-east-1', hours: '730' }
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

dh_templates = {
  'Operational Database with SQL': [
    { role: 'Gateway Nodes', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 70, cldr_cost: 0 },
    { role: 'Master Nodes', instance_type: 'm5.2xlarge', count: 2, hours: 730, infra_cost: 280, cldr_cost: 0 },
    { role: 'Leader Nodes', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
    { role: 'Worker Nodes', instance_type: 'm5.2xlarge', count: 3, hours: 730, infra_cost: 130, cldr_cost: 0 }
  ],
  'Data Engineering': [
    { role: 'Gateway Nodes', instance_type: 'm5.2xlarge', count: 0, hours: 730, infra_cost: 70, cldr_cost: 0 },
    { role: 'Master Nodes', instance_type: 'm5.2xlarge', count: 1, hours: 730, infra_cost: 280, cldr_cost: 0 },
    { role: 'Compute Nodes', instance_type: 'm5.2xlarge', count: 0, hours: 730, infra_cost: 280, cldr_cost: 0 },
    { role: 'Worker Nodes', instance_type: 'm5.2xlarge', count: 3, hours: 730, infra_cost: 130, cldr_cost: 0 }
  ]
}

async function routes (fastify, options) {
  fastify.get('/api/environments', async (request, reply) => {
    return estimate.environments
  })

  fastify.post('/api/environments/add', async (request, reply) => {
    request.body.aws_infra = env_infra.aws_infra
    console.log(request.body)
    estimate.environments.push(request.body)
    return request.body
  })

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

  fastify.get('/api/datahubs', async (request, reply) => {
    return estimate.datahubs
  })

  fastify.post('/api/datahubs/add', async (request, reply) => {
    console.log(request.body)
    estimate.datahubs.push(request.body)
    return request.body
  })

  fastify.get('/api/datahubs/templates', async (request, reply) => {
    return dh_templates
  })

  fastify.get('/api/datahubs/cost', async (request, reply) => {
    cldr_cost = 0;
    infra_cost = 0;
    total_cost = 0;
    // for(idx in estimate.environments) {
    //   env = estimate.environments[idx]
    //   for(role in env.aws_infra) {
    //     cldr_cost += env.aws_infra[role].cldr_cost;
    //   }        
    //   for(role in env.aws_infra) {
    //     infra_cost += env.aws_infra[role].infra_cost;
    //   }
    // }      
    total_cost = cldr_cost + infra_cost
    reply = { total_cost, cldr_cost, infra_cost }
    return reply
  })
}

module.exports = routes