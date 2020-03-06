'use strict';

import {Controller} from './controller';

export class HelloWorldController extends Controller {
  resolve(): void {
    this.success({
      message: 'Hello world!'
    })
  }
}
