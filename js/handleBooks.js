const dataPath = "dumdata/books.json"
let table;
let books = [];
let heads = [];
let headers = [];
let book = {};

document.addEventListener('DOMContentLoaded', function () {
    // alert('page load complete');
    table = document.createElement('table');
    intializeTable(dataPath)
}, false);

const form  = document.getElementById('bookForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = form.elements['title'].value;
    let datepublished = form.elements['date-published'].value;
    let author = form.elements['author'].value;
    let version = form.elements['version'].value;
    let comments = form.elements['comments'].value;
    // book = {
    //     "Title":title,
    //     "Published":datepublished,
    //     "Version": version,
    //     "Author": author,
    //     "Comments": comments    
    // };
    book['Title'] = title;
    book['Published'] = datepublished;
    book['Version'] = version;
    book['Author'] = author;
    book['Comments'] = comments;
    // verifyCreatingBook(book)

    // pushToBooks(book);
    // if(verifyCreatingBook(book)) {
    //   pushToBooks(book);
    // } else {
    //     document.getElementById('bookForm').reset();
    // }
    verifyCreatingBook(book);
    event.preventDefault();
});

const resetForm = () => {
    document.getElementById('bookForm').reset();
    book = {}
}
 const verifyCreatingBook = (book) => {
    showModal(book);
 } 

 const submitBook = ()=> {
     console.log('pushing to data table', book);
    pushToBooks(book);
    resetForm();
    hideModal();
 }

 const cancelSubmitBook = ()=> {
    hideModal();
 }
 

const pushToBooks = (data) => {
    books.push(data);
    createTable(headers, books);
    console.log(books);
    books = [];
    document.getElementById('bookForm').reset();
}

const getHeaders = (books) => {
    return [... new Set(books.flatMap(Object.keys))];
}

const handleTableCreation = (books) => {
    headers = getHeaders(books);
    createTable(headers, books);
}

const intializeTable = (dataPath) => {
    fetch(dataPath)
        .then(response => response.json())
        .then(books => {
            books = books;
            headers = getHeaders(books);
            createHeaders(headers);
            handleTableCreation(books);
        }).catch((err)=> {
            console.log('Error occured', err);
        });
}

const createHeaders = (headers) => {
    let tr = table.insertRow(-1);
    heads = headers.map((header) => {
        let th = document.createElement('th');
        th.innerHTML = header;
        tr.appendChild(th);
    })
}


const createTable = (headers, books) => {
    // let tr = table.insertRow(-1);
    // let heads = headers.map((header) => {
    //     let th = document.createElement('th');
    //     th.innerHTML = header;
    //     tr.appendChild(th);
    // })
    console.log('heads', heads);
    console.log('heads', books);
    if(heads) {
        for (var i = 0; i < books.length; i++) {

            tr = table.insertRow(-1);
    
            for (var j = 0; j < headers.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = books[i][headers[j]];
            }
        }
    }

    let divContainer = document.getElementById("datatable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

