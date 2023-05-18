let myLibrary = [];
const cardContainer = document.getElementById('card_container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

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

/* let addBookButton = document.getElementById('add-book-button');

addBookButton.addEventListener('submit', (x) => {
  x.preventDefault();
  getNewBookInfo();
}); */

let submitForm = document.getElementById('add-book-button');

submitForm.addEventListener('click', () => {
  getNewBookInfo();
});

let getNewBookInfo = () => {
  let author = document.getElementById('new-author').value;
  let title = document.getElementById('new-title').value;
  let pages = document.getElementById('new-pages').value;
  let read = checkRead();
  /*   let read = document.getElementById('new-read');
  read.checked == true ? (read = true) : (read = false); */
  /*   let object = {};
  object.author = author.value;
  object.title = title.value;
  object.pages = pages.value;
  read.checked == true ? (object.read = true) : (object.read = false); */
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
};

let checkRead = () => {
  let read = document.getElementById('new-read');
  read.checked == true ? (read = true) : (read = false);
  return read;
};

let makeBookCard = (title, author, pages, read) => {
  const mainDiv = document.createElement('div');

  const tit = document.createElement('h3');
  tit.classList.add('book-title');
  tit.textContent = title;

  const auth = document.createElement('p');
  auth.classList.add('book-author');
  auth.textContent = author;

  const pag = document.createElement('p');
  pag.classList.add('book-pages');
  pag.textContent = pages;

  mainDiv.appendChild(tit);
  mainDiv.appendChild(auth);
  mainDiv.appendChild(pag);

  mainDiv.classList.add('card');
  cardContainer.insertBefore(mainDiv, newBookForm);
};

makeBookCard('Les Miserable', 'Victor Hugo', 1234, true);

makeBookCard('Black Forrest Rangers', 'G. Bearrymore', 548, false);
