import { Router, Request, Response, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/types - Fetch all types
const getTypesHandler: RequestHandler = async (req, res) => {
  try {
    const types = await prisma.typeDefinition.findMany();
    res.json(types); // No need to return the response explicitly
  } catch (error) {
    console.error('Error fetching types:', error);
    res.status(500).json({ error: 'Failed to fetch types' });
  }
};

// POST /api/types - Create a new type
const createTypeHandler: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: 'Type name is required' });
      return;
    }

    const newType = await prisma.typeDefinition.create({
      data: { name },
    });

    res.status(201).json(newType);
  } catch (error) {
    console.error('Error creating type:', error);
    res.status(500).json({ error: 'Failed to create type' });
  }
};

// Register routes
router.get('/types', getTypesHandler);
router.post('/types', createTypeHandler);

export default router;
