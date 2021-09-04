import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_EVENT } from '../../utils/mutations';

function AddEventForm(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addEvent] = useMutation(ADD_EVENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addEvent({
      variables: {
        date: formState.date,
        name: formState.name,
        location: formState.location,
        host: formState.host,
        dishes: formState.dishes,
        chefs: formState.chefs,
        category: formState.category,
      },
    });
    const token = mutationResponse.data.addEvent.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Add Event</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="date">Date:</label>
          <input
            placeholder="Date"
            name="date"
            type="date"
            id="date"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name of Event:</label>
          <input
            placeholder="Insert event name here"
            name="name"
            type="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="location">Location:</label>
          <input
            placeholder="Location"
            name="location"
            type="location"
            id="location"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="host">host:</label>
          <input
            placeholder="Host"
            name="host"
            type="host"
            id="host"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="dishes">Dishes:</label>
          <input
            placeholder="Dishes"
            name="dishes"
            type="dishes"
            id="dishes"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="chefs">Chefs:</label>
          <input
            placeholder="Chefs"
            name="chefs"
            type="chefs"
            id="chefs"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="category">Category:</label>
          <input
            placeholder="Category"
            name="category"
            type="category"
            id="category"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddEventForm;
