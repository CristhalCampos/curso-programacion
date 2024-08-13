import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from './components/Button';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Products from './pages/Products';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="*"
          element={"404"}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
