import { Router, Request, Response } from 'express';
import multer from 'multer';
import CSVService from '../services/CSVService';
import path from 'path';
import fs from 'fs';

const router = Router();
const upload = multer({ dest: 'uploads/' }); // Temporary upload directory

// POST /api/import - Import rows from a CSV file
router.post('/import', upload.single('file'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const filePath = req.file.path;

    await CSVService.importCSV(filePath);

    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);

    res.status(200).json({ message: 'CSV imported successfully' });
  } catch (error) {
    console.error('Error importing CSV:', error);
    res.status(500).json({ error: 'Failed to import CSV' });
  }
});

// GET /api/export?typeId={id} - Export rows to a CSV file
router.get('/export', async (req: Request, res: Response) => {
  try {
    const { typeId } = req.query;
    if (!typeId) {
      res.status(400).json({ error: 'Type ID is required' });
      return;
    }

    const outputPath = path.join(__dirname, `exported-rows-${typeId}.csv`);

    await CSVService.exportToCSV(Number(typeId), outputPath);

    res.download(outputPath, () => {
      // Delete the file after download
      fs.unlinkSync(outputPath);
    });
  } catch (error) {
    console.error('Error exporting CSV:', error);
    res.status(500).json({ error: 'Failed to export CSV' });
  }
});

export default router;
