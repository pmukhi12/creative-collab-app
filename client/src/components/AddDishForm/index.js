import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_DISH } from '../utils/mutations';
function AddDishForm(props) {
  const [formState, setFormState] = useState({ name: '', description: '' });
  const [addDish] = useMutation(ADD_DISH);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addDish({
      variables: {
        name: formState.name,
        description: formState.description
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
      <Link to="/login">Dish</Link>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name of the Dish:</label>
          <input
            placeholder="name"
            name="name"
            type="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="description">Description:</label>
          <input
            placeholder="description"
            name="description"
            type="description"
            id="description"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
export default AddDishForm;