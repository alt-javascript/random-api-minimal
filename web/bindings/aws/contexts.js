/* eslint-disable import/extensions */
import AWS from 'aws-sdk/lib/aws.js';
import Lambda from './Lambda.js';
import RandomNumber from '../../../service/RandomNumber.js';

export default [
  Lambda,
  RandomNumber,
  { name: 'aws', scope: 'prototype', Reference: AWS },
];
