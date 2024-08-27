import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import CreateBooks from './Pages/CreateBooks';
import EditBook from './Pages/EditBook';
import DeleteBook from './Pages/DeleteBook';
import ShowBooks from './Pages/ShowBooks';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/details/:id' element={<ShowBooks/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />

    </Routes>
  )
  // npm i axios react-icons (in frontend folder)
  // axios -> for sending request
  // react-icons for icons
}

export default App
