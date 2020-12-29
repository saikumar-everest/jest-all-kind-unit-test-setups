jest.mock('node-fetch');

import fetch from 'node-fetch';
import {createUser} from '../src/test-9';
const {Response} = jest.requireActual('node-fetch');

test('createUser calls fetch with the right args and returns the user id', async () => {
  (fetch as jest.Mock).mockResolvedValue(new Response('4'));

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});
