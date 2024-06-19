import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Link from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import SectionSubTitle from "common/SectionSubTitle";
import SectionEndButton from "common/SectionEndButton";

import HelpIcon from "@mui/icons-material/Help";

const Priority3 = ({ title, description, btnLinkTitle, btnTextDescription }) => {
   const theme = useTheme();
   const isMd = useMediaQuery(theme.breakpoints.up("md"), {
      defaultMatches: true,
   });

   return (
      <Box>
         <Grid container spacing={4} direction={isMd ? "row" : "column-reverse"}>
            <Grid item xs={12} md={6}>
               <Box marginBottom={3}>
                  <SectionSubTitle align='left'>{title}</SectionSubTitle>
                  <Typography component='p' color={"textSecondary"}>
                     {description}
                  </Typography>
               </Box>
               <List disablePadding>
                  {[
                     {
                        icon: <HelpIcon />,
                        title: `${btnLinkTitle}`,
                        subtitle: <Typography fontSize='small'>{btnTextDescription}</Typography>,
                     },
                  ].map((item, index) => (
                     <ListItem key={index} disableGutters alignItems='flex-start'>
                        <ListItemAvatar>
                           <Box
                              component={Avatar}
                              variant={"rounded"}
                              color={theme.palette.primary.dark}
                              bgcolor={`${theme.palette.primary.light}22`}>
                              {item.icon}
                           </Box>
                        </ListItemAvatar>
                        <ListItemText primary={item.title} secondary={item.subtitle} />
                     </ListItem>
                  ))}
               </List>
               <SectionEndButton align='left' text='Button Text' href='#'></SectionEndButton>
            </Grid>
            <Grid item container justifyContent='center' alignItems='center' xs={12} md={6}>
               <Box component={Card} boxShadow={4} height='100%' width='100%'>
                  <Box
                     component={CardMedia}
                     height='100%'
                     width='100%'
                     minHeight={300}
                     image='https://fakeimg.pl/586x312?text=Image+Here'
                  />
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Priority3;
