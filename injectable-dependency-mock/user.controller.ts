import {UserService} from './user.service';

export class UserController {
  constructor(private service: UserService) {}

  async getSuperActiveUserId() {
    return this.service.superActiveUserId();
  }

  async throwErrorAsync() {
    throw new Error('Internal error!');
  }

  throwError() {
    throw new Error('Internal error!');
  }
}
