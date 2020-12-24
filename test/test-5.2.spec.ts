import {UserController} from '../src/test-5/user.controller';

describe('Tests for code throws error', () => {
  let userController: UserController;

  beforeEach(() => {
    userController = new UserController(null);
  });

  it('should throw error', () => {
    expect(userController.throwError).toThrow('Internal error!');
  });
});
