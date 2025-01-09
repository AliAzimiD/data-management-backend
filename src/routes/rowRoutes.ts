import { Router, Request, Response, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Define the expected query parameters
interface RowQueryParams {
  typeId: string;
}

// GET /api/rows?typeId={id} - Fetch rows for a specific type
const getRowsHandler: RequestHandler<{}, {}, {}, RowQueryParams> = async (
  req,
  res
) => {
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
    console.error('Error fetching rows:', error);
    res.status(500).json({ error: 'Failed to fetch rows' });
  }
};

// POST /api/rows - Add a new row
const createRowHandler: RequestHandler = async (req, res) => {
  try {
    const { typeId, data } = req.body;
    if (!typeId || !data) {
      res.status(400).json({ error: 'Type ID and data are required' });
      return;
    }

    const newRow = await prisma.row.create({
      data: {
        typeId,
        data,
      },
    });

    res.status(201).json(newRow);
  } catch (error) {
    console.error('Error creating row:', error);
    res.status(500).json({ error: 'Failed to create row' });
  }
};

// Register routes
router.get('/rows', getRowsHandler);
router.post('/rows', createRowHandler);

export default router;
