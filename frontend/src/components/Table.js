import React, { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Theme from './Theme';

const divStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  backgroundColor: '#1377DC',
  display: 'flex',
  alignItems: 'center',
  height: '865px',
  justifyContent: 'center',
  flexDirection: 'column'
};

const btnStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  height: '150px',
  alignItems: 'center',
  borderRadius: '1px',
  borderColor: 'black',
  fontSize: '30px',
  textWeight: 'bold',
  color: '#BDC43F'
};

const Table = ({ themes }) => {
  
  return (

    <Container style={divStyle}>
      {themes.map((theme) => (
        <Theme theme={theme} />
      ))}
    </Container>
  )
};

export default memo(Table);
