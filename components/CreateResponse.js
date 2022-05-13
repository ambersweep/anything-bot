import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle} from "reactstrap";

export default function CreateResponse({prompt, response}){
return (
    <div>
  <Card
  body
  >
    <CardBody>
      <CardTitle tag="h6" className="text-left">
        <strong>Prompt: </strong> {prompt}
      </CardTitle>
      <CardTitle
        tag="h6"
        className="text-left"
      >
       <strong>Response: </strong> {response}
      </CardTitle>
    </CardBody>
  </Card>
</div>
)
}