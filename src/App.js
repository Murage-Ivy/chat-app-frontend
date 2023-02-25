import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import ChatRoom from "./components/messages/ChatRoom";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
