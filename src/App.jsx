import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import UsersData from './Components/UsersData'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer
        position="bottom-right" // 👈 ya "bottom-center" bhi use kar sakte hain
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<Form/>} />
        <Route path="/view-users" element={<UsersData />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
