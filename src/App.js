import {Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import ImageGenerator from './Routes/ImageGenerator';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/generator" element={<ImageGenerator/>}/>
      </Routes>
    </>
  );
}

export default App;
