/*
## Program-1 filter
const arr=[1,2,3,4,5]
const arrResult=arr.filter((num)=>num>2 ) //with the help opf bracket no return type is needed
console.log(arrResult);

*/

/*
## Program-2 filter
//with the help curly braces where return is needed beacause {} starts the scope so it becomes madnatory to write return otherwise it will output empty Array.

const arr1=[5,6,7,8,9]
const result=arr1.filter((num)=>{
    return num>6
})
console.log(result);

*/

/*
// ## Program-3 filter
// program to filter the books according to different situations
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
//through brackets outpit in 1 line
const filteredBooks = books.filter(
  (book) => book.edition > 2007 && book.publish > 1980
);

//through {} with return
const filteredBooks1 = books.filter((book1) => {
  return book1.genre === "Non-Fiction";
});
console.log(filteredBooks); //output of ()
console.log(filteredBooks1); //output of {return}

*/
