let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ', ' + read;
  };
}

function addBookToLibrary(newItem) {
  let newItem = document.getElementsByClassName('new-book');
  myLibrary.push('newItem');
}
