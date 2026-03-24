let book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: '1925',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book.getSummary());