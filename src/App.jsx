import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { fetchBooks, createBook, updateBook, deleteBook } from "./api";
const App = () => {
    const [books, setBooks] = useState([]);
    
    const handleDelete = async (id) => {
        const book = await deleteBook(id);
        console.log(book);
        setBooks(books.filter((item) => item.id !== book.id));
    }

    const handleCreate = async(term) => {
        const book = await createBook(term);
        if (book) setBooks([...books, book]);
    };

    const handleUpdate = async (id, term) => {
        console.log({ id, term });
        const book = await updateBook(id, term);
        setBooks(
            books.map((item) => item.id === book.id? book: item)
        );
    };
    
    useEffect(async () => {
        const tams = await fetchBooks();
        console.log(tams);
        setBooks(tams);
    }, []);
    
    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="text">Reading Book</h1>
                <div className="window">
                    <BookList books={books} onDelete={handleDelete} onEdit={handleUpdate} />
                </div>
            </div>
            <BookCreate onCreate={handleCreate} />
        </div>
    );
};

export default App;