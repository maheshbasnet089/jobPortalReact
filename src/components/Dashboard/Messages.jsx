import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

const Messages = () => {
  const [messages, setMessages] = React.useState([]);

  const navigate = useNavigate();
  const fetchMessages = async () => {
    const res = await axios.get(`${baseUrl}company/messages`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
    setMessages(res.data.messages);
    console.log(messages)
  };
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => {
              return (
                <tr
                  key={message._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {message.chatUsers[0]}
                  </th>

                  <td className="px-6 py-4">
                    <a
                      onClick={() => navigate(`/chat/${message.sender}`)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      See
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
