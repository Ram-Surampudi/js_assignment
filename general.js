const axios = require("axios");

const BASE_URL = "http://localhost:3000";


// 1️⃣ Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        console.log("All Books:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}


// 2️⃣ Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        console.log("Book by ISBN:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}


// 3️⃣ Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books/author/${author}`);
        console.log("Books by Author:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}


// 4️⃣ Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books/title/${title}`);
        console.log("Books by Title:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}



// Run functions
async function run() {

    await getAllBooks();

    await getBookByISBN(1);

    await getBooksByAuthor("Chinua Achebe");

    await getBooksByTitle("Things Fall Apart");

}

run();