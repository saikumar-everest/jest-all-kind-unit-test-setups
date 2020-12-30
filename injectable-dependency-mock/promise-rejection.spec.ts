import {UserController} from './user.controller';
import {UserService} from './user.service';

describe('Tests for code that has injectable dependency, but that dependency has many other dependencies', () => {
  let mockedService: UserService;
  let userController: UserController;

  beforeEach(() => {
    mockedService = jest.genMockFromModule<UserService>('./user.service');

    userController = new UserController(mockedService);
  });

  it('should reject promise', async () => {
    mockedService.superActiveUserId = jest.fn().mockRejectedValue('Error: Slack service not present');

    expect(userController.getSuperActiveUserId()).rejects.toEqual('Error: Slack service not present');
  });
});
