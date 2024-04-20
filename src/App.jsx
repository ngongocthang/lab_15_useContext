import React from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./App.css";
import { BookContext, BookProvider } from "./context/book";
import useFetchBooks from "./context/useFetchBooks ";

const App = () => {
    const books = useFetchBooks();

    return (
        <BookProvider>
            <div className="wrapper">
                <div className="container">
                    <h1 className="text">Reading Book</h1>
                    <div className="window">
                        <BookList books={books} />
                    </div>
                </div>
                <BookCreate />
            </div>
        </BookProvider>
    );
};

export default App;

