import React from "react";
import { Card } from "react-bootstrap";

function EventDetails(event) {

        // const [updateEvent] = useMutation(UPDATE_EVENT);

  // function changeEvent(){
  //   updateEvent(event)
  // }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title><span>
        </span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
       🧑‍🍳
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default EventDetails;