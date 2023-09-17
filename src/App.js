import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ImageGenerator from "./Routes/ImageGenerator";
import Chatbot from "./Routes/Chatbot/Chatbot";
import NavBar from "./Components/NavBar/NavBar";
import { BotSystem } from "./Routes/Chatbot System/BotSystem";
import About from "./Routes/About/About";
import VideoGenerator from "./Routes/Video-Generator/VideoGenerator";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imagegenerator" element={<ImageGenerator />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/chatsystem" element={<BotSystem />} />
          <Route path="/videogenerator" element={<VideoGenerator />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
