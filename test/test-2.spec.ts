import {ListBucketsOutput} from 'aws-sdk/clients/s3';
import {listAvailableS3Buckets} from '../src/test-2';

const expected = {
  Buckets: [
    {
      Name: 'test bucket',
    },
    {
      Name: 'another test bucket',
    },
  ],
} as ListBucketsOutput;

function mockedS3Instance() {
  return {
    listBuckets: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue(expected),
  };
}

jest.mock('aws-sdk', () => ({
  S3: mockedS3Instance,
}));

describe('Tests for mocking non-injectable dependencies', () => {
  it('should get all buckets information', async () => {
    expect(await listAvailableS3Buckets()).toEqual(expected);
  });
});
