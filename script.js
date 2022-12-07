'use strict';

console.log("Test");

const bookList = [
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];
//const searchInput = document.children[0].children[1].children[1];
const searchField = document.getElementById('searchField');

console.log(searchField);

searchField.addEventListener("keyup", (e) => searchBooks(e.target.value));

function test(func){
    func();
}

function searchBooks(searchTerm){
    renderBooklist(bookList.filter(({title, author}) => 
    title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
    author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    ));
}


function renderBooklist(bookList)
{   
    const existingElement = document.querySelector('.book-list');
    console.log(existingElement);
    
    const root = document.getElementById('root');
    if (existingElement) 
    {
        root.removeChild(existingElement);
    }
    if (bookList.length > 0)
    {
        root.insertAdjacentHTML('beforeend', BookList(bookList));
    }
}


