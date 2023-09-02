import React, { useRef, useState } from "react";
import axios from "axios";

function VideoGenerator() {
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let promptStart = useRef(null);
  let promptEnd = useRef(null);

  const generateVideo = async () => {
    if (promptStart.current.value === "" && promptEnd.current.value === "") {
      return 0;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3999/api/replicate/video",
        {
          prompt_start: promptStart.current.value,
          prompt_end: promptEnd.current.value,
        }
      );
      console.log(response.data);
      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-image-generator">
      <div className="mt-40">
        <label>Intro</label>
        <input
          className="w-full p-6 rounded-full ."
          type="text"
          placeholder="Describe how you want the video to start"
          ref={promptStart}
        />
        <label>Outro</label>
        <input
          className="w-full p-6 mb-5 rounded-full ."
          type="text"
          placeholder="Describe how you want the video to end"
          ref={promptEnd}
        />
      </div>
      <button type="submit" className="generate-btn" onClick={generateVideo}>
        {isLoading ? "Generating..." : "Surprise me"}
      </button>
      {output && (
        <video controls className="mt-4">
          <source src={output} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default VideoGenerator;
