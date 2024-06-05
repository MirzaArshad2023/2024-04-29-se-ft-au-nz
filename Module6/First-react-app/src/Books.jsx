import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";
import { useState } from "react";
function Books(props)
{
    let books = ['Harry Potter', 'Lord of the rings', 'Books1', 'Books2']
    const[currentBooks, setCurrentBooks] = useState(books)
    return(
        <>
            <p>Books</p>
            <BooksList books={currentBooks}></BooksList>
            <BooksFilter books={currentBooks}></BooksFilter>
        </>
    )
}
export default Books;