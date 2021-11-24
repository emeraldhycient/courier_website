import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from "react-router";

function EditBooking() {
  const { tracking } = useParams();

  const [detail1, setdetail1] = useState("");
  const [detail2, setdetail2] = useState("");
  const [detail3, setdetail3] = useState("");
  const [detail4, setdetail4] = useState("");
  const [detail5, setdetail5] = useState("");
  const [detail6, setdetail6] = useState("");
  const [lat, setlat] = useState("");
  const [lng, setlng] = useState("");
  const [location, setlocation] = useState("");

  const update = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("lat", lat);
    formdata.append("lng", lng);
    formdata.append("currentlocation", location);
    formdata.append("tracking", tracking);
    formdata.append("detail1", detail1);
    formdata.append("detail2", detail2);
    formdata.append("detail3", detail3);
    formdata.append("detail4", detail4);
    formdata.append("detail5", detail5);
    formdata.append("detail6", detail6);

    axios
      .post("https://api.cedacourier.com/admin/updatelocation.php", formdata)
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
    return false;
  };

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("tracking", tracking);
    axios
      .post("https://api.cedacourier.com/admin/track.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          setlocation(res.data.data.locations);
          setdetail1(res.data.data.detail1);
          setdetail2(res.data.data.detail2);
          setdetail3(res.data.data.detail3);
          setdetail4(res.data.data.detail4);
          setdetail5(res.data.data.detail5);
          setdetail6(res.data.data.detail6);
          setlocation(res.data.data.currentlocation);
          setlat(res.data.data.lat);
          setlng(res.data.data.lng);
        }
        console.log(res);
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <div className="col-md-6 mx-auto card p-2  mt-5">
          <h6 className="primary-text my-3 ml-1">update location details</h6>
          <form action="" className="form-group" onSubmit={update}>
            <label className="text-muted">Details 1</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={detail1}
              onChange={(e) => setdetail1(e.target.value)}
            />

            <label className="text-muted">Details 2</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={detail2}
              onChange={(e) => setdetail2(e.target.value)}
            />

            <label className="text-muted">Details 3</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={detail3}
              onChange={(e) => setdetail3(e.target.value)}
            />

            <label className="text-muted">Details 4</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={detail4}
              onChange={(e) => setdetail4(e.target.value)}
            />

            <label className="text-muted">Details 5</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={detail5}
              onChange={(e) => setdetail5(e.target.value)}
            />

            <label className="text-muted">Details 6</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder=""
              value={detail6}
              onChange={(e) => setdetail6(e.target.value)}
            />
            <input
              type="text"
              value={lat}
              onChange={(e) => setlat(e.target.value)}
              placeholder="latitude of the current location"
              name=""
              id=""
              className="form-control mb-3"
            />
            <input
              type="text"
              value={lng}
              onChange={(e) => setlng(e.target.value)}
              placeholder="longitude of the current location"
              name=""
              id=""
              className="form-control mb-3"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              placeholder="name of the current location"
              name=""
              id=""
              className="form-control mb-3"
            />
            <button className="btn primary-bg float-right" type="submit">
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBooking;
