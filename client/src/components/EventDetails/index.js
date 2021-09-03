import React from 'react';
import { Card } from "react-bootstrap";
// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import DishDetails from '../components/DishDetails';
// import DishForm from '../components/DishForm';



const EventDetails = (props) => {

  return (
    <Card className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {props.name} <br />

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
          {props.location}
        </blockquote>
      </div>

      <div className="my-5">
      {props.date} <br/>
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
      {props._id} <br/>
      </div>
    </Card>
  );
};

export default EventDetails;