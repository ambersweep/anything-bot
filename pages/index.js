import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import React, { useState } from "react";
import { Button, Form, ButtonGroup } from 'reactstrap';

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const [engine, setEngine] = useState("")

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

      <main className="container d-flex justify-content-center align-items-center">
      <div className="col-md-3">

        <h3 className="text-center">Fun with AI</h3>
        <p>using: {engine}</p>
        <Form onSubmit={onSubmit}>
          <textarea
            name="promptBox"
            rows="5" cols="45"
            placeholder="Enter a prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button type="submit" color="primary"> Submit Prompt </Button>
        </Form>
        <hr></hr>
        <div>Prompt: {prompt}</div>
        <div>Response:{result}</div>
        <div>
        <ButtonGroup>
    <Button
      color="primary"
      onClick={(e) => setEngine("text-davinci-002")}
    >
      DaVinci
    </Button>
    <Button
      color="primary"
      onClick={(e) => setEngine("text-curie-001")}
    >
      Curie
    </Button>
    <Button
      color="primary"
      onClick={(e) => setEngine("text-babbage-001")}
    >
      Babbage
    </Button>
  </ButtonGroup>
  
        </div>
        </div>
      </main>
    </div>
  );
}
