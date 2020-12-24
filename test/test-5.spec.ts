import {UserController} from '../src/test-5/user.controller';
import {UserService} from '../src/test-5/user.service';

describe('Tests for code that has injectable dependency, but that dependency has many other dependencies', () => {
  let mockedService: UserService;
  let userController: UserController;

  beforeEach(() => {
    // We didn't care about what are all the (N+2 nd level)dependencies for UserService.
    // Because it's unnecessary to think about them in these(N th level) unit tests
    mockedService = jest.genMockFromModule<UserService>('../src/test-5/user.service');

    userController = new UserController(mockedService);
  });

  it('should get super active user id', async () => {
    mockedService.superActiveUserId = jest.fn().mockResolvedValue('567');

    const actual = await userController.getSuperActiveUserId();

    expect(actual).toEqual('567');
  });
});
