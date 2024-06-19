/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';

const SystemPanel = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <h1>System Panel</h1>
  );
};

export default SystemPanel;
