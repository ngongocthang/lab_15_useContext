import { useState, useEffect } from "react";
import { fetchBooks } from "../api";

const useFetchBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const data = await fetchBooks();
                setBooks(data);
        };
        fetchData();
    }, []);

    return books;
};

export default useFetchBooks;
