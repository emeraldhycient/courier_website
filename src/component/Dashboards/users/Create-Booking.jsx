import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useAlert } from "react-alert";

import Header from "./Header";

function CreateBooking() {
  const alert = useAlert();
  const history = useHistory();

  const [receivername, setreceivername] = useState("");
  const [receiveremail, setreceiveremail] = useState("");
  const [receiveraddress, setreceiveraddress] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [weight, setweight] = useState("");
  const [bookingdate, setbookingdate] = useState("");
  const [expecteddate, setexpecteddate] = useState("");
  const [comment, setcomment] = useState("");

  const [isloading, setisloading] = useState(false);
  const toggleisloading = () => {
    setisloading((e) => !e);
  };

  const createbooking = (e) => {
    e.preventDefault();

    toggleisloading();

    const formdata = new FormData();
    formdata.append("receivername", receivername);
    formdata.append("receiveremail", receiveremail);
    formdata.append("receiveraddress", receiveraddress);
    formdata.append("postalcode", postalcode);
    formdata.append("quantity", Quantity);
    formdata.append("weight", weight);
    formdata.append("bookingdate", bookingdate);
    formdata.append("expected", expecteddate);
    formdata.append("instruction", comment);
    formdata.append("senderid", sessionStorage.getItem("userid"));

    axios
      .post("https://api.cedacourier.com/user/createBooking.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          alert.success(res.data.message);
          setTimeout(() => {
            history.push("/");
          }, 1000);
        } else {
          alert.error(res.data.message);
        }
        console.log(res);
      })
      .catch((err) => console.error(err))
      .finally((e) => {
        toggleisloading();
      });

    return false;
  };

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <div className="col-md-8 mx-auto card px-3 pt-3 mb-3">
          <form action="" className="form-group" onSubmit={createbooking}>
            <div className="border bg-light mb-3">
              <h6 className=" ml-2 primary-text">
                <b>Receivers Details</b>
              </h6>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  value={receivername}
                  onChange={(e) => setreceivername(e.target.value)}
                  placeholder="Receiver Name"
                  className="form-control mb-3"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  value={receiveremail}
                  onChange={(e) => setreceiveremail(e.target.value)}
                  placeholder="Receiver Email"
                  className="form-control mb-3"
                  required
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  value={receiveraddress}
                  onChange={(e) => setreceiveraddress(e.target.value)}
                  placeholder="Receiver Address"
                  className="form-control mb-3"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  value={postalcode}
                  onChange={(e) => setpostalcode(e.target.value)}
                  placeholder="Receiver City postalcode"
                  className="form-control mb-3"
                  required
                />
              </div>
            </div>
            <div className="border bg-light mb-3">
              <h6 className=" ml-2 primary-text">
                <b>Sender Details</b>
              </h6>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={sessionStorage.getItem("fullname")}
                  placeholder="Senders Name"
                  className="form-control mb-3"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={sessionStorage.getItem("email")}
                  placeholder="Senders Email"
                  className="form-control mb-3"
                />
              </div>
            </div>
            <div className="border bg-light mb-3">
              <h6 className=" ml-2 primary-text">
                <b>Shipment Details</b>
              </h6>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  value={Quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantity"
                  className="form-control mb-3"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name=""
                  id=""
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                  placeholder="Weight"
                  className="form-control mb-3"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="text-muted">
                  Booking Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  value={bookingdate}
                  onChange={(e) => setbookingdate(e.target.value)}
                  className="form-control mb-3"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="text-muted">
                  Expected Delivery Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  value={expecteddate}
                  onChange={(e) => setexpecteddate(e.target.value)}
                  placeholder="Pick up Date"
                  className="form-control mb-3"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name=""
                  id=""
                  value={comment}
                  onChange={(e) => setcomment(e.target.value)}
                  placeholder="Special instructions ..."
                  className="form-control"
                  required
                />
              </div>
            </div>
            {isloading ? (
              <button
                type="submit"
                className="primary-bg btn text-light mt-2 px-4 float-right"
              >
                please wait ...
              </button>
            ) : (
              <button
                type="submit"
                className="primary-bg btn text-light mt-2 px-4 float-right"
              >
                Book
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateBooking;
