import { Router, RequestHandler } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import CSVService from '../services/CSVService';

const router = Router();
const upload = multer({ dest: 'uploads/' });

// POST /api/import - Import rows from a CSV file
const importCSVHandler: RequestHandler = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const filePath = req.file.path;

    await CSVService.importCSV(filePath);

    fs.unlinkSync(filePath); // Clean up uploaded file after processing

    res.status(200).json({ message: 'CSV imported successfully' });
  } catch (error) {
    next(error);
  }
};

// GET /api/export?typeId={id} - Export rows to a CSV file
const exportCSVHandler: RequestHandler<{}, any, any, { typeId: string }> = async (req, res, next) => {
  try {
    const { typeId } = req.query;

    if (!typeId) {
      res.status(400).json({ error: 'Type ID is required' });
      return;
    }

    const exportPath = path.join(__dirname, `exported-rows-${typeId}.csv`);

    await CSVService.exportToCSV(Number(typeId), exportPath);

    res.download(exportPath, () => {
      fs.unlinkSync(exportPath); // Clean up exported file after download
    });
  } catch (error) {
    next(error);
  }
};

router.post('/import', upload.single('file'), importCSVHandler);
router.get('/export', exportCSVHandler);

export default router;
