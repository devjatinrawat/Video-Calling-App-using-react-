import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import external CSS file

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Apply initial transformation after component mounts
    document.querySelector(".homepage-container").style.transform =
      "translate3d(10px, 20px, 0)";
  }, []);

  const submitHandler = () => {
    if (input.trim() !== "") {
      navigate(`/room/${input}`);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-header">Welcome!</h1>
      <div style={{ padding: "0 20px 20px", textAlign: "center" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your name..!"
          className="input-field" // Apply class for input field
          required
        />
        <button
          onClick={submitHandler}
          className="join-button" // Apply class for button
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default HomePage;
