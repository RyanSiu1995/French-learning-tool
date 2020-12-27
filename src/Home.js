import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <Typography variant="h2">
          Welcome to my French learning kit 
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Home;
