import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function Profile() {

    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
      console.log(user)
    }
  
    return (
      <>
        <div className="container my-1">
        <Link to="/add_event">Add Event Form </Link>
          <Link to="/">← Back to Public Events</Link>
  
          {user ? (
            <>
              <h2>
                Events for {user.firstName} {user.lastName}
              </h2>
              {user.events.map((event) => (
                <div key={event._id} className="my-2">
                  <h3>
                    {(event.date).toLocaleDateString()}
                  </h3>
                  <div className="flex-row">
                    {event.map(({ _id, name, location}, index) => (
                      <div key={index} className="card px-1 py-1">
                        <Link to={`/events/${_id}`}>
                          <p>{name}</p>
                        </Link>
                        <div>
                          <span>${location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </>
    );
}

export default Profile;