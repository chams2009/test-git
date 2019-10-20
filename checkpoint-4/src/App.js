import React from "react";
import Wrapper from "./Wrapper";
import { Photo, Title } from "./Wrapper";
import "./App.css";

function App() {
  return (
    <div className="App-background">
      <h1>Welcome to My Hood</h1>

      <Wrapper>
        <Photo src="/profile.jpg" />

        <Title style={{ color: "red" }}>Chamseddine Bouhouch</Title>

        <Title small>Embedded Engineer</Title>
      </Wrapper>
    </div>
  );
}

export default App;
