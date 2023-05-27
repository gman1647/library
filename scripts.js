let myLibrary = [];
const cardContainer = document.getElementById('card_container');
const newBookForm = document.getElementById('book-form');
const newBookButton = document.getElementById('add-book-header-button');
let isFormOpen = false;
let bookNumber = 0;
let submitForm = document.getElementById('add-book-button');

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
}

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

submitForm.addEventListener('click', () => {
  array = getNewBookInfo();
  let author = array[0];
  let title = array[1];
  let pages = array[2];
  if (author == '' || title == '' || pages == '') {
    alert('Please complete all fields.');
  } else {
    createObject();
    toggleForm();
    deleteCards();
    createFromArray();
  }
});

let getNewBookInfo = () => {
  let author = document.getElementById('new-author').value;
  let title = document.getElementById('new-title').value;
  let pages = document.getElementById('new-pages').value;
  let read = document.getElementById('new-read');
  read = checkRead(read);
  number = bookNumber;
  return [author, title, pages, read, number];
};

let createObject = () => {
  array = getNewBookInfo();
  bookName = new Book(array[1], array[0], array[2], array[3], array[4]);
  addBookToLibrary(bookName);
};

let createFromArray = () => {
  array = myLibrary;
  for (i = 0; i < array.length; i++) {
    title = array[i].title;
    author = array[i].author;
    pages = array[i].pages;
    read = array[i].read;
    makeBookCard(title, author, pages, read);
  }
};

let deleteCards = () => {
  cards = document.getElementsByClassName('card');
  let i = 0;
  while (i < cards.length) {
    cardContainer.removeChild(cards[0]);
  }
};

let checkRead = (bookRead) => {
  bookRead.checked == true ? (bookRead = true) : (bookRead = false);
  return bookRead;
};

let getReadState = (x, cb) => {
  x == true ? (cb.checked = true) : (cb.checked = false);
};

let cbNumber = 0;

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
  cb.setAttribute('id', 'checkbox' + cbNumber);
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

  cbNumber += 1;
};

const book = new Book('Hunchback', 'Victor Hugo', 789, true, bookNumber);
addBookToLibrary(book);

const book2 = new Book('Gettysburg', 'Walter Shira', 1549, true, bookNumber);
addBookToLibrary(book2);

const book3 = new Book('iRacing', 'David Kramer', 2021, true, bookNumber);
addBookToLibrary(book3);

createFromArray();

/* let toggleRead = () => {
  for (i = 0; i < myLibrary.length; i++) {
    toggleName = 'checkbox' + i;
    //   console.log(toggleName.checked);
    toggle = document.getElementById(toggleName);
    console.log(toggle);
    toggle.addEventListener('click', () => {
      changeReadState(toggle);
    });
  }
}; */

let checkbox = document.querySelectorAll('.checkbox');

let changeReadState = (x) => {
  let test = x.id;
  console.log(test);
  x.checked == true ? console.log('checked') : console.log('unchecked');
};

checkbox.forEach((item) => {
  item.addEventListener('click', () => {
    changeReadState(item);
  });
});

//toggleRead();
