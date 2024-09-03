const BaseController = require("./BaseController");


class BookController extends BaseController{
    constructor() {
      super();
    }
  
    async getBooks() {
        const response = await this.apiClient.get('/BookStore/v1/Books');
        return response.data;
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    }
  
    async removeBookFromUser(userId, isbn, token) {
      const response = await this.apiClient.delete('/BookStore/v1/Book', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId,
          isbn,
        },
      });
      return response;
    }
}

    module.exports = new BookController;


  