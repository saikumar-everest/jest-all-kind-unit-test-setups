import {UserController} from '../src/test-5/user.controller';

describe('Tests for code throws error', () => {
  let userController: UserController;

  beforeEach(() => {
    userController = new UserController(null);
  });

  it('should throw error from async method', () => {
    expect(userController.throwErrorAsync).rejects.toThrow('Internal error!');
  });

  it('should throw error from syncronous method', () => {
    expect(userController.throwError).toThrow('Internal error!');
  });
});
