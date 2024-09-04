const axios = require('axios');
const BaseController = require('./BaseController');

class UserController extends BaseController {
  async getAuthToken(userName, password) {
    const response = await this.apiClient.post('/Account/v1/GenerateToken', { userName, password });
    return response.data.token;
  }

  async createUser(userName, password) {
    const response = await this.apiClient.post('/Account/v1/User', { userName, password });
    return response.data;
  }

  async deleteUser(userId, token) {
    const response = await this.apiClient.delete(`/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }

  async getUserIdInloginUser(userName, password) {
    const customClient = axios.create({
      baseURL: 'https://demoqa.com',
      headers: { 'Content-Type': 'application/json' },
    });
    const response = await customClient.post('/Account/v1/Login', { userName, password });
    return response.data.userId;
  }

  async getUserId() {
    return await this.getUserIdInloginUser("artem", "Ghfdk12/33!");
  }
}


module.exports = new UserController();