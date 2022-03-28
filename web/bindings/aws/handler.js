import { Application, config } from '@alt-javascript/boot';
import contexts from './web/bindings/aws/contexts.js';

let applicationContext = await Application.run({ config, contexts });