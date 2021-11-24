import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from "react-router";
import "../styles.css";

function Chat() {
  const { receiver } = useParams();

  const [message, setmessage] = useState("");
  const [chats, setchats] = useState("");

  const sendMessage = () => {
    const formdata = new FormData();
    formdata.append("sender", sessionStorage.getItem("userid"));
    formdata.append("receiver", receiver);
    formdata.append("message", message);
    axios
      .post("https://api.cedacourier.com/admin/sendmessage.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          setmessage("");
          fetchMessages();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchMessages = () => {
    const formdata = new FormData();
    formdata.append("receiver", receiver);
    formdata.append("sender", sessionStorage.getItem("userid"));
    axios
      .post(`https://api.cedacourier.com/admin/message.php`, formdata)
      .then((res) => {
        if (res.data.status === "success") {
          const dat = Object.values(res.data.data);
          setchats(dat);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="col-md-6 bg-light p-3 mx-auto mt-2" id="chatwindow">
          {chats
            ? chats.map((chat, i) =>
                chat.sender === receiver ? (
                  <div key={i}>
                    <p className="round bg-info p-2 text-light mr-5">
                      {chat.messages}
                    </p>
                    <br></br>
                  </div>
                ) : (
                  <p className="round bg-info p-2 text-light ml-5">
                    {chat.messages}
                  </p>
                )
              )
            : "no chat found"}
        </div>
        <div
          className="col-md-6 bg-light p-3 mx-auto mt-2 round d-flex"
          id="inputholder"
        >
          <input
            type="text"
            name=""
            className="border-0 form-control"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            style={{ backgroundColor: "#cacaca" }}
            id=""
          />
          <button onClick={sendMessage} className="btn primary-bg round">
            <i className="fa  fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
