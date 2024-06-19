/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import SectionTitle from "common/SectionTitle";
import SectionSubTitle from "common/SectionSubTitle";
import SectionImageList from "common/SectionImageList";

import { collaborators } from "./data.js";

const Partnership = () => {
   return (
      <Box>
         <SectionTitle>Section Title Here</SectionTitle>
         <SectionSubTitle>
            Section Subtitle Here, {' '}
            <Link to='#' component={LinkRouter}>
               Link Here
            </Link>
         </SectionSubTitle>

         <SectionImageList data={collaborators} />
      </Box>
   );
};

export default Partnership;
