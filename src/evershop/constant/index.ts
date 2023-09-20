const PG_HOST=process.env.POSTGRES_HOST 
const PG_PORT=Number(process.env.POSTGRES_PORT )
const PG_DATABASE=process.env.POSTGRES_DATABASE
const PG_USER=process.env.POSTGRES_USER
const PG_PASSWORD=process.env.POSTGRES_PASSWORD

export{ PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD }

