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
         <SectionTitle>Note on Our Collaborations</SectionTitle>
         <SectionSubTitle>
            Our project thrives on the support and collaboration of various partners,
            <br />
            including
            <Link to='#' component={LinkRouter}>
               CodeAdam
            </Link>
            ,{" "}
            <Link to='#' component={LinkRouter}>
               Humber College
            </Link>
            , and{" "}
            <Link to='#' component={LinkRouter}>
               BrevisRefero
            </Link>
            .
         </SectionSubTitle>

         <SectionImageList data={collaborators} />
      </Box>
   );
};

export default Partnership;
