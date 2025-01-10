import { Router, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/fields?typeId={id} - Fetch fields for a specific type
const getFieldsHandler: RequestHandler<{}, any, any, { typeId: string }> = async (req, res, next) => {
  try {
    const { typeId } = req.query;

    if (!typeId) {
      res.status(400).json({ error: 'Type ID is required' });
      return;
    }

    const fields = await prisma.fieldDefinition.findMany({
      where: { typeId: Number(typeId) },
    });

    res.json(fields);
  } catch (error) {
    next(error);
  }
};

// POST /api/fields - Create a new field for a type
const createFieldHandler: RequestHandler<{}, any, { name: string; typeId: number; fieldType: string }, {}> = async (
  req,
  res,
  next
) => {
  try {
    const { name, typeId, fieldType } = req.body;

    if (!name || !typeId || !fieldType) {
      res.status(400).json({ error: 'Field name, Type ID, and Field Type are required' });
      return;
    }

    const newField = await prisma.fieldDefinition.create({
      data: { name, typeId, fieldType },
    });

    res.status(201).json(newField);
  } catch (error) {
    next(error);
  }
};

router.get('/fields', getFieldsHandler);
router.post('/fields', createFieldHandler);

export default router;
