import React from "react";

import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import ChairIcon from "@mui/icons-material/Chair";
import TvIcon from "@mui/icons-material/Tv";


import SectionFlag from "common/SectionFlag";
import SectionTitle from "common/SectionTitle";
import SectionSubTitle from "common/SectionSubTitle";
import SectionEndButton from "common/SectionEndButton";

const Wic = () => {
   const theme = useTheme();

   return (
      <Box>
         {/* Example: section flag "teaching method" */}
         <SectionFlag>Section flag</SectionFlag>
         <SectionTitle>Title here</SectionTitle>
         <SectionSubTitle>
            subtitle here
         </SectionSubTitle>

         <Grid container spacing={2} marginY={3}>
            {[
               // example:
               // title: title of skill or Technology,
               // subtitle: subtitle of skill or Technology,
               // icon: icon of skill or Technology,
               //the icons can be imported from @mui/icons-material
               {
                  title: "Skill title 1",
                  subtitle:
                     "Subtitle explaing the skill or Technology. You can add more here.",
                  icon: <ChairIcon />,
               },
               {
                  title: "Skill title 1",
                  subtitle:
                  "Subtitle explaing the skill or Technology. You can add more here.",
                  icon: <TvIcon />,
               },
              
            ].map((item, i) => (
               <Grid key={i} item xs={12} md={6}>
                  <ListItem
                     component='div'
                     disableGutters
                     sx={{
                        alignItems: "flex-start",
                        padding: 0,
                     }}>
                     <ListItemAvatar>
                        <Box
                           component={Avatar}
                           width={50}
                           height={50}
                           marginBottom={2}
                           marginRight={2}
                           bgcolor={alpha(theme.palette.primary.main, 0.1)}
                           color={theme.palette.primary.main}>
                           {item.icon}
                        </Box>
                     </ListItemAvatar>
                     <ListItemText
                        primary={item.title}
                        secondary={item.subtitle}
                        primaryTypographyProps={{
                           variant: "h6",
                           component: "h4",
                           gutterBottom: true,
                           sx: { fontWeight: 700 },
                        }}
                        sx={{
                           margin: 0,
                        }}
                     />
                  </ListItem>
               </Grid>
            ))}
         </Grid>

         <SectionEndButton text='link button text here' href='#' />
      </Box>
   );
};

export default Wic;
