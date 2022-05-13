import "bootstrap/dist/css/bootstrap.min.css";
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
  }

  return (
    <div>
      <Head>
        <title>OpenAI Tester</title>
      </Head>

      <div>
        <Navbar color="light" expand fixed="">
          <NavbarBrand href="/">OpenAI Engine Tester</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarText> by Amber Sweep</NavbarText>
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
            <p>Current Engine: {engineText}</p>

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
                    Davinci
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={(e) => {
                      setEngine("text-curie-001");
                      setEngineText("Curie");
                    }}
                  >
                    Curie
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

          <div>Prompt: {prompt}</div>
          <div>Response:{result}</div>

          <div></div>
        </div>
      </main>
    </div>
  );
}
