import React from "react";
import "./MessageForm.css";

function MessageForm() {
  return (
    <div className="message-form-group">
      <form className="message-form">
        <input type="text" placeholder="Type a message..." className="type-message" />
        <input type="submit" value="Send" className="send-btn" />
      </form>
    </div>
  );
}

export default MessageForm;
