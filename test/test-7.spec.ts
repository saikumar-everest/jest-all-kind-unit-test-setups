import {findAndPreparePdfByName} from '../src/test-7/file-utils';
import {PdfTransformer} from '../src/test-7/pdf-transformer';

describe('Test that expects a static method to be called', () => {
  it('should call transform static method on pdf-transformer', () => {
    PdfTransformer.transform = jest.fn(() => 'new-pdf-file-path.pdf');

    const pdfPath = findAndPreparePdfByName('data.txt');

    expect(PdfTransformer.transform).toBeCalledWith('public/files/data.txt');
    expect(pdfPath).toEqual('new-pdf-file-path.pdf');
  });
});
