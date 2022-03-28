/* eslint-disable import/extensions */
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import request from 'supertest';

import {handler} from "../index.js";

import { LoggerFactory } from '@alt-javascript/logger';

const logger = LoggerFactory.getLogger('@alt-javascript/random-api-minimal/test/Lambda_spec');
const { assert } = chai;
chai.use(chaiAsPromised);

before(async () => {
  logger.verbose('before spec setup started');

  logger.verbose('before spec setup completed');
});

beforeEach(async () => {
  logger.verbose('before each setup started');
  // ..
  logger.verbose('before each setup completed');
});

after(async () => {
  logger.verbose('after teardown started');
  // ...
  logger.verbose('after teardown completed');
});

beforeEach(async () => {
  logger.verbose('before each setup started');
  // ..
  logger.verbose('before each setup completed');
});

describe('Lambda Specification',   () => {
  it('Generates a random number between 1 and zero',  async () => {

     let result = await handler( { routeKey : 'GET /*'}, null);
      let body = JSON.parse(result.body);
      assert.equal(result.statusCode, 200, 'GET response code is 200');
      assert.isAtLeast(body, 0, 'Random Number is at least 0');
      assert.isAtMost(body, 5, 'Random Number is at most 1');

  });
});
