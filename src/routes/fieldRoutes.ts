import { Router, Request, Response, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Define the expected query parameters
interface FieldQueryParams {
  typeId: string;
}

// GET /api/fields?typeId={id} - Fetch fields for a specific type
const getFieldsHandler: RequestHandler<{}, {}, {}, FieldQueryParams> = async (
  req,
  res
) => {
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
    console.error('Error fetching fields:', error);
    res.status(500).json({ error: 'Failed to fetch fields' });
  }
};

// POST /api/fields - Create a new field
const createFieldHandler: RequestHandler = async (req, res) => {
  try {
    const { name, typeId, fieldType } = req.body;
    if (!name || !typeId || !fieldType) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    const newField = await prisma.fieldDefinition.create({
      data: {
        name,
        typeId,
        fieldType,
      },
    });

    res.status(201).json(newField);
  } catch (error) {
    console.error('Error creating field:', error);
    res.status(500).json({ error: 'Failed to create field' });
  }
};

// Register routes
router.get('/fields', getFieldsHandler);
router.post('/fields', createFieldHandler);

export default router;
