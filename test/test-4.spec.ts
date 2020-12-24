import axios from 'axios'; // Default import
import {UserService} from '../src/test-4';

jest.mock('axios');

describe('Tests for mocking non-injectable dependencies where it is a defaultly exported', () => {
  const axiosGet = axios.get as jest.Mock;

  beforeEach(() => {
    axiosGet.mockReset();
  });

  it('should get all users', async () => {
    axiosGet.mockResolvedValue({
      data: [
        {
          userId: 45,
          name: 'Someone',
        },
      ],
    });
    const userService = new UserService();

    const users = await userService.getUsers();

    expect(axiosGet).toHaveBeenCalledWith('/api/users');
    expect(users).toEqual([
      {
        userId: 45,
        name: 'Someone',
      },
    ]);
  });
});
