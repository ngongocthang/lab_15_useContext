import React, { createContext, useState, useEffect } from "react";
import { fetchBooks, createBook, updateBook, deleteBook } from "../api";

const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

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


    const handleDelete = async (id) => {
        const book = await deleteBook(id);
        console.log(book);
        setBooks(books.filter((item) => item.id !== book.id));
    }
    
    useEffect(async () => { 
        const tams = await fetchBooks();
        console.log(tams);
        setBooks(tams);
    }, []);


    const valueShare = {
        onCreate: handleCreate,
        onEdit: handleUpdate,
        onDelete: handleDelete,
        books
    };

    return <BookContext.Provider value={valueShare}>{children}</BookContext.Provider>;
};

export { BookContext, BookProvider };
