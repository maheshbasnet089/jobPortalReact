import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../config";
import { io } from "socket.io-client";

// import socket from "./Socket";

const Chat = () => {
  const { id } = useParams();
  const socket = useRef();

  console.log(id);
  const userId = localStorage.getItem("token");
  const [inputmessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [scrollRef, setScrollRef] = useState(null);
  const [arrivalMessage, setarrivalMessage] = useState(null);
  const fetchMessages = async () => {
    const res = await axios.get(`${baseUrl}user/message/${userId}/${id}`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
    setMessages(res.data.allMessages);
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  useEffect(() => {
    scrollRef?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    socket.current = io("http://localhost:4000");
    socket.current.emit("addUser", userId);
  }, [userId]);
  const sendMessage = async (e) => {
    e.preventDefault();
    const messages2 = {
      myself: true,
      message: inputmessage,
    };
    socket.current.emit("send-msg", {
      from: userId,
      to: id,
      message: inputmessage,
    });
    const response = await axios.post(
      `${baseUrl}user/message`,
      {
        from: userId,
        to: id,
        message: inputmessage,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    setMessages([...messages, messages2]);
    setInputMessage("");
    console.log(response.data);
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg) => {
        console.log(msg);
        setarrivalMessage({ myself: false, message: msg });
      });
    }
  }, [arrivalMessage]);
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  return (
    <>
      <div className="w-[80%] m-auto pt-10">
        <div class="w-full h-[90vh] px-5 flex flex-col justify-between shadow-2xl">
          <div class="flex flex-col mt-5">
            {messages.map((msg, i) => {
              return (
                <div ref={scrollRef} key={i}>
                  {msg.myself == true ? (
                    <div key={msg._id} class="flex justify-end mb-4">
                      <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        {msg.message}
                      </div>
                      <img
                        src={localStorage.getItem("avatar")}
                        class="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>
                  ) : (
                    <div class="flex justify-start mb-4">
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        class="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                        {msg.message}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div class="py-5">
            <form onSubmit={sendMessage}>
              <input
                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
                id="m"
                autoComplete="off"
                value={inputmessage}
                onChange={(event) => setInputMessage(event.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
