import { myQueue } from "./queue";

export async function addEmailJob(data: object){
    await myQueue.add('email-job', data)

}