import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function CreateResponse({ prompt, response}) {
  return (
      <Card body>
        <CardBody>
          <CardTitle tag="h6" className="text-left text-wrap">
            <strong>Prompt: </strong>
          </CardTitle>
          <CardText className="text-center">{prompt}</CardText>
          <CardTitle tag="h6" className="text-left text-wrap">
            <strong>Response: </strong>
          </CardTitle>
          <CardText className="text-center">{response}</CardText>
        </CardBody>
      </Card>
  );
}
