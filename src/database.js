import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-23-20-124-77.compute-1.amazonaws.com',
    user: 'jvcmwinlzoceyl',
    password: '3da747c7d3b8b81e702c48cd2fe0aa705ae5b388efb6268904df15b3b648769a',
    database: 'd37n8fm0qs96l6',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})