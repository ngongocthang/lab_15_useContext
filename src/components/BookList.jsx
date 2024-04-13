import BookShow from "./BookShow";
import "./bookList.css";
const BookList = ({ books, onDelete, onEdit }) => {
    return (
        <div className="book-list">
            {books.map(book => (<BookShow book={book} onDelete={onDelete} onEdit={onEdit} />))}
        </div>
    );
};

export default BookList;