let myLibrary = [];
const cardContainer = document.getElementById('card_container');
let bookNumber = 0;

function Book(title, author, pages, read, number) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.number = number;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  upDateBookNumber();
}

function upDateBookNumber() {
  bookNumber += 1;
  //  return bookNumber;
}

const newBookForm = document.getElementById('book-form');
const newBookButton = document.getElementById('add-book-header-button');
let isFormOpen = false;

newBookButton.addEventListener('click', () => {
  toggleForm();
});

let toggleForm = () => {
  style = window.getComputedStyle(newBookForm);
  if (style.getPropertyValue('display') === 'none') {
    newBookForm.style.display = 'grid';
    newBookButton.textContent = 'Cancel';
  } else {
    newBookForm.style.display = 'none';
    newBookButton.textContent = 'Add Book';
  }
};

let submitForm = document.getElementById('add-book-button');

submitForm.addEventListener('click', () => {
  let author = document.getElementById('new-author').value;
  let title = document.getElementById('new-title').value;
  let pages = document.getElementById('new-pages').value;
  if (author == '' || title == '' || pages == '') {
    alert('please complete all fields');
  } else {
    createObject();
    toggleForm();
  }
});

let getNewBookInfo = () => {
  let author = document.getElementById('new-author').value;
  let title = document.getElementById('new-title').value;
  let pages = document.getElementById('new-pages').value;
  let read = checkRead();
  number = bookNumber;
  return [author, title, pages, read, number];
};

let createObject = () => {
  let bookName = 'book' + bookNumber;
  array = getNewBookInfo();
  console.log(array);
  bookName = new Book(array[1], array[0], array[2], array[3], array[4]);
  addBookToLibrary(bookName);
  makeBookCard(array[1], array[0], array[2], array[3]);
};

let checkRead = () => {
  let read = document.getElementById('new-read');
  read.checked == true ? (read = true) : (read = false);
  return read;
};

let getReadState = (x, cb) => {
  x == true ? (cb.checked = true) : (cb.checked = false);
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
  pag.textContent = pages + ' pages';

  const re = document.createElement('label');
  re.classList.add('switch');

  const br = document.createElement('p');
  br.classList.add('book-read');
  br.textContent = 'Read?';

  const cb = document.createElement('input');
  cb.setAttribute('type', 'checkbox');
  cb.classList.add('checkbox');
  getReadState(read, cb);

  const sp = document.createElement('span');
  sp.classList.add('slider');
  sp.classList.add('round');

  re.appendChild(br);
  re.appendChild(cb);
  re.appendChild(sp);

  mainDiv.appendChild(tit);
  mainDiv.appendChild(auth);
  mainDiv.appendChild(pag);
  mainDiv.appendChild(re);

  mainDiv.classList.add('card');
  cardContainer.insertBefore(mainDiv, newBookForm);
};

/* const book = new Book('Hunchback', 'Hugo', 789, true, bookNumber);
addBookToLibrary(book);
makeBookCard(book.title, book.author, book.pages, book.read, book.number);

const book2 = new Book('Gettysburg', 'Shira', 1549, false, bookNumber);
addBookToLibrary(book2);
makeBookCard(book2.title, book2.author, book2.pages, book2.read, book2.number);
 */
