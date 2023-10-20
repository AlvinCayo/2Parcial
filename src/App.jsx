import { useState } from "react";
import { Profile } from "./components/profile";
import { User } from "./components/user";
import { Id } from "./components/id";
import { Banner } from "./components/banner";
import { Container_icon } from "./components/container_icon";
import "./App.css";

function App() {
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
          <div className="container">
            <Container_icon></Container_icon>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
