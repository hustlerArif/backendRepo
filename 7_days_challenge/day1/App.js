import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/Blog';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Todo from './pages/Todo';

function App() {

  return (

  <BrowserRouter>
  <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="todo" element={<Todo />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>

  </BrowserRouter>

  )
}

export default App
