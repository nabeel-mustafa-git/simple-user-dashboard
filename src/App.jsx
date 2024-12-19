import React from "react";
import { Route, Routes } from "react-router";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<UsersPage />}></Route>
        <Route path="products" element={<ProductsPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
