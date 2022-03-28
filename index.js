/* eslint-disable import/extensions */
import { Application, config } from '@alt-javascript/boot';
import contexts from './web/bindings/aws/contexts.js';

export async function handler (event,context) {
    try {
        let applicationContext = await Application.run({ config, contexts });
        let lambda = applicationContext.get('lambda');
        let result = lambda.handler(event,context);
        return result
    } catch ( err) {
        console.error (err);
        const response = {
            statusCode: 200,
            body: JSON.stringify(err),
        };
        return response;
    }
}