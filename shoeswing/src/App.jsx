import React from "react";
import './assets/css/styles.css';
import Home from './components/Home';
import ProductsTable from "./components/ProductsTable";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/products" element={<ProductsTable />} />
      </Routes>
    </>
  )
}
export default App;