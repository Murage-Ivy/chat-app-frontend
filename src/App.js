import "./App.css";
import Login from "./components/login/Login";
import MessageForm from "./components/messageForm/MessageForm";
import ChatRoom from "./components/messages/ChatRoom";
import SignUp from "./components/signup/SignUp";

function App() {
  // console.log(cable);
  // cable.subscriptions.create("MessageRoomChannel", {
  //   connected() {
  //     console.log("connected");
  //   },

  //   disconnected() {
  //     console.log("disconnected");
  //   },
  //   received(data) {
  //     console.log("received");
  //   },
  // });
  return (
    <div className="App">
      {/* <SignUp />
      <Login /> */}
      {/* <MessageForm /> */}
      <ChatRoom/>
    </div>
  );
}

export default App;
