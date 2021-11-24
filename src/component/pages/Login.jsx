import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useAlert } from "react-alert";

import Header from "../common/Header";

function Login() {
  const alert = useAlert();
  const history = useHistory();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    axios
      .post("https://api.cedacourier.com/auth/login.php", formdata)
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          if (res.data.data.isadmin) {
            sessionStorage.setItem("adminid", res.data.data.userid);
            sessionStorage.setItem("fullname", res.data.data.fullname);
            alert.success(res.data.message);
            setTimeout(() => {
              history.push("/admin/dashboard");
            }, 1000);
          } else {
            sessionStorage.setItem("userid", res.data.data.userid);
            sessionStorage.setItem("email", res.data.data.email);
            sessionStorage.setItem("fullname", res.data.data.fullname);
            alert.success(res.data.message);
            setTimeout(() => {
              history.push("/user/dashboard");
            }, 1000);
          }
        } else {
          alert.error(res.data.message);
        }
      })
      .catch((err) => {
        alert.error(err.response.data.message);
      });

    return false;
  };

  useEffect(() => {
    document.title = "login to your CedaCourier dashboard";
  }, []);
  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="m-auto col-md-6 card py-5">
          <form action="" className="form-group" onSubmit={handleLogin}>
            <input
              type="text"
              name=""
              placeholder="Email "
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form-control mb-4"
              required
            />
            <input
              type="password"
              placeholder="Password .."
              name=""
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="form-control mb-4"
              required
            />
            <div className="text-center mt-2">
              <button
                type="submit"
                className="btn primary-bg text-white round col"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
