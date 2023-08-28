import { useState } from "react";
import React from "react";
import "./ImageGenerator.css";
import bg from "../Components/Background/bg.jpg";
import axios from "axios";


const ImageGenerator = () => {
  const [image, setImage] = useState("");
  //Sconst [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const generate = async () => {
    const response = await axios.post("http://localhost:3999/api/replicate/image", {
      prompt,
    });
    //console.log(response);

    setImage(response.data[0]);
  };

  return (
    <div className="ai-image-generator">
      <div className="search-box mt-20">
        <input
          type="text"
          className="search-input"
          placeholder="Create your imagination"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></input>
        <button type="submit" className="generate-btn" onClick={generate}>
          Surprise me😁
        </button>
      </div>

      <img src={bg} id="image" />

      <div className="title-bar">
        <h1 className="text">
          Image<span> Generator</span>
        </h1>
      </div>

      <div style={{ width: 512, height: 512, borderRadius: "8px" }}>
        <img src={image} />
      </div>
    </div>
  );
};

export default ImageGenerator;
