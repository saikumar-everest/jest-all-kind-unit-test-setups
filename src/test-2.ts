import {AWSError, S3} from 'aws-sdk';
import {ListBucketsOutput} from 'aws-sdk/clients/s3';
import {PromiseResult} from 'aws-sdk/lib/request';

export const listAvailableS3Buckets = async (): Promise<PromiseResult<ListBucketsOutput, AWSError>> => {
  return new S3().listBuckets().promise();
};
