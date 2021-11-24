import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
export default function Users() {
  const [users, setusers] = useState("");

  const deleteuser = (userid) => {
    axios
      .get(`https://api.cedacourier.com/admin/deleteUser.php?userid=${userid}`)
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const getUsers = () => {
    axios
      .get("https://api.cedacourier.com/admin/users.php")
      .then((res) => {
        if (res.data.status === "success") {
          const data = Object.values(res.data.data.users);
          setusers(data);
        } else {
          window.alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="container mt-5">
          <div className="col-md-12 mx-auto card px-3 py-3">
            <h6 className="mb-4 primary-text">
              <b>ALL Users</b>
            </h6>
            <div className="table-responsive">
              {users ? (
                <table className="table striped border text-muted">
                  <thead>
                    <tr>
                      <td>S/N</td>
                      <td>userid</td>
                      <td>Full Name</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td> Address</td>
                      <td>Password</td>
                      <td>Created on</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) =>
                      user.isadmin ? (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{user.userid}</td>
                          <td>{user.fullname}</td>
                          <td>{user.phone}</td>
                          <td>{user.email}</td>
                          <td>{user.addresses}</td>
                          <td>hidden</td>
                          <td>{user.createdAt}</td>
                        </tr>
                      ) : (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{user.userid}</td>
                          <td>{user.fullname}</td>
                          <td>{user.phone}</td>
                          <td>{user.email}</td>
                          <td>{user.addresses}</td>
                          <td>{user.pass}</td>
                          <td>{user.createdAt}</td>
                          <td>
                            <span className="badge badge-info">
                              <a
                                href={`/admin/dashboard/edit-user/${user.userid}`}
                                className="text-light"
                              >
                                Edit
                              </a>
                            </span>
                            <span
                              className="badge badge-danger"
                              onClick={(e) => deleteuser(user.userid)}
                            >
                              Delete
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              ) : (
                <div className="w-100 p-5 text-center">
                  <i className="fa fa-folder-open fa-5x"></i>
                  <h6 className="primary-text"> users not found</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
