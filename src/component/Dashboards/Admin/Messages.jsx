import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function Messages() {
  const [users, setusers] = useState();
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
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="col-md-6 bg-light p-3 mx-auto mt-5">
          {users
            ? users.map((user, i) => (
                <div className="mb-2 d-flex justify-content-between">
                  <div className="holduser d-flex align-items-center">
                    <div className="round bg-white p-3 mr-2">
                      <i className="fa fa-user primary-text "></i>
                    </div>
                    <h6>{user.fullname}</h6>
                  </div>

                  <a href={`/admin/dashboard/message/${user.userid}`}>
                    <i className="fa fa-comment-alt fa-2x"></i>
                  </a>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Messages;
