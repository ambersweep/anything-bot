import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheck } from "react-icons/fa";
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
import CreateResponse from "../components/CreateResponse";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const [engine, setEngine] = useState("");
  const [engineText, setEngineText] = useState();

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
  }

  return (
    <div>
      <Head>
        <title>OpenAI Tester</title>
      </Head>

      <body className="bg-light" style={{ height: "100%" }}>
        <Header />
        <br></br>
        <div className="container text-center">
          <p>
            Welcome to the <mark>OpenAI Engine Tester!</mark> Your playground
            for experimenting with the OpenAI API.
          </p>
          <p>
            Write out a prompt, or try one of the example prompts below to
            experience the magic! 🪄
          </p>
          <p>
            <small>
              You can learn more about OpenAI
              <a href="https://beta.openai.com" target="_blank">
                here
              </a>
              .
            </small>
          </p>
        </div>
        <main className="container-flex d-flex justify-content-center align-items-center">
          <div className="text-center">
            <Form onSubmit={onSubmit}>
              <textarea
                name="promptBox"
                cols="40"
                placeholder="Enter a prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />

              {/* Displays current engine. If no engine is selected, displays warning text */}
              <p className="mt-2">
                {!engine ? (
                  <p className="text-secondary mt-2">
                    Please select an engine
                  </p>
                ) : (
                  "Current Engine: " + engineText
                )}
              </p>

              {/* Dropdown menu for choosing an engine */}
              <div className="row justify-content-center">
                <div className="col-xs-4">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle caret className="mt-2">
                      Choose Engine
                    </DropdownToggle>
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
                    <DropdownToggle color="info" className="ml-2 mt-2" caret>
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
                          setPrompt(
                            "Make me a quirky name for my pet rock store."
                          );
                        }}
                      >
                        Shop Namer
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={(e) => {
                          setPrompt(
                            "Write me a clickbait blog title about skateboarding."
                          );
                        }}
                      >
                        Clickbait Generator
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={(e) => {
                          setPrompt(
                            "Make me a fruity drink recipe and give it a name."
                          );
                        }}
                      >
                        Drink Creator
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>

                  {/* Submits prompt */}
                  <Button type="submit" color="primary" className="ml-2 mt-2">
                    <FaCheck /> Submit Prompt
                  </Button>
                </div>
              </div>
            </Form>

            <hr></hr>
            <h4>Responses</h4>
            <br></br>
            <div className="container">
              <CreateResponse prompt={prompt} response={result} />
            </div>
          </div>
        </main>
      </body>
      <Footer />
    </div>
  );
}
