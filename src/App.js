import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import moralisLogo from "./images/Moralis.png";
import { ConnectButton } from "web3uikit";

const App = () => {
  return (
    <div className="main-window">
      <div className="header">
        <img width="160px" src={moralisLogo} alt="logo" />
        <ConnectButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </div>
  );
};

export default App;
