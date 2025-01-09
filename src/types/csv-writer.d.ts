declare module 'csv-writer' {
    interface CsvWriterOptions {
      path: string;
      header: { id: string; title: string }[];
    }
  
    interface CsvWriter {
      writeRecords(records: object[]): Promise<void>;
    }
  
    export function createObjectCsvWriter(options: CsvWriterOptions): CsvWriter;
  }
  