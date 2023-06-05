import express from 'express';
import timeLogRoutes from './routes/timeLogRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/time-logs', timeLogRoutes);
app.use('/api/projects', projectRoutes);

(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        const { PORT = 5000 } = process.env;

        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
