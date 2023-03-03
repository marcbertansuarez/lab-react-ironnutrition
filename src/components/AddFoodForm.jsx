import React, { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({handleNewFood}) {
    const initialState = {
        name: '',
        image: '',
        calories: 0,
        servings: 0,
    }

    const [newFood, setNewFood] = useState(initialState);

    const handleChange = (e) => {
        setNewFood(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewFood(newFood);
        setNewFood(initialState);
    }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input className="input" value={newFood.name} type="text" name="name" onChange={handleChange} required/>

      <label>Image</label>
      <Input className="input" value={newFood.image} type="text" name="image" onChange={handleChange} required/>

      <label>Calories</label>
      <Input className="input" value={newFood.calories} type="number" name="calories" onChange={handleChange} required/>

      <label>Servings</label>
      <Input className="input" value={newFood.servings} type="number" name="servings" onChange={handleChange} required/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;