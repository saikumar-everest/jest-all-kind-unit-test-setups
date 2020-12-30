import {UserController} from './user.controller';
import {UserService} from './user.service';

describe('Tests for code that has injectable dependency, but that dependency has many other dependencies', () => {
  let mockedService: UserService;
  let userController: UserController;

  beforeEach(() => {
    // We didn't care about what are all the (N+2 nd level)dependencies for UserService.
    // Because it's unnecessary to think about them in these(N th level) unit tests
    mockedService = jest.genMockFromModule<UserService>('./user.service');

    userController = new UserController(mockedService);
  });

  it('should get super active user id', async () => {
    mockedService.superActiveUserId = jest.fn().mockResolvedValue('567');

    const actual = await userController.getSuperActiveUserId();

    expect(actual).toEqual('567');
  });
});
