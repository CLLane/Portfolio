import React from "react";
import { Resume } from "./Components/resume";
import avatar from './avatar.svg'
import "./App.css";

function App() {
  return (
    <main>
      <img className='avatar' src={avatar}></img>
      <div class="typewriter">
        <h1>Hi, I'm Chris. I am a Software Developer. Welcome to my site.</h1>
      </div>
    </main>
  );
}

export default App;
