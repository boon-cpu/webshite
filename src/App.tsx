import React, { useEffect, useState } from "react";
import "./App.css";
import twitter from "./img/twitter-fill.svg";
import discord from "./img/discord-fill.svg";
import github from "./img/github-fill.svg";
import man from "./img/photo-1552058544-f2b08422138a.png";

console.error("Boon :)");
const App = () => {
  const [open, setOpen] = useState(false);
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
      <div id="drop" className={(open ? "open" : "") + " bar"}>
        <div className="header">
          <button
            id="^"
            onClick={() => {
              setOpen(!open);
            }}
          >
            ^
          </button>
        </div>
        <p id="waffle">
          Hi there. I am a 15 year old full-stack TypeScript developer currently
          based in the UK 🇬🇧. I am always looking to improve myself and the
          world around us in any way possible. Using the latest technologies, I
          can create software that is future-proof, efficient and scalable. Get
          in touch on one of my socials!
        </p>
      </div>
      <div className={"box " + (open ? "blur" : "")}>
        <div className="avatar">
          <img src={man} alt="avatar" className="avatar" />
        </div>
        <h1>Harrison Boon</h1>
        <p>Full-stack TypeScript engineer</p>
        <div className="about">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            About me
          </button>
          <div className="line" />
        </div>
        <div className="links">
          <div className="link-button">
            <a href="https://twitter.com/boon_cpu">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div className="link-button">
            <a href="https://dsc.bio/boon">
              <img src={discord} alt="discord" />
            </a>
          </div>
          <div className="link-button">
            <a href="https://github.com/boon-cpu">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
