
import {bookData} from './book-data.js'

class Book{
    constructor(author, language, subject, title,){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }
  }

class Bookshelf{
    constructor(books) {
      this.books = books;
    }
  
    add(book){
      this.books.push(book);
    }
  }
  
const bookshelf = new Bookshelf([]);
  
bookData.forEach(bookDat => {
    const book = new Book(bookDat.author, bookDat.language, bookDat.subject, bookDat.title);
    bookshelf.add(book);
  });

class Book {
    render() {
      const li = document.createElement('li');
      const text = `${this.title} ${this.author} ${this.subject} ${this.language}`;
      li.appendChild(text);
      return li;
    }
  }
class Bookshelf{
    render() {
      const ul = document.createElement('ul');
      this.books.forEach(book => {
        const li = book.render();
        ul.appendChild(li);
      });
      return ul;
    }}
const insertDiv = document.getElementBy('insert');
    document.body.insertBefore(insertDiv, bookshelf.render());


