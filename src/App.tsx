import React from "react";
import "./App.css";
import twitter from "./img/twitter-fill.svg";
import discord from "./img/discord-fill.svg";
import github from "./img/github-fill.svg";
import man from "./img/photo-1552058544-f2b08422138a.png";
function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="avatar">
          <img src={man} alt="avatar" className="avatar" />
        </div>
        <h1>Harrison Boon</h1>
        <p>Full-stack TypeScript engineer</p>
        <div className="about">
          <button>About me</button>
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
}

export default App;
