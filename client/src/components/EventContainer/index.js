import React from "react";
import EventDetails from "../EventDetails";
import { useDispatch, useSelector } from "react-redux";

// import {UPDATE_EVENT} from '../../utils/mutations';
// import Auth from "../../utils/auth";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import spinner from "../../assets/spinner.gif";

// import query
function EventContainer(props) {
  console.log(props.data);
  function handleEventClick(id){
    props.setSelectedEvent(id)
  }
  return (
    <>
      {props.loading ? (
        <div>Loading</div>
      ) : (
        props.data.events.map((event) => {
          console.log(event);
          return (
            <Card style={{ width: "18rem", margin:"10px" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{event.name}</ListGroup.Item>
                <ListGroup.Item>{event.location}</ListGroup.Item>
                <ListGroup.Item>{event.date}</ListGroup.Item>
               
              </ListGroup>
              <Button primary
              onClick={()=>handleEventClick(event._id)}>  
              Click </Button>
            </Card>
          );
        })
      )}
    </>
  );
}

export default EventContainer;
