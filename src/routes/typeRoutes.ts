import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Explicitly specify generic types for RequestHandler
const getTypesHandler: RequestHandler<{}, any, any, {}> = async (req, res, next) => {
  try {
    const types = await prisma.typeDefinition.findMany();
    res.json(types);
  } catch (error) {
    next(error);
  }
};

const createTypeHandler: RequestHandler<{}, any, { name: string }, {}> = async (req, res, next) => {
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
    next(error);
  }
};

router.get('/types', getTypesHandler);
router.post('/types', createTypeHandler);

export default router;
