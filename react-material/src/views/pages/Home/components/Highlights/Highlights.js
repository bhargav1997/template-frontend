import React from "react";
import { Link as LinkRouter } from "react-router-dom";   
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Highlights = ({ highlights = [] }) => {
   const theme = useTheme();

   return (
      <Grid container spacing={2}>
         {highlights.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
               <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                  <Box
                     component={Avatar}
                     width={60}
                     height={60}
                     marginBottom={2}
                     bgcolor={alpha(theme.palette.primary.main, 0.1)}
                     color={theme.palette.primary.main}>
                     {item.icon}
                  </Box>
                  <Typography variant='h4' component='h2' gutterBottom sx={{ fontWeight: 500 }} align={"center"}>
                     {item.title}
                  </Typography>
                  <Typography align={"center"} color='textSecondary' marginBottom={2}>
                     {item.subtitle}
                  </Typography>
                  <Button variant='contained' color='secondary' component={LinkRouter} to={item.link.url}>
                     {item.link.text}
                  </Button>
               </Box>
            </Grid>
         ))}
      </Grid>
   );
};

export default Highlights;
