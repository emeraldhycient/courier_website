import React, { useState, useEffect } from "react";
import axios from "axios";

function Booking() {
  const [bookings, setbookings] = useState("");

  const confirmpayment = (tracking) => {
    axios
      .get(
        `https://api.cedacourier.com/admin/updatebooking.php?tracking=${tracking}`
      )
      .then((res) => {
        if (res.data.status === "success") {
          window.alert(res.data.message);
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBookings = () => {
    axios
      .get(`https://api.cedacourier.com/admin/allbookings.php`)
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
    <>
      <div className="container mt-5">
        <div className="col-md-12 mx-auto card px-3 py-3">
          <h6 className="mb-4 primary-text">
            <b>ALL BOOKING</b>
          </h6>
          <div className="table-responsive">
            <table className="table striped border text-muted">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>tracking</td>
                  <td>Receivers Name</td>
                  <td>Receivers Address</td>
                  <td>Receivers Email</td>
                  <td>Receivers Zipcode</td>
                  <td>Senders id</td>
                  <td>Quantity</td>
                  <td>Weight</td>
                  <td>special Instructions</td>
                  <td>Payment Status</td>
                  <td>Booking Date</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {bookings ? (
                  bookings.map((booking, i) => (
                    <tr key={i}>
                      <td>{booking.id}</td>
                      <td>{booking.tracking}</td>
                      <td>{booking.receivername}</td>
                      <td>{booking.receiveraddress}</td>
                      <td>{booking.receiveremail}</td>
                      <td>{booking.receiverpostal}</td>
                      <td>{booking.sendersid}</td>
                      <td>{booking.quantity}</td>
                      <td>{booking.weigh}</td>
                      <td>{booking.instructions}</td>
                      {booking.paymentstatus === "notpaid" ? (
                        <td className="blinker">{booking.paymentstatus}</td>
                      ) : (
                        <td className="text-success">
                          {booking.paymentstatus}
                        </td>
                      )}
                      <td>{booking.bookingdate}</td>
                      <td>
                        {booking.paymentstatus === "notpaid" ? (
                          <button
                            className="btn btn-sm mb-2 primary-bg text-light"
                            onClick={(e) => confirmpayment(booking.tracking)}
                          >
                            confirmpayment<i className="fa fa-check-double"></i>
                          </button>
                        ) : (
                          ""
                        )}

                        <button className="btn primary-bg text-light">
                          <a
                            href={`/admin/dashboard/update-location/${booking.tracking}`}
                            className="text-light"
                          >
                            <i className="fa fa-street-view"></i>
                          </a>
                        </button>
                      </td>
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
    </>
  );
}

export default Booking;
