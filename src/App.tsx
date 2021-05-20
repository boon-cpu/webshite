import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./App.css";
import twitter from "./img/twitter-fill.svg";
import discord from "./img/discord-fill.svg";
import github from "./img/github-fill.svg";
import man from "./img/photo-1552058544-f2b08422138a.png";

console.error("Boon :)");
console.log("Background image made by: https://unsplash.com/@driaug <3");
const App = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!document) return;

    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keyup", listener);
    return () => document.removeEventListener("keyup", listener);
  }, [setOpen]);

  return (
    <div className="App">
      <ReactCardFlip isFlipped={open} flipDirection="horizontal">
        <div className="bar">
          <h1>About Me</h1>
          <p id="waffle">
            Hi there. I am a 15 year old full-stack TypeScript developer
            currently based in the UK 🇬🇧. I am always looking to improve myself
            and the world around us in any way possible. Using the latest
            technologies, I can create software that is future-proof, efficient
            and scalable. Get in touch on one of my socials!
          </p>
          <div className="back">
            <button id="back" onClick={handleClick}>
              Go Back
            </button>
            <div className="line" />
          </div>
        </div>

        <div className="box">
          <div className="avatar">
            <img src={man} alt="avatar" className="avatar" />
          </div>
          <h1>Harrison Boon</h1>
          <p>Full-stack TypeScript engineer</p>
          <div className="about">
            <button id="about" onClick={handleClick}>
              About me
            </button>
            <div className="line" />
          </div>
          <div className="links">
            <a className="link-button" href="https://twitter.com/boon_cpu" rel="noreferrer">
              <img
                src={twitter}
                alt="twitter"
              />
            </a>
            <a className="link-button" href="https://dsc.bio/boon" rel="noreferrer">
              <img
                src={discord}
                alt="discord"
              />
            </a>
            <a className="link-button" href="https://github.com/boon-cpu" rel="noreferrer">
              <img
                src={github}
                alt="github"
              />
            </a>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default App;
