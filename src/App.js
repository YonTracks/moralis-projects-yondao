import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import moralisLogo from "./images/Moralis.png";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";

const App = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <>
      <div className="header">
        <img width="160px" src={moralisLogo} alt="logo" />
        <div className="connectButton">
        <ConnectButton />
        </div>
      </div>
      {isAuthenticated ? (
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
      ) : (
        <div style={{backgroundColor: "transparent"}} className="loginPage">
          <div className="content">
          <h1 style={{font: "bold", fontSize: "43px",color: "white"}}>Welcome to YonDAO</h1>
        </div>
        </div>
      )}
    </>
  );
};

export default App;
