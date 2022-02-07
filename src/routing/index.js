import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from '../components/addBook';
import BookList from '../components/bookList';
import Header from '../components/header';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/addbook" element={<AddBook />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter