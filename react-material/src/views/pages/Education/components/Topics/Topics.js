import React from 'react';

import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionImageList from 'common/SectionImageList';

import { topics } from './data.js';

const Topics = () => {
  return (
    <Box>
       {/* Example: section flag "students" */}
      <SectionFlag>Section flag</SectionFlag>
      {/* add icons array below or multiple images here */}
      {/* refer the data.js file for refrence */}
      <SectionImageList data={topics} folder="/images/topics/" /> 
    </Box>
  );
};

export default Topics;
