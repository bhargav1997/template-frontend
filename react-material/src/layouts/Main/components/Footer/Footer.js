import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Footer = () => (
   <Grid container spacing={2}>
      <Grid item xs={12}>
         <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            flexDirection={{ xs: "column", sm: "row" }}>
            <Box display='flex' flexWrap={"wrap"} alignItems={"center"}>
               <Box marginTop={1} marginRight={2}>
                  <Link underline='none' component='a' href='/' color='textPrimary' variant={"subtitle2"}>
                     Home
                  </Link>
               </Box>
               <Box marginTop={1} marginRight={2}>
                  <Link underline='none' component='a' href='/docs-introduction' color='textPrimary' variant={"subtitle2"}>
                     Documentation
                  </Link>
               </Box>
            </Box>
         </Box>
      </Grid>
      <Grid item xs={12}>
         <Typography align={"center"} variant={"subtitle2"} color='textSecondary' gutterBottom>
            &copy; BrickMMO All rights Reserved
         </Typography>
         <Typography align={"center"} variant={"caption"} color='textSecondary' component={"p"}>
            When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer experience and for marketing purposes.
         </Typography>
      </Grid>
   </Grid>
);

export default Footer;
