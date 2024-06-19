import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const Highlights = () => {
   const theme = useTheme();
   return (
      <Box>
         <Grid container spacing={2}>
            {[
               {
                  title: "Built for developers",
                  subtitle:
                     "BrickMMO is built to make new begineer coders, life easier and more productive. With a focus on documentation, and reusable components.",
                  icon: (
                     <svg height={24} width={24} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                        />
                     </svg>
                  ),
               },
            ].map((item, i) => (
               <Grid item xs={12} md={4} key={i}>
                  <Box width={1} height={"100%"} data-aos={"fade-up"}>
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
                        <Typography variant={"h6"} gutterBottom sx={{ fontWeight: 500 }} align={"center"}>
                           {item.title}
                        </Typography>
                        <Typography align={"center"} color='textSecondary'>
                           {item.subtitle}
                        </Typography>
                     </Box>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Highlights;
