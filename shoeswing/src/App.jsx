import React from "react";
import './assets/css/styles.css';
import Home from './components/Home';
import ProductsTable from "./components/ProductsTable";
import UsersTable from "./components/UsersTable";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/products" element={<ProductsTable />} />
        <Route path="/users" element={<UsersTable />} />
      </Routes>
    </>
  )
}
export default App;