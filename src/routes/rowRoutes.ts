import { Router, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/rows?typeId={id} - Fetch rows for a specific type
const getRowsHandler: RequestHandler<{}, any, any, { typeId: string }> = async (req, res, next) => {
  try {
    const { typeId } = req.query;

    if (!typeId) {
      res.status(400).json({ error: 'Type ID is required' });
      return;
    }

    const rows = await prisma.row.findMany({
      where: { typeId: Number(typeId) },
    });

    res.json(rows);
  } catch (error) {
    next(error);
  }
};

// POST /api/rows - Create a new row
const createRowHandler: RequestHandler<{}, any, { typeId: number; data: Record<string, any> }, {}> = async (req, res, next) => {
  try {
    const { typeId, data } = req.body;

    if (!typeId || !data) {
      res.status(400).json({ error: 'Type ID and data are required' });
      return;
    }

    const newRow = await prisma.row.create({
      data: { typeId, data },
    });

    res.status(201).json(newRow);
  } catch (error) {
    next(error);
  }
};

router.get('/rows', getRowsHandler);
router.post('/rows', createRowHandler);

export default router;
