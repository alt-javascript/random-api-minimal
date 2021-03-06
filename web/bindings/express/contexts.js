/* eslint-disable import/extensions */
import express from 'express';
import Server from './Server.js';
import RandomNumber from '../../../service/RandomNumber.js';

export default [
  Server,
  RandomNumber,
  { name: 'app', scope: 'prototype', factory: express },
  { name: 'router', scope: 'prototype', factory: express.Router },
];
