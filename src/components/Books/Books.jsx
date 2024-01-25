// import React from 'react';

import { useEffect, useState } from "react";
import Book from "../Book/Book";
import Dashboard from "../Dashboard/Dashboard";

const Books = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch('books.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])
    
    return (
        <>
        <Dashboard key={books.id}
        data={books}
        ></Dashboard>
        <div className="grid md:grid-cols-3 mt-10 gap-4 justify-items-center items-center">
            {
                books.map(book =><Book 
                key={book.id}
                book={book}
                ></Book>)
            }
        </div>
        </>
    );
};

export default Books;