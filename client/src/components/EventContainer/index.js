import React from "react";
import EventDetails from '../EventDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
// import {UPDATE_EVENT} from '../../utils/mutations';
// import Auth from "../../utils/auth";
import { Card } from "react-bootstrap";
import { QUERY_EVENTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

// import query
function EventContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_EVENTS);

  function filterEvents() {
    console.log("state", state)
    if (!currentCategory) {
      return state.events;
    }

    return state.events.filter(
      (event) => event.category._id === currentCategory
    );
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>All Public Events</Card.Title>
        {loading ? <div>Loading</div>
        : data.events.length ? (
          <Card.Body className="flex-row">
            {data.events.map((event) => {
              console.log("event", event)
             return <EventDetails
                key={event._id}
                _id={event._id}
                date={event.date}
                name={event.name}
                location={event.location}
              />
})}
          </Card.Body>
        ) : (
          <h3>You haven't added any events yet!</h3>
        )}
        {loading ? <img src={spinner} alt="loading" /> : null}
        <Card.Link href="#">Card Link</Card.Link>
       
      </Card.Body>
    </Card>
  );
}

export default EventContainer;
