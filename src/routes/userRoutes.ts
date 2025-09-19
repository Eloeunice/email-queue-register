import { Router, Request, Response} from "express";
import { sendEmail } from "../controllers/userController";

const userRouter = Router ()

userRouter.get('/', (req: Request, res:Response) => {
    res.send("Everything`s okay!")
})

userRouter.post('/register', sendEmail)

export default userRouter