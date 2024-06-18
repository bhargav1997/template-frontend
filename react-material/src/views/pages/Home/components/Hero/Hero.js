/* eslint-disable react/no-unescaped-entities */
import React, { memo } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Hero = ({ title, subtitle, description, caption, captionLinkText, captionLink, buttonText, buttonLink, imageSrc, imageAlt }) => {
   return (
      <Grid container spacing={4}>
         <Grid item container alignItems={"center"} xs={12} md={6}>
            <Box>
               <Typography
                  variant='h2'
                  component='h1'
                  color='textPrimary'
                  sx={{
                     fontWeight: 700,
                  }}>
                  {title}
               </Typography>
               <Typography
                  variant='h4'
                  component='h2'
                  color='primary'
                  sx={{
                     fontWeight: 600,
                  }}>
                  {subtitle}
               </Typography>

               <Typography variant='h6' component='p' color='textSecondary' sx={{ fontWeight: 400 }}>
                  {description}
               </Typography>

               <Typography component='p' variant='caption' color='textSecondary' sx={{ fontWeight: 400 }}>
                  {caption}{" "}
                  <Link variant='inherit' component={LinkRouter} to={captionLink}>
                     {captionLinkText}
                  </Link>
                  .
               </Typography>

               <Box display='flex' flexWrap='wrap' alignItems='center' marginTop={2}>
                  <Box>
                     <Button component={LinkRouter} to={buttonLink} variant='outlined' color='secondary' size='large'>
                        {buttonText}
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Grid>
         <Grid item xs={12} md={6}>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' maxHeight={600}>
               <img src={imageSrc} width='100%' height='100%' alt={imageAlt} />
            </Box>
         </Grid>
      </Grid>
   );
};

export default memo(Hero);
