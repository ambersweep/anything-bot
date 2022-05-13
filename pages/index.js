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
  Collapse,
  Nav,
  Navbar,
  NavLink,
  NavbarText,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from "reactstrap";

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

      <div>
        <Navbar expand fixed="">
          <FaRobot size="2em" className="mr-2" />
          <NavbarBrand href="/"> OpenAI Engine Tester</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://beta.openai.com/overview"
                  target="_blank"
                >
                  Created With OpenAi
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <br></br>
      <main className="container-fluid d-flex justify-content-center align-items-center">
        <div className="col-lg-6 text-center">
          <Form onSubmit={onSubmit}>
            <textarea
              name="promptBox"
              rows="5"
              cols="40"
              placeholder="Enter a prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            {/* Displays current engine */}
            <p>
              {!engine ? (
                <p className="text-danger"> Please Select An Engine </p>
              ) : (
                "Current Engine: " + engineText
              )}
            </p>

            {/* Dropdown menu for choosing an engine */}
            <div className="row justify-content-center">
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
      <div class="container fixed-bottom">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></a>
            <span class="text-muted">© 2022 by Amber Sweep</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3 ml-2">
              <a href="https://github.com/ambersweep" target="_blank">
                <FaGithub /> Github
              </a>
            </li>
            <li class="ms-3 ml-2">
              <a href="https://www.linkedin.com/in/amber-sweep" target="_blank">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li class="ms-3 ml-2">
              <a href="https://acsweep.dev/" target="_blank">
                <FaGlobe /> Portfolio
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
