declare module 'csv-parser' {
    import { Transform } from 'stream';
  
    interface CsvParserOptions {
      separator?: string;
      headers?: string[];
      mapHeaders?: (args: { header: string; index: number }) => string | null;
      mapValues?: (args: { header: string; index: number; value: string }) => any;
    }
  
    function csvParser(options?: CsvParserOptions): Transform;
  
    export default csvParser;
  }
  