

const axios = require('axios');
const BaseController = require('./BaseController');

class UserController extends BaseController{
  constructor() {
    super();
  }

  async getAuthToken(userName, password) {
    const response = await this.apiClient.post(
        `/Account/v1/GenerateToken`,
    {
        userName,
        password,
    });
    return response.data.token;
}

  async createUser(userName, password) {
    const response = await this.apiClient.post('/Account/v1/User', { userName, password });
    return response.data;
  }

  async loginUser(userName, password) {
    const response = await this.apiClient.post('/Account/v1/GenerateToken', { userName, password });
    return response.data;
  }

  async deleteUser(userId, token) {
    const response = await this.apiClient.delete(`/Account/v1/User/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  async getUserId() {
    return "78508fb7-b538-4a94-9163-ec0012a7a055";
}

}

module.exports = new UserController;