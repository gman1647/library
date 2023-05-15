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
const newBookButton = document.getElementById('add-book-header-button');
let click = 0;

newBookButton.addEventListener('click', () => {
  changeStyle();
  changeContent();
});

let changeStyle = () => {
  style = window.getComputedStyle(newBookForm);
  style.getPropertyValue('display') === 'none'
    ? (newBookForm.style.display = 'grid')
    : (newBookForm.style.display = 'none');
};

let changeContent = () => {
  click += 1;
  click % 2 != 0
    ? (newBookButton.textContent = 'Cancel')
    : (newBookButton.textContent = 'Add Book');
};
