import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "common/Container";
import { Hero, Counter, Priority3 } from "./components";

const Research = () => {
   const theme = useTheme();
   return (
      <Box>
         <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
            <Container position='relative' zIndex={2}>
               <Hero />
            </Container>
         </Box>
         <Box bgcolor={alpha(theme.palette.primary.main, 0)} position={"relative"}>
            <Container>
               <Priority3
                  title='Title Here'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie
                  nulla a, interdum tortor. Mauris tincidunt, massa ut viverra cursus, tortor
                  nibh condimentum nulla, a cursus augue lacus quis enim. Proin porttitor
                  ligula a dolor. Vestibulum id ligula.'
                  btnLinkTitle='Link Title'
                  btnTextDescription='Text Description'
               />
            </Container>
         </Box>
      </Box>
   );
};

export default Research;
