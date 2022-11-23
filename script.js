'use strict';

/*Vad ska vi göra här*/

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
    /* 
    Loopa igenom listan
    Söka efter aktuella item i listan
    Sökterm: titel
    if titel innehåller sökterm
        add to filtered list.

    returnera list eller anropa renderBooklist
    */
    let filteredList = [];
    for(let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        
        
        if(title.indexOf(searchTerm.toLowerCase()) > 0){
            console.log('match?');
            filteredList.push(bookList[0]);
        }

    }
    console.log(filteredList);
}

function renderBooklist(list){

}

searchBooks("oliver")


