import React from 'react';
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {

    const { food } = props;

    const {handleDelete} = props;

    const caloriesCalcul = (cal, serv) => {
        return cal * serv;
    }

    const handleDeleteFood = () => {
        handleDelete(food.name);
    }
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {caloriesCalcul(food.calories, food.servings)} </b> kcal
        </p>
        <Button type="primary" onClick={handleDeleteFood}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;