import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import fieldRoutes from './routes/fieldRoutes';
import typeRoutes from './routes/typeRoutes';
import rowRoutes from './routes/rowRoutes';
import csvRoutes from './routes/csvRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Register routes
app.use('/api', fieldRoutes);
app.use('/api', typeRoutes);
app.use('/api', rowRoutes);
app.use('/api', csvRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Data Management Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
