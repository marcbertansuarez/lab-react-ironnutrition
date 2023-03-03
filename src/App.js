import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foodsAll, setFoods] = useState(foods);
  const [searchValue, setSearchValue] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleNewFood = (newFood) => {
    setFoods([...foodsAll, newFood]);
  }

  const handleSearchValue = (value) => {
    setSearchValue(value)
  }

  const handleDelete = (name) => {
    const filteredFoods = [...foodsAll].filter(elem => {
      return elem.name !== name
    })
    setFoods(filteredFoods);
  }

  const showFormInput = () => {
    setShowForm(prev => !prev)
  }
  
  return (
    <div className="app">
    <div>
      <Search handleSearchValue={handleSearchValue}/>
    </div>
    <button className="btn" onClick={showFormInput}>{showForm ? 'Hide form' : 'Add New Food'}</button>
    { showForm && <div>
      <AddFoodForm handleNewFood={handleNewFood}/>
    </div>}
    { foodsAll.length === 0 ? <p>Oops! There is no more content to show</p> : (
    <div className="foods-container">
      {foodsAll.filter(elem => elem.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(elem => {
        return (
          <FoodBox key={elem.name} food={elem} handleDelete={handleDelete} />
        )
      })}
        </div>
        )}
    </div>
  );
}

export default App;
