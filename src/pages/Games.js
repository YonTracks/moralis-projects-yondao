import React from 'react'
import "./pages.css";
import { TabList, Tab } from "web3uikit";



function Games() {
  return (
    <>
    <div className="main-window">
    <div className="game-tabContent">
    <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName="Poker">
          <div className="game-tab">
              Coming Soon!
          </div>
          </Tab>
          <Tab tabKey={2} tabName="Zilch">
          <div className="game-tab">
              Coming Soon!
          </div>
          </Tab>
          <Tab tabKey={3} tabName="Uno"> 
          <div className="game-tab">
              Coming Soon!
          </div>
          </Tab>
          <Tab tabKey={4} tabName="Patience"> 
          <div className="game-tab">
              Coming Soon!
          </div>
          </Tab>
          </TabList>


         </div>
         </div>
 </>
)
}

export default Games