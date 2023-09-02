import { useState } from "react";
import React from "react";
import "./ImageGenerator.css";
import axios from "axios";

const ImageGenerator = () => {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const generate = async () => {
    setIsLoading(true);
    const response = await axios.post(
      "http://localhost:3999/api/replicate/image",
      {
        prompt,
      }
    );
    //console.log(response);

    setImage(response.data[0]);
    setIsLoading(false);
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
          {isLoading ? "Generating..." : "Surprise me"}
        </button>
      </div>

      <div className="title-bar">
        <h1 className="text">Image Generator</h1>
      </div>

      <div style={{ width: 512, height: 512, borderRadius: "8px" }}>
        <img src={image} />
      </div>
    </div>
  );
};

export default ImageGenerator;
