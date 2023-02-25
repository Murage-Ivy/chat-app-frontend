import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

function App({ cable }) {
  console.log(cable);
  cable.subscriptions.create("MessageRoomChannel", {
    connected() {
      console.log("connected");
    },

    disconnected() {
      console.log("disconnected");
    },
    received(data) {
      console.log("received");
    },
  });
  return (
    <div className="App">
      {/* <SignUp/> */}
      <Login />
    </div>
  );
}

export default App;
