import { Router, Request, Response} from "express";

const userRouter = Router ()

userRouter.get('/', (req: Request, res:Response) => {
    res.send("Everything`s okay!")
})

userRouter.post('/register', (req:Request , res:Response) => {
    res.send('Data send')
})

export default userRouter