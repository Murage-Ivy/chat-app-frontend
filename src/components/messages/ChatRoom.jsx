import React, { useEffect, useState } from "react";
import ActionCable from "actioncable";
import MessageForm from "../messageForm/MessageForm";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    content: "",
    user_id: 1,
  });
  useEffect(() => {
    //createConsumer creates a persistent connection to the backend.
    //The connection is established when the component is mounted or rendered
    //and is closed when the component is unmounted or removed from the DOM.
    const cable = ActionCable.createConsumer("ws://localhost:3000/cable");

    const chatChannel = "MessageRoomChannel";

    // In this part we create an object with a series of callback functions
    // that will be fired when the connection is established, when a message
    // is received, and when the connection is closed.
    //The subscribe method creates a new subscription to the specified channel.
    const handlers = {
      // the conneted callback function is fired when a connection is established to the backend
      // that is when a user subsrcibes to a channel
      connected() {
        console.log("connected");
      },

      // the received callback function is fired when a message is received from the backend
      received(data) {
        console.log("recieved");
        setMessages([...messages, data]);
      },
      //   the disconnected calllback function is fired when a connection is disconnected
      disconnected() {
        console.log("disconnected");
      },
    };

    cable.subscriptions.create(chatChannel, handlers);
  }, [messages]);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setMessage({ ...message, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const postMessage = async () => {
      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      if (response.ok) {
        console.log("sent");
      }
    };
    postMessage();
    setMessage({ content: "", user_id: 1 });
  }

  console.log(messages);
  return (
    <div className="chatRoom">
      <MessageForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        message={message}
      />
    </div>
  );
}

export default ChatRoom;
