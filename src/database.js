import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-44-194-183-115.compute-1.amazonaws.com',
    user: 'kysnjhaolhbiod',
    password: '65a4cf1ff4567bfeceb34cb614e53d7841872ab569123af64216d17840d3a0a3',
    database: 'diupjjgnsb4gf',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})