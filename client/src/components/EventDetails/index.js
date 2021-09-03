import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

// import DishDetails from '../components/DishDetails';
// import DishForm from '../components/DishForm';

const EventDetails = (props, { currentPage, handlePageChange }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/events/${props._id}`}>{props.name}</Link>
      <ListGroup variant="flush">
    <ListGroup.Item>{props.location}</ListGroup.Item>
    <ListGroup.Item>{props.date}</ListGroup.Item>
  </ListGroup>
    </Card>
  );
};

export default EventDetails;
