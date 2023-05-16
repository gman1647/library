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
let isFormOpen = false;

newBookButton.addEventListener('click', () => {
  changeStyle();
  toggleForm();
});

let changeStyle = () => {
  style = window.getComputedStyle(newBookForm);
  style.getPropertyValue('display') === 'none'
    ? (newBookForm.style.display = 'grid')
    : (newBookForm.style.display = 'none');
};

let toggleForm = () => {
  isFormOpen = !isFormOpen;
  updateButton();
};

let updateButton = () => {
  newBookButton.textContent = isFormOpen ? 'Cancel' : 'Add Book';
};
