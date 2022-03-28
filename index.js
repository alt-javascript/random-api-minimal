/* eslint-disable import/extensions */
import { Application, config } from '@alt-javascript/boot';
import contexts from './web/bindings/aws/contexts.js';

export async function handler (event,context) {
    let applicationContext = await Application.run({ config, contexts });
    let lambda = applicationContext.get('lambda');
    let result = lambda.handler(event,context)
    return result
};