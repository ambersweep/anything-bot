import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function CreateResponse({ prompt, response}) {
  return (
      <Card body className="mb-2">
        <CardBody>
          <CardTitle tag="h6" className="text-left">
            <strong>Prompt: </strong>
          </CardTitle>
          <CardText className="text-center text-wrap">{prompt}</CardText>
          <CardTitle tag="h6" className="text-left">
            <strong>Response: </strong>
          </CardTitle>
          <CardText className="text-center text-break">{response}</CardText>
        </CardBody>
      </Card>
  );
}
