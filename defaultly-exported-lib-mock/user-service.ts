import axios from 'axios'; // Default import

export class UserService {
  async getUsers() {
    const {data} = await axios.get('/api/users');
    return data;
  }
}
