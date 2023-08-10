import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Header from "./components/Header/Header";
import TabsContainer from "./components/TabsContainer/TabsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Title>
        <h1>Sign In</h1>
      </Title>
      <TabsContainer />
    </div>
  );
}

export default App;
