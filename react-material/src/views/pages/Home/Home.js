import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "common/Container";
import { Hero, Highlights } from "./components";
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
         link: { text: "Custom Link 1", url: "/custom-link-1" },
         icon: <CodeIcon />,
      },
      {
         title: "Custom Title 2",
         subtitle: "Custom subtitle text 2.",
         link: { text: "Custom Link 2", url: "/custom-link-2" },
         icon: <PhotoIcon />,
      },
      {
         title: "Custom Title 3",
         subtitle: "Custom subtitle text 3.",
         link: { text: "Custom Link 3", url: "/custom-link-2" },
         icon: <SchoolIcon />,
      },
   ];

   return (
      <Box>
         <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
            <Container position='relative' zIndex={2}>
               <Hero
                  title='My Custom Title'
                  subtitle='My Custom Subtitle'
                  description='Custom description text.'
                  caption='Check out the'
                  captionLinkText='New Project'
                  captionLink='/new-project'
                  buttonText='Learn More'
                  buttonLink='/learn-more'
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
      </Box>
   );
};

export default Home;
