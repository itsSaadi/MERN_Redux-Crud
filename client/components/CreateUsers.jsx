import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../store/userSlice";

export default function CreateUsers() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");


  const navigate = useNavigate();
  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/create", {
      name,
      email,
      contact,
    });
    dispatch(createUser(response.data));
    navigate("/");
  };
  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={handleCreate}>
          <h1>Add New User</h1>
          <div className="input-box">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
            <i className="fa-solid fa-circle-user"></i>
            {  name.length < 3 ? (
              <span style={{ color: "aqua", fontWeight: "300" }}>
                Name is too short
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="input-box">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="input-box">
            <input
              onChange={(e) => setContact(e.target.value)}
              type="text"
              placeholder="Contact"
              required
            />
            <i className="fa-solid fa-address-book"></i>
            { contact.length < 12 ? (
              <span style={{ color: "aqua", fontWeight: "300" }}>
                lenght must be 11 digits e.g; <strong>03xx-xxxxxxx</strong>
              </span>
            ) : (
              ""
            )}
          </div>

          <button type="submit" className="createbtn">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
