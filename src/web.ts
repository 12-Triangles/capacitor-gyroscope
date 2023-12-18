import { WebPlugin } from '@capacitor/core';

import type { GyroscopePlugin } from './definitions';

export class GyroscopeWeb extends WebPlugin implements GyroscopePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
