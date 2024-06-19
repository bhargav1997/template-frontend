import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "common/Container";
import { Hero, Highlights, Partnership } from "./components";
import List from "../Portfolio/components/List";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import PhotoIcon from "@mui/icons-material/Photo";

const Home = () => {
   const theme = useTheme();

   const customHighlights = [
      {
         title: "Custom Title 1",
         subtitle: "Custom subtitle text 1.",
         link: { text: "Custom Link 1", url: "#" },
         icon: <CodeIcon />,
      },
      {
         title: "Custom Title 2",
         subtitle: "Custom subtitle text 2.",
         link: { text: "Custom Link 2", url: "#" },
         icon: <PhotoIcon />,
      },
      {
         title: "Custom Title 3",
         subtitle: "Custom subtitle text 3.",
         link: { text: "Custom Link 3", url: "#" },
         icon: <SchoolIcon />,
      },
   ];

   return (
      <Box>
         <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
            <Container position='relative' zIndex={2}>
               <Hero
                  title='Home Page'
                  subtitle='Your Subtitle Goes here.'
                  description='Your description text goes here.'
                  caption='Check out the'
                  captionLinkText='Link to Text'
                  captionLink='#'
                  buttonText='Button'
                  buttonLink='#'
                  imageSrc='https://fakeimg.pl/1200x1200?text=IMAGE+HERE'
                  imageAlt='Custom Image Alt Text'
               />
            </Container>
         </Box>
         <Box>
            <Container>
               <Highlights highlights={customHighlights} />
            </Container>
         </Box>
         <Box bgcolor={theme.palette.alternate.main}>
            <Container>
               <List />
            </Container>
         </Box>
         <Box>
            <Container>
               <Partnership />
            </Container>
         </Box>
      </Box>
   );
};

export default Home;
