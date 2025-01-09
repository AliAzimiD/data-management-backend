import { PrismaClient } from '@prisma/client';
import csvParser from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream'; // Import Readable from Node.js streams

const prisma = new PrismaClient();

class CSVService {
  async importCSV(filePath: string): Promise<void> {
    const rows: Record<string, any>[] = [];

    return new Promise((resolve, reject) => {
      const readableStream = fs.createReadStream(filePath);

      readableStream
        .pipe(csvParser())
        .on('data', (row: Record<string, any>) => {
          rows.push(row);
        })
        .on('end', async () => {
          try {
            for (const row of rows) {
              await prisma.row.create({
                data: {
                  typeId: Number(row.typeId),
                  data: row,
                },
              });
            }
            resolve();
          } catch (error) {
            reject(error);
          }
        })
        .on('error', (error: Error) => {
          reject(error);
        });
    });
  }

  async exportToCSV(typeId: number, outputPath: string): Promise<void> {
    const rows = await prisma.row.findMany({
      where: { typeId },
    });

    const csvWriter = createObjectCsvWriter({
      path: outputPath,
      header: Object.keys(rows[0]?.data || {}).map((key) => ({
        id: key,
        title: key,
      })),
    });

    await csvWriter.writeRecords(
      rows
        .map((row) => row.data)
        .filter((data): data is object => data !== null && typeof data === 'object')
    );
  }
}

export default new CSVService();
