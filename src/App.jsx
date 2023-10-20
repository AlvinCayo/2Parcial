import { useState } from "react";
import { Profile } from "./components/profile";
import { User } from "./components/user";
import { Id } from "./components/id";
import { Banner } from "./components/banner";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card1">
      <Banner></Banner>
        <div className="card2">
          
          <Profile></Profile>
          <div className="ord">
            <User></User>
            <Id></Id>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
