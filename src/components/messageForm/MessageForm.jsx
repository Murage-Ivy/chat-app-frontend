import React from "react";
import "./MessageForm.css";

function MessageForm({ handleChange, handleSubmit, message }) {
  return (
    <div className="message-form-group">
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          className="type-message"
          name="content"
          value={message.content}
          onChange={handleChange}
        />
        <input type="submit" value="Send" className="send-btn" />
      </form>
    </div>
  );
}

export default MessageForm;
