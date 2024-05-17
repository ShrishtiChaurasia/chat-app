import "./App.css";
import Chatarea from "./Chatarea";
import Create_Groups from "./Create_Groups";
import Groups from "./Groups";
import Login from "./Login";
import Users_Groups from "./Users_Groups";
import Welcome from "./Welcome";
import Maincontainer from "./mainContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<Maincontainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chats" element={<Chatarea />} />
            <Route path="groups" element={<Groups />} />
            <Route path="create-groups" element={<Create_Groups />} />
            <Route path="users-groups" element={<Users_Groups />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
