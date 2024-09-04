// Домашнє завдання:(замість дефолтного)

// Створити нову гілку
// Використовувати тести з минулої домашки(API запити до JSONPlaceholder) АБО Створити 5-10 нових тестів до сервісу https://bookstore.toolsqa.com/swagger/#/ 
// У тестах робити перевірки через expect
// Використовувати контролери у тестах

const BookController = require("../controllers/BookController");
const UserController = require("../controllers/UserController");

describe("test block", () => {
  let token;
  let userId;

  beforeAll(async () => {
    token = await UserController.getAuthToken("artem", "Ghfdk12/33!");
    userId = await UserController.getUserId();
  });

  test('GET a list of books', async () => {
    const books = await BookController.getBooks();
    expect(books).toBeInstanceOf(Array);
    expect(books.length).toBeGreaterThan(0);
  });

  test('GET a single book by ISBN', async () => {
    const isbn = '9781449325862';
    const book = await BookController.getBookByISBN(isbn);
    expect(book.isbn).toBe(isbn);
    expect(book.title).toBeDefined();
    expect(book.subTitle).toBeDefined();
    expect(book.author).toBeDefined();
  });

  test('POST add a new book to user\'s collection', async () => {
    const bookIsbn = '9781449325862';
    const response = await BookController.addBookToUser(userId, bookIsbn, token);

    expect(response.status).toBe(201);
    expect(response.books).toContainEqual({ isbn: bookIsbn });
  });

  test('DELETE remove a book from user\'s collection', async () => {
    const bookIsbn = '9781449325862';
    const response = await BookController.removeBookFromUser(userId, bookIsbn, token);
    expect(response.status).toBe(204);
  });

  test('Get token', async () => {
    expect(token).toBeDefined();
  });
});