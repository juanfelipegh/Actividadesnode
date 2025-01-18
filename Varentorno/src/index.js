import {config } from "dotenv"
import env from 'env-var';
config()

const PORT = env.get('PORT').default('S432').asPortNumber()

console.log(PORT)
/* console.log(process.env.PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD); */