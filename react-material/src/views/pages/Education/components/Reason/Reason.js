import React from 'react';

import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionImage from 'common/SectionImage';
import SectionList from 'common/SectionList';

import { concepts } from './data.js';

const Reason = () => {
  return (
    <Box>
      {/* Example: section flag "For Education" */}
      <SectionFlag>Section flag</SectionFlag> 
      <SectionImage src="https://fakeimg.pl/600x230?text=Image+Here" />
      <SectionTitle>
        Section title goes here.
      </SectionTitle>
      <SectionSubTitle>
       Section subtitle goes here.
      </SectionSubTitle>

      {/* Example: list of concepts */}
      <SectionList data={concepts} />
    </Box>
  );
};

export default Reason;
