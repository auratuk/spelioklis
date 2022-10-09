import GridComponent from "./Grid";
import { KeyboardEvent } from "react";
import KeyboardComponent from "./Keyboard";
import { useState } from "react";

function App() {
  const [state, setState] = useState([...Array(6)]);
  const alphabet = "ĄČĘĖĮŠŲŪŽERTYUIOPLASDFGHJKZCVBNM".split("");

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (alphabet.includes(e.key.toUpperCase())) {
      const chars = [...state];
      chars.push(e.key.toUpperCase());
      setState(chars);
    }

    if (e.key === "Backspace") {
      const chars = [...state];
      chars.pop();
      setState(chars);
    }

    if (e.key === "Enter") {
    }
  };

  return (
    <div
      tabIndex={0}
      className="App outline-none flex flex-col h-screen justify-center items-center"
      onKeyDown={handleKeyDown}
    >
      <GridComponent words={state} />
      <KeyboardComponent />
    </div>
  );
}

export default App;
