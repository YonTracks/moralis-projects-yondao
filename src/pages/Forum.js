import React from 'react'
import { Table, Form } from "web3uikit";

import "./pages.css";


function Forum() {
  return (
    <>
       <div className="tabContent">
             
              Recent Post
              <div style={{ marginTop: "30px", border: "none"}}>
                <Table
                  columnsConfig="10% 70% 15%"
                  data={""}
                  header={[
                    <span style={{ marginLeft: "15px" }}>ID</span>,
                    <span>Description</span>,
                    <span style={{ marginLeft: "20px" }}>Status</span>,
                  ]}
                  pageSize={5}
                />
              </div>
                  <hr />
              <Form
                  buttonConfig={{
                    loadingText: "Submitting Proposal",
                    text: "Submit",
                    theme: "secondary",
                  }}
                  data={[
                    {
                      inputWidth: "100%",
                      name: "New Proposal",
                      type: "textarea",
                      validation: {
                        required: true,
                      },
                      value: "",
                    },
                  ]}
                  onSubmit={(e) => {
                   window.alert("comming soon")
                  }}
                  title="Create a New Post"
                />


            </div>
    </>
  )
}

export default Forum