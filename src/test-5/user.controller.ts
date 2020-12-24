import {UserService} from './user.service';

export class UserController {
  constructor(private service: UserService) {}

  async getSuperActiveUserId() {
    return this.service.superActiveUserId();
  }

  throwError() {
    throw new Error('Internal error!');
  }
}
