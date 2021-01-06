import React from "react";
import startGame from '../store/actions';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

function Question({ price, state, title }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    if (state) {
      const response = await fetch(`/game/${title}`, {
        method: 'GET'
      });
      const data = await response.json();
      const index = data.question.findIndex((el) => el.price === price);
      const obj = { question: data.question[index].title, answer: data.question[index].answer };
      dispatch(startGame({ ...obj, title, price }));
    }
  }

  return (
    <Button style={btnStyle} size="large" variant="primary" onClick={handleClick} >{state && price}</Button>
  );
}

export default Question;

const btnStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  height: '150px',
  width: '150px',
  alignItems: 'center',
  borderRadius: '1px',
  borderColor: 'black',
  fontSize: '30px',
  textWeight: 'bold',
  color: '#BDC43F'
};
