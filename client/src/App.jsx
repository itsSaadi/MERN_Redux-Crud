import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Users from "../components/Users";
import CreateUsers from "../components/CreateUsers";
import UpdateUsers from "../components/UpdateUsers";

function App() {
  return (
    <>
          <div className="d-flex vh-100  justify-content-center align-items-center contain">
    <h1 className="title">MERN CRUD</h1>
             
      {/* <img className="img-main" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update/:id" element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
      </div>

    </>
  );
}

export default App;
