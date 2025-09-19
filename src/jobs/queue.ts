import {Queue, Worker} from 'bullmq'
import dotenv from 'dotenv'

dotenv.config()

export const myQueue = new Queue('email-queue', {
    connection: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
    }
})

export const myWorker = new Worker('email-queue', async (job) => {
    console.log(job.data)
}, {
    connection: {
        host:  process.env.REDIS_HOST,
        port:  Number(process.env.REDIS_PORT)
    }
})