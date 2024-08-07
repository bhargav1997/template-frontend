/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";

import { systems } from "./data.js";

const List = () => {
   const theme = useTheme();
   return (
      <Box>
         <Box marginBottom={4}>
            <Typography
               sx={{
                  textTransform: "uppercase",
                  fontWeight: "medium",
               }}
               gutterBottom
               color={"textSecondary"}
               align={"center"}>
               Systems
            </Typography>
            <Box component={Typography} fontWeight={700} variant={"h3"} gutterBottom align={"center"}>
               What is a system?
            </Box>
            <Box align='center'>
               <Box marginBottom={4} maxWidth={800}>
                  <Typography component={"p"} color={"textSecondary"} align={"center"} marginBottom={2}>
                     A system could be anything from a redeveloped version of Twitter/X, to an API that enforces the LEGO® colour palette,
                     to a physical control panel built with LEGO® bricks.
                  </Typography>
                  <Typography variant={"h6"} component={"p"} color={"textSecondary"} align={"center"}>
                     Systems that have been completed, or are currently in development:
                  </Typography>
               </Box>
            </Box>
         </Box>
         <Box>
            <Grid container spacing={4}>
               {systems.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i} marginBottom={3}>
                     <Box component={Card} width={"100%"} height={"100%"} borderRadius={4} display={"flex"} flexDirection={"column"}>
                        <Box component={CardContent}>
                           <Box
                              component={Avatar}
                              width={50}
                              height={50}
                              marginBottom={2}
                              bgcolor={theme.palette.primary.main}
                              color={theme.palette.background.paper}>
                              {item.icon}
                           </Box>

                           <Typography variant={"h6"} gutterBottom fontWeight={500}>
                              {item.title}
                           </Typography>

                           <Typography color='text.secondary'>{item.subtitle}</Typography>

                           <Grid container marginTop={1}>
                              {item.technology.map((item) => (
                                 <Grid item marginRight={1}>
                                    <img src={"https://console.codeadam.ca/api/image/" + item} width={20} alt='' />
                                 </Grid>
                              ))}
                           </Grid>
                        </Box>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box>
   );
};

export default List;
