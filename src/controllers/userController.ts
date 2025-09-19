import { Request, Response } from "express";
import { addEmailJob } from "../jobs/producer";

export async function sendEmail(req: Request, res: Response){
    const {name, email} = req.body

    await addEmailJob({name, email})

    res.json({message: "Email added to queue"})
}

