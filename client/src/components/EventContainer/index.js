import React, { useEffect } from "react";
import EventDetails from '../EventDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
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
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        {state.events.length ? (
          <Card.Body className="flex-row">
            {filterEvents().map((event) => (
              <EventDetails
                key={event._id}
                _id={event._id}
                date={event.date}
                name={event.name}
                location={event.location}
                category={event.category}
              />
            ))}
          </Card.Body>
        ) : (
          <h3>You haven't added any events yet!</h3>
        )}
        {loading ? <img src={spinner} alt="loading" /> : null}

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default EventContainer;
