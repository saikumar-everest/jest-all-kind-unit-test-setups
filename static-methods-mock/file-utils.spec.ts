import {findAndPreparePdfByName} from './file-utils';
import {PdfTransformer} from './pdf-transformer';

describe('Test that expects a static method to be called', () => {
  it('should call transform static method on pdf-transformer', () => {
    PdfTransformer.transform = jest.fn(() => 'new-pdf-file-path.pdf');

    const pdfPath = findAndPreparePdfByName('data.txt');

    expect(PdfTransformer.transform).toBeCalledWith('public/files/data.txt');
    expect(pdfPath).toEqual('new-pdf-file-path.pdf');
  });
});
