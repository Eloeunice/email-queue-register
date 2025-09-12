import { Router, Request, Response} from "express";

const userRouter = Router ()

userRouter.get('/', (req: Request, res:Response) => {
    res.send("Everything`s okay!")
})

userRouter.post('/register', (req:Request , res:Response) => {
    res.json({message : `${req.body.name} is registered`})
})

export default userRouter