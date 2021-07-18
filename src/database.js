import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-52-1-20-236.compute-1.amazonaws.com',
    user: 'sbhewhshrysesb',
    password: 'db397d5ed4e6f98ba64628a993b3b14d42d0c525a7b82546f93cf2d5fdbdd9ed',
    database: 'dn2cvdp1qni7u',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})