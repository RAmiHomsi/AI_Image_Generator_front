import {Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import ImageGenerator from './Routes/ImageGenerator';
import Chatbot from './Routes/Chatbot/Chatbot';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/generator" element={<ImageGenerator/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
      </Routes>
    </>
  );
}

export default App;
