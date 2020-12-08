import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from 'react-bootstrap/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Timer from './Timer';
import { useDispatch } from 'react-redux';
import { handleAnswer } from '../store/actions';

const useStyles = makeStyles({
  root: {
    marginTop: "3vh",
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function Game({ title, answer, price, question }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleClick = () => {
    const score = (-1 + 2 * (text === answer)) * price;
    dispatch(handleAnswer(score));
  };

  return (
    <Grid container style={{ textAlign: 'center', marginTop: '4vh', marginLeft: '4vh', alignItems: 'center', backgroundColor: '#1377DC',}}>
      <Card style={{flex:1, justifyContent: "center", alignItems: 'center', backgroundColor: '#1377DC', }} className={classes.root} variant="outlined">
        <CardContent >
          <Typography  variant="h5" component="h2">
            {question}
          </Typography>
          <Typography variant="body2" component="p">
            <TextField onChange={handleChange} id="standard-basic" label="Введите ответ" />
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{}}><Timer price={price}/></div>
          <Button onClick={handleClick} style={btnStyle} size="large" variant="primary">Ответить</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Game;

const btnStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
  // height: '90px',
  alignItems: 'center',
  borderRadius: '1px',
  borderColor: 'black',
  fontSize: '30px',
  textWeight: 'bold',
  color: '#BDC43F',
  borderRadius: '15px',
};
