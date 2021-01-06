import React, { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Theme from './Theme';

const Table = ({ themes, users }) => {
  
  return (

    <Container style={divStyle}>
      {themes.map((theme, index) => (
        <Theme key={index} theme={theme} />
      ))}
      { users.map((user, index) => (
        <Container style={divStyle} key={index}>Your score: {user.score}</Container>
      ))}
    </Container>
  )
};

export default memo(Table);

const divStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  backgroundColor: '#1377DC',
  display: 'flex',
  alignItems: 'center',
  height: '865px',
  justifyContent: 'center',
  flexDirection: 'column',
  fontSize:'30px'
};

