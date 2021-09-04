import React from "react";
import moment from "moment";

import { Card, ListGroup, Button } from "react-bootstrap";

// import query
function EventContainer(props) {
  function handleEventClick(id) {
    props.setSelectedEvent(id);
  }

  return (
    <>
      {props.loading ? (
        <div>Loading</div>
      ) : (
        props.data.events.map((event) => {
          return (
            <Card style={{ width: "80rem", margin: "10px" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{event.name}</ListGroup.Item>
                <ListGroup.Item>{event.location}</ListGroup.Item>
                <ListGroup.Item>
                  {moment(event.date).format("YYYY-MM-DD")}
                </ListGroup.Item>
                <ListGroup.Item>{event.category.name}</ListGroup.Item>
                {event.dishes.map((dish) => (
                  <ListGroup.Item>
                    {dish.name}: {dish.description}
                  </ListGroup.Item>
                ))}
                {event.chefs.map((chef) => (
                  <ListGroup.Item>
                    {chef.firstName} {chef.lastName}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Button
                key={event._id}
                onClick={() => handleEventClick(event._id)}
              >
                Click
              </Button>
            </Card>
          );
        })
      )}
    </>
  );
}

export default EventContainer;
