import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/userSlice";

export default function UpdateUsers() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((x) => x._id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setContact(user.contact);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.put("http://localhost:3000/update/" + id,{name,email,contact});
    dispatch(updateUser({id,name,email,contact}));
    navigate("/");
  };
  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={handleUpdate}>
          <h1>Update</h1>
          <div className="input-box">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
            <i className="fa-solid fa-circle-user"></i>
            {name.length < 3 ? (
              <span style={{ color: "aqua", fontWeight: "300" }}>
                Name is too short
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="input-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="input-box">
            <input
            value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="text"
              placeholder="Contact"
              required
            />
            <i className="fa-solid fa-address-book"></i>
            {contact.length < 12 ? (
              <span style={{ color: "aqua", fontWeight: "300" }}>
                lenght must be 11 digits e.g; <strong>03xx-xxxxxxx</strong>
              </span>
            ) : (
              ""
            )}
          </div>

          <button type="submit" className="createbtn">
            Update
          </button>
        </form>
      </div>
    </>
  );
}
