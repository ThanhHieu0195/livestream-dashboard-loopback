import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import bcryptjs from 'bcryptjs';

@injectable({scope: BindingScope.TRANSIENT})
export class UtilService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  hash(password: string): string {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync());
  }
}
