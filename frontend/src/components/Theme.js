import React from "react";
import Question from './Question';
import Container from 'react-bootstrap/Container'

const Theme = ({ theme }) => {
  return (
    <Container fluid="md" style={divStyle}> 
      <Container fluid="md" style={themeStyle}> 
        {theme.title}
      </Container>
        {theme.status.map((el, i) => (
        <Question title={theme.title} price={200 * (1 + i)} state={el} />
        ))}
     </Container>
  );
};

export default Theme;

const divStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  backgroundColor: '#1377DC',
  display: 'flex',
  alignItems: 'center',
  height: '190px',
  justifyContent: 'space-around',
  flexDirection: 'row'
};

const themeStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  backgroundColor: '#1377DC',
  display: 'flex',
  alignItems: 'center',
  height: '150px',
  width: '120px',
  justifyContent: 'space-around',
  flexDirection: 'row',
  fontSize: 25
};

const btnStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  height: '190px',
  alignItems: 'center',
  borderRadius: '1px',
  borderColor: 'black',
  fontSize: '30px',
  textWeight: 'bold',
  color: '#BDC43F'
};
