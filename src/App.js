import "./App.css";
import SignUp from "./components/signup/SignUp";

function App({ cable }) {
  console.log(cable)
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
      <SignUp/>
    </div>
  );
}

export default App;
