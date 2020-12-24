import axios from 'axios'; // Default import
import {UserService} from '../src/test-4';

describe('Tests for mocking non-injectable dependencies where it is a defaultly exported', () => {
  it('should get all users', async () => {
    const mockedAxiosGet = jest.spyOn(axios, 'get').mockResolvedValue({
      data: [
        {
          userId: 45,
          name: 'Someone',
        },
      ],
    });
    const userService = new UserService();

    const users = await userService.getUsers();

    expect(mockedAxiosGet).toHaveBeenCalledWith('/api/users');
    expect(users).toEqual([
      {
        userId: 45,
        name: 'Someone',
      },
    ]);
  });
});
