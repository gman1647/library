function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ', ' + read;
  };
}

/* console.log(theHobbit.info()); */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
