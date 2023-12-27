import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUsers } from "../store/userSlice";
import { deleteUser } from "../store/userSlice";

export default function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.warn(users)
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/");
    dispatch(getUsers(res.data));
  };

  const handleDelete = async (id) => {
    const res = await axios.delete("http://localhost:3000/delete/" + id);
    dispatch(deleteUser({ id }));
    getData();
  };

  return (
    <>
      <div className="wrapper">
        <Link to={"/create"} className="btn btn-success">
          Add +
        </Link>
        <div className="table-container my-2">
          {users.length ? (
            <table className="transparent-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((items, index) => {
                  return (
                    <tr key={index}>  
                      <td>{items.name}</td>
                      <td>{items.email}</td>
                      <td>{items.contact}</td>
                      <td>
                        <div style={{ display: "flex" }}>
                          <Link to={`/update/${items._id}`} className="btn btn-primary mx-2">Edit</Link>
                          <button
                            onClick={(e) => {
                              handleDelete(items._id);
                            }}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h4 style={{}}>No Data to Show</h4>
          )}
        </div>
      </div>
    </>
  );
}
