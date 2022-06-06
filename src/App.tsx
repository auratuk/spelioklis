import GridComponent from "./Grid";
import KeyboardComponent from "./Keyboard";

function App() {
  return (
    <div className="App flex flex-col h-screen justify-center items-center">
      <GridComponent />
      <KeyboardComponent />
    </div>
  );
}

export default App;
