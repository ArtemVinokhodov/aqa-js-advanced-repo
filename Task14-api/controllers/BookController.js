const BaseController = require("./BaseController");

class BookController extends BaseController {
  async getBooks() {
    const response = await this.apiClient.get('/BookStore/v1/Books');
    return response.data.books;
  }

  async getBookByISBN(isbn) {
    const response = await this.apiClient.get(`/BookStore/v1/Book?ISBN=${isbn}`);
    return response.data;
  }

  async addBookToUser(userId, isbn, token) {
    const response = await this.apiClient.post('/BookStore/v1/Books', {
      userId,
      collectionOfIsbns: [{ isbn }],
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      status: response.status,
      books: response.data.books,
    };
  }

  async removeBookFromUser(userId, isbn, token) {
    const response = await this.apiClient.delete('/BookStore/v1/Book', {
      headers: { Authorization: `Bearer ${token}` },
      data: { userId, isbn },
    });
    return response;
  }
}

module.exports = new BookController();


