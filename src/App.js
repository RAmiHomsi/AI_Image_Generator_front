import {Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import ImageGenerator from './Routes/ImageGenerator';
import Chatbot from './Routes/Chatbot/Chatbot';
import NavBar from './Components/NavBar/NavBar';
import { Card } from './Components/Cards/Card';
import { BotSystem } from './Routes/Chatbot System/BotSystem';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/generator" element={<ImageGenerator/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/chatsystem" element={<BotSystem/>}/>
        

      </Routes>
    </>
  );
}

export default App;
