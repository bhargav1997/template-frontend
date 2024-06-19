import React from 'react';

import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionButtonList from 'common/SectionButtonList';
import SectionImageList from 'common/SectionImageList';

import { programs, images } from './data.js';

const Test = () => {
  return (
    <Box>
      {/* Example: section flag "students" */}
      <SectionFlag>Section flag</SectionFlag>
      <SectionTitle>Section Title</SectionTitle>
      <SectionSubTitle>Section Subtitle</SectionSubTitle>
      {/* change the data under programs  in data.js to fill the button list with appropriate data */}
      <SectionButtonList data={programs} />
      {/* change the data under images in data.js to fill the icons*/}
      <SectionImageList data={images} />
    </Box>
  );
};

export default Test;
