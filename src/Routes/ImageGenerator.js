import { useState } from "react";
import React from "react";
import "./ImageGenerator.css"
import bg from '../Components/Background/bg.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ImageGenerator = () => {
  const [image, setImage] = useState("");
  //Sconst [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");


  const generate = async () => {
    const response = await axios.post("http://localhost:3999/api/dalle", {
      prompt,
    });
    //console.log(response);

    setImage(response.data.data);
  };



  return (
    <div className="ai-image-generator">
      <img src={bg} id="image" />

      <div className="title-bar">
        <h1 className="text">Image<span> Generator</span></h1>
        <li> <Link to="/">Home</Link></li>
      </div>



      <div style={{ width: 512, height: 512, borderRadius: '8px' }}>

        <img src={image} />

      </div>

      <div className="search-box">
        <input type="text" className="search-input" placeholder="Create your imagination" value={prompt} onChange={(e) => setPrompt(e.target.value)}></input>
        <button type="submit" className="generate-btn" onClick={generate}>Surprise me😁</button>
      </div>

    </div>
  );
}

export default ImageGenerator;
