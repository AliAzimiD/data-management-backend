import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log('Connected to the database'))
  .catch((err: unknown) => console.error('Database connection error:', err));



  
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Data Management Backend is running!');
});

app.get('/types', async (req, res) => {
    try {
      const types = await prisma.typeDefinition.findMany();
      res.json(types);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch types' });
    }
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

