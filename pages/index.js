import "bootstrap/dist/css/bootstrap.min.css";
import { FaRobot, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import Head from "next/head";
import React, { useState } from "react";
import {
  Button,
  Form,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const [engine, setEngine] = useState("");
  const [engineText, setEngineText] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ promptBox: prompt, engine: engine }),
    });
    const data = await response.json();
    setResult(data.result);
    console.log(result);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Tester</title>
      </Head>

<body className="bg-light" style={{height:"100%"}}>
      <div className="container-fluid border-bottom">
       <Header/>
      </div>
      <br></br>
      <main className="container-fluid d-flex justify-content-center align-items-center">
        <div className="text-center">
          <Form onSubmit={onSubmit}>
            <textarea
              name="promptBox"
              className="form-control"
              rows="5"
              cols="40"
              placeholder="Enter a prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            {/* Displays current engine. If no engine is selected, displays warning text */}
            <p className="mt-2">
              {!engine ? (
                <p className="text-danger mt-2"> Please Select An Engine </p>
              ) : (
                "Current Engine: " + engineText
              )}
            </p>

            {/* Dropdown menu for choosing an engine */}
            <div className="justify-content-center">
              <UncontrolledButtonDropdown>
                <DropdownToggle caret>Choose Engine</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={(e) => {
                      setEngine("text-davinci-002");
                      setEngineText("DaVinci");
                    }}
                  >
                    DaVinci
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={(e) => {
                      setEngine("text-curie-001");
                      setEngineText("Curie");
                    }}
                  >
                    Curie (Recommended)
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={(e) => {
                      setEngine("text-babbage-001");
                      setEngineText("Babbage");
                    }}
                  >
                    Babbage
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={(e) => {
                      setEngine("text-ada-001");
                      setEngineText("Ada");
                    }}
                  >
                    Ada
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
              {/* Dropdown for choosing example prompts */}
              <UncontrolledButtonDropdown>
                <DropdownToggle color="info" className="ml-2" caret>
                  Prompt Examples
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={(e) => {
                      setPrompt("Write a haiku about frogs.");
                    }}
                  >
                    Haiku Maker
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={(e) => {
                      setPrompt("Convert 10 USD into Yen.");
                    }}
                  >
                    Currency Converter
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={(e) => {
                      setPrompt("Write me a joke about cyborg kittens.");
                    }}
                  >
                    Joke Writer
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={(e) => {
                      setPrompt("Make me a short lunch recipe.");
                    }}
                  >
                    Recipe Creator
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              {/*Submits prompt */}
              <Button type="submit" color="primary" className="ml-2">
                {" "}
                Submit Prompt{" "}
              </Button>
            </div>
          </Form>

          <hr></hr>
          <h2>Responses </h2>
          <div>
            <strong>Prompt: </strong>
            {prompt}
          </div>
          <div>
            <p>
              <strong>Response:</strong>
              {result}
            </p>
          </div>
        </div>
      </main>
      <Footer/>
      </body>
    </div>
  );
}
