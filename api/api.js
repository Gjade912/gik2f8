const url = 'https://gik2f8-labs.herokuapp.com/books';

function getAll()
{
    return fetch(url)
        .then((result) => result.json())
        .then((jsonData) => jsonData);
}
