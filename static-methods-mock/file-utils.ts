import {PdfTransformer} from './pdf-transformer';

export const findAndPreparePdfByName = (fileName: string): string => {
  // Search for file available with the given name and find path.
  const foundFilePath = `public/files/${fileName}`;
  return PdfTransformer.transform(foundFilePath);
};
