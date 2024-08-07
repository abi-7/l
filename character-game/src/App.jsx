import "./App.css";
import RandomCharacter from "../components/handleAPI";
import { useState } from "react";

export default function App() {
  const [newCharacter, setNewCharacter] = useState(true);

  //handles button click of new character
  const handleClick = () => {
    setNewCharacter(false); //set to false to force a re-render
    setTimeout(() => setNewCharacter(true), 0);
  };

  return (
    <>
      <div className="app">
        <div id="title">
          <h1>Guess the Character! </h1>
          <h2 id="subtitle">(Rick and Morty Edition)</h2>
        </div>
        <div id="container">
          <button onClick={handleClick} id="characterbtn">
            New Character!
          </button>
          <div>{newCharacter && <RandomCharacter />}</div>
        </div>
      </div>
    </>
  );
}
