import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(title, author, yearOfProduction, fileFormat) {
    super(title, author, yearOfProduction);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Invalid file format");
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year of Production: ${this.yearOfProduction}, File format: ${this.fileFormat}`
    );
  }

  static createEBookFromBook(book, fileFormat) {
    return new EBook(
      book.title,
      book.author,
      book.yearOfProduction,
      fileFormat
    );
  }
}
