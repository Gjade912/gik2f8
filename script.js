'use strict';

console.log("Test");

const searchInput = null;
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
function test(func){
    func();
}

function handleKeyPress(input){
    /*
    Ska läsa av värdet i searchbox 
    och skicka det till searchbooks
    
    searchbooks returnerar sorterad lista
    listan skickas till renderBooklist
    */
    console.log("Handle keypress")
    searchBooks(input)
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
    console.log(filteredList);
}

function renderBooklist(list){

}

handleKeyPress("e")

function renderBooklist(list)
{
    /* Ska visa HTML visas/döljs baserat på inehållet. */
    console.log(list);
}


