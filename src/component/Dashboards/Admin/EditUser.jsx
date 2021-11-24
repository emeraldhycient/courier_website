import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from "react-router";

function EditUser() {
  const { userid } = useParams();

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const [isloading, setisloading] = useState(false);
  const toggleloading = () => {
    setisloading((load) => !load);
  };

  const update = (e) => {
    e.preventDefault();

    toggleloading();

    const formdata = new FormData();

    formdata.append("fullname", fullname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("userid", userid);

    axios
      .post("https://api.cedacourier.com/auth/updateuser.php", formdata)
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      })
      .finally((e) => {
        toggleloading();
      });
    return false;
  };

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("userid", userid);
    axios
      .post("https://api.cedacourier.com/admin/getUser.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          setfullname(res.data.data.fullname);
          setphone(res.data.data.phone);
          setemail(res.data.data.email);
          setaddress(res.data.data.addresses);
        }
      })
      .catch((err) => {
        window.alert(err.response.data.message);
        console.error(err.response.data);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <div className="col-md-6 mx-auto card p-2  mt-5">
          <h6 className="primary-text my-3 ml-1">update {fullname} details</h6>
          <form action="" className="form-group" onSubmit={update}>
            <label className="text-muted">fullname</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
            />

            <label className="text-muted">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <label className="text-muted">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />

            <label className="text-muted">address</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
            {isloading ? (
              <button className="btn btn-info float-left mt-2">
                updating ...
              </button>
            ) : (
              <button className="btn primary-bg float-right mt-2" type="submit">
                update
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
