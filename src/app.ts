import express from 'express';
import userRouter from './routes/userRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

// Routes
app.use('/', userRouter);

// Global error handler (should be after routes)
// app.use(errorHandler);

export default app;