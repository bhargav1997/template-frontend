import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Counter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };

  return (
    <Grid container spacing={2}>
      {[
        {
          number: "Number or key metrics",
          title: 'Title for stat',
          subtitle: 'Subtitle for stat',
          suffix: '+',
        },
        {
          number: "Number or key metrics",
          title:'Title for stat',
          subtitle: 'Subtitle for stat',
          suffix: '%',
        },
        {
          number: "Number or key metrics",
          title: 'Title for stat',
          subtitle: 'Subtitle for stat',
          suffix: '%',
        },
      ].map((item, i) => (
        <Grid key={i} item xs={12} md={4}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            <VisibilitySensor
              onChange={(isVisible) => setViewPortVisibility(isVisible)}
              delayedCall
            >
              <CountUp
                redraw={false}
                end={viewPortEntered ? item.number : 0}
                start={0}
                suffix={item.suffix}
              />
            </VisibilitySensor>
          </Typography>
          <Typography align="center" variant="h5" fontWeight={700} gutterBottom>
            {item.title}
          </Typography>
          <Typography color="text.secondary" align="center" component="p">
            {item.subtitle}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Counter;
