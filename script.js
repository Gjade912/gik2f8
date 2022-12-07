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

searchField.addEventListener("keyup", handleKeyPress);

function test(func){
    func();
}

function handleKeyPress(e){
    /*
    Ska läsa av värdet i searchbox 
    och skicka det till searchbooks
    
    searchbooks returnerar sorterad lista
    listan skickas till renderBooklist
    */
    searchBooks(e.target.value);
}

function searchBooks(searchTerm){
    let filteredList = [];
    for(let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        
        
        if(title.indexOf(searchTerm.toLowerCase()) >= 0){
            console.log('match?');
            filteredList.push(bookList[i]);
        }

    }
    renderBooklist(filteredList);
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


