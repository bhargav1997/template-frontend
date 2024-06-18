/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Hero = () => {
   return (
      <Grid container spacing={4}>
         <Grid item container alignItems={"center"} xs={12} md={6}>
            <Box>
               <Box marginBottom={1}>
                  <Typography
                     variant='h2'
                     color='textPrimary'
                     sx={{
                        fontWeight: 700,
                     }}>
                     Title here
                  </Typography>
                  <Typography
                     variant='h4'
                     color='textPrimary'
                     sx={{
                        fontWeight: 600,
                        ml: 0.5,
                     }}>
                     <Typography color={"primary"} component={"span"} variant={"inherit"}>
                        Subtitle here
                     </Typography>
                  </Typography>
               </Box>
            </Box>
         </Grid>
         <Grid item xs={12} md={6}>
            <Box height={"100%"} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
               <Box height={"100%"} width={"100%"} maxHeight={600}>
                  <img src='https://fakeimg.pl/590x430?text=IMAGE+HERE' width={"100%"} height={"100%"} alt='' />
               </Box>
            </Box>
         </Grid>
      </Grid>
   );
};

export default Hero;
