import { useEffect, useState } from "react";
import "./App.css";

const date = () => {
  return new Date();
};

function Clock() {
  const [time, setTime] = useState(date().toLocaleTimeString());
  const refreshClock = () => setTime(date().toLocaleTimeString());

  useEffect(() => {
    const intID = setInterval(() => {
      refreshClock();
    }, 1000);

    return () => {
      clearInterval(intID);
    };
  }, []);

  return <span>{time}</span>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
