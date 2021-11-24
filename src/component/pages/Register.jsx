import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../common/Header";
import axios from "axios";
import { useAlert } from "react-alert";

function Register() {
  const alert = useAlert();
  const history = useHistory();

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");

  const HandleRegister = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("fullname", fullname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("password", password);
    formdata.append("isadmin", "");

    axios
      .post("https://api.cedacourier.com/auth/createaccount.php", formdata)
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          alert.success(res.data.message);
          setTimeout(() => {
            history.push("/login");
          }, 1000);
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
    document.title = "Register to your CedaCourier dashboard";
  }, []);
  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="m-auto col-md-6 card py-5">
          <form action="" className="form-group" onSubmit={HandleRegister}>
            <input
              type="text"
              name=""
              placeholder="Full Name .."
              id="fullname"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              className="form-control mb-4"
              required
            />
            <input
              type="email"
              name=""
              placeholder="Email @gmail.com"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form-control mb-4"
              required
            />
            <input
              type="tel"
              name=""
              placeholder=" Phone +1( )"
              id="phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="form-control mb-4"
              required
            />
            <input
              type="text"
              name=""
              placeholder="Address.."
              id="address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className="form-control mb-4"
              required
            />
            <input
              type="password"
              placeholder="Password **"
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
