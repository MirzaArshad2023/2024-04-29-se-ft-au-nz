import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";
function Books(props)
{
    let books = ['Harry Potter', 'Lord of the rings', 'Books1', 'Books2']
    return(
        <>
            <p>Books</p>
            <BooksList books={books}></BooksList>
            <BooksFilter books={books}></BooksFilter>
        </>
    )
}
export default Books;