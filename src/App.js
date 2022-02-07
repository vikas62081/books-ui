import logo from './logo.svg';
import './App.css';
import BookList from './components/bookList';
import AddBook from './components/addBook';
import { useState } from 'react';
import AppRouter from './routing';


function App() {


  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
