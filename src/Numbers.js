import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  answerBox: {
    textAlign: "center",
    padding: "10vh 0",
    display: "block",
  }
}));

function generate() {
  return Math.floor(Math.random() * 100);
}

function Numbers() {
  const classes = useStyles();
  const [numbers, setNumbers] = useState(generate());
  const [show, setShow] = useState(false);
  const speak = () => {
    if (typeof speechSynthesis === 'undefined') {
      console.error("There is no speech synthesis API in this browser");
    } else {
      const utterThis = new SpeechSynthesisUtterance(numbers);
      utterThis.lang = "fr";
      speechSynthesis.speak(utterThis);
    }
  };
  const nextNumber = () => {
    setShow(false);
    setNumbers(generate())
  };
  const showAnswer = () => setShow(true);

  return (
    <React.Fragment>
      <Container fixed>
        <Typography component="div">
          <Box component="span" className={classes.answerBox}>
            {show ? numbers : "?"}
          </Box>
        </Typography>
        <Typography component="div" className={classes.buttonBox}>
          <Button variant="contained" onClick={speak}>Speak</Button>
          <Button variant="contained" color="secondary" onClick={showAnswer}>Show Answer</Button>
          <Button variant="contained" color="primary" onClick={nextNumber}>Next</Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Numbers;
