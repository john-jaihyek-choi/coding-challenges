// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

// pseudo code
// declare a function with 2 parameters, title and author
// declare constructor in the function for title and author and assign each of the properties to the value of parameters
// declare new methods, getTitle and getAuthor which returns title and author information

function Book (title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = () => {
        return 'Title: ' + this.title;
    }
    this.getAuthor = () => {
        return 'Author: ' + this.author;
    }
}

const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');