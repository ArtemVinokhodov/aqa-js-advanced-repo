export class Book {
  constructor(title, author, yearOfProduction) {
    this.title = title;
    this.author = author;
    this.yearOfProduction = yearOfProduction;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string") {
      throw new Error("Need input string title");
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Invalid author");
    }
    this._author = value;
  }

  get yearOfProduction() {
    return this._yearOfProduction;
  }

  set yearOfProduction(value) {
    const year = Number(value);
    if (!Number.isInteger(year)) {
      throw new Error("Invalid year of production");
    }
    this._yearOfProduction = year;
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year of Production: ${this.yearOfProduction}`
    );
  }

  static getOldestBookAndEBook(books) {
    let oldest = books[0];
    for (let i = 1; i < books.length; i++) {
      if (books[i].yearOfProduction < oldest.yearOfProduction) {
        oldest = books[i];
      }
    }
    return oldest;
  }
}
