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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let book1 = ['Bible', 'God', '1234', true];

addBookToLibrary(book1);

console.log(myLibrary);

const newBookForm = document.getElementById('book-form');
let newBookButton = document.getElementById('add-book');

newBookButton.addEventListener('click', () => {
  console.log(newBookForm.style.display);
  newBookForm.style.display === 'none' || newBookForm.style.display === ''
    ? (newBookForm.style.display = 'block')
    : (newBookForm.style.display = 'none');
});
