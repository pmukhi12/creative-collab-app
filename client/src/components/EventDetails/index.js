import React from 'react';
import { Card } from "react-bootstrap";
// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import DishDetails from '../components/DishDetails';
// import DishForm from '../components/DishForm';

import { QUERY_EVENTS } from '../../utils/queries';

const EventDetails = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { eventId } = useParams();

  const { loading, data } = useQuery(QUERY_EVENTS , {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { eventId: eventId },
  });

  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Card className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {event.name} <br />

      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {event.location}
        </blockquote>
      </div>

      <div className="my-5">
      {event.date} <br/>
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
      {event._id} <br/>
      </div>
    </Card>
  );
};

export default EventDetails;