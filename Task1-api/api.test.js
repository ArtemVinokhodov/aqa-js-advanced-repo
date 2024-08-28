// Створити тестовий сценарій за допомогою пекеджу axios.

// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.

// Задача:

// створити 5 запитів за допомогою методів GET, POST
// обовязково має бути перевірка респонсу - response status, data на коректність знідно докементації по АПІ
//TEST

const axios = require('axios');
const { string } = require('yargs');

describe('JSONPlaceholder API', () => {
  const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  test('GET ID 1', async () => {
    const response = await apiClient.get('/posts/3');
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(3);
    expect(response.data.userId).toBe(1);
    expect(typeof response.data.body).toBe('string');
  });

  test('GET of posts', async () => {
    const response = await apiClient.get('/posts');
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });

  test('POST new post', async () => {
    const newPost = {
      title: 'bk',
      body: 'bambarbia kirgudu',
      userId: 100,
    };

    const response = await apiClient.post('/posts', newPost);
    expect(response.status).toBe(201);
    expect(response.data).toBeDefined();
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
    expect(response.data.id).toBeDefined();
  });

  test('GET should return 404 for non-existent post', async () => {
    try {
      await apiClient.get('/posts/200');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

  test('POST should validate input data', async () => {
    const noCorrectPost = {
      title: 'Hello',
      body: 'World',
    };

    const response = await apiClient.post('/posts', noCorrectPost);
    expect(response.data.userId).toBeUndefined(); 
  });
});

