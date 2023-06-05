import express from 'express';
import timeLogRoutes from './routes/timeLogRoutes';

const app = express();

app.use(express.json());

app.use('/time-logs', timeLogRoutes);

const { PORT = 5000 } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));