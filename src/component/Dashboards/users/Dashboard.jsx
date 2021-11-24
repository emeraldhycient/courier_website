import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

import Header from "./Header";

function Dashboard() {
  const [bookings, setbookings] = useState("");

  const getBookings = () => {
    const userid = sessionStorage.getItem("userid");

    axios
      .get(`https://api.cedacourier.com/user/allBooking.php?userid=${userid}`)
      .then((res) => {
        if (res.data.status === "success") {
          const dat = Object.values(res.data.data);
          setbookings(dat);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="col-md-9 mx-auto px-3 py-3">
          <h6 className="bg-light round p-3">
            <a href="/admin/dashboard/chat/bia-617342481af7c4.70200821">
              <i className="fa fa-comment-alt mr-2 primary-text"></i>
              Message Support
            </a>
          </h6>
        </div>
        <div className="col-md-9 mx-auto card px-3 py-3">
          <h6 className="mb-4 primary-text">
            <b>ALL BOOKING</b>
          </h6>
          <div className="table-responsive">
            <table className="table table-striped table-bordered text-muted">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>tracking</td>
                  <td>Receivers Name</td>
                  <td>Receivers Address</td>
                  <td>Booking Date</td>
                  <td>Payment Status</td>
                  <td>
                    Upload <i className="fa fa-cloud-upload-alt"></i>
                  </td>
                </tr>
              </thead>
              <tbody>
                {bookings ? (
                  bookings.map((booking, i) => (
                    <tr>
                      <td>{booking.id}</td>
                      <td>{booking.tracking}</td>
                      <td>{booking.receivername}</td>
                      <td>{booking.receiveraddress}</td>
                      <td>{booking.bookingdate}</td>
                      {booking.paymentstatus === "notpaid" ? (
                        <td className="blinker">{booking.paymentstatus}</td>
                      ) : (
                        <td className="text-success">
                          {booking.paymentstatus}
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <div className="w-100 p-5 text-center">
                    <i className="fa fa-folder-open fa-5x"></i>
                    <h6 className="primary-text">no bookings found</h6>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
