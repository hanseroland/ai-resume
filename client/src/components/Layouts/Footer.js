import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { LinkedIn, Facebook, Twitter } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        padding: "40px 20px",
      }}
    >
       
      <Grid container spacing={4} alignItems="flex-start">
        {/* Section 1 - Logo and Tagline */}
        <Grid size={{ xs: 6, sm: 6 }} >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Identity
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginTop: "10px",
              lineHeight: 1.6,
            }}
          >
            Faites un premier{" "}
            <Typography
              component="span"
              sx={{ color: "#1388d5", fontWeight: "bold" }}
            >
              contact
            </Typography>{" "}
            qui laisse une impression générale.
          </Typography>

        </Grid>

        {/* Section 2 - Information Links */}
        <Grid size={{ xs: 6, sm: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", marginBottom: "10px", fontWeight: "bold" }}
          >
            Information
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{ 
              color: "text.primary", 
              display: "block", 
              fontSize: "14px", 
              mb: 1 
            }}
          >
            Press Centre
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ 
              color: "text.primary", 
              display: "block", 
              fontSize: "14px", 
              mb: 1 
            }}
          >
            Our Blog
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ 
              color: "text.primary", 
              display: "block", 
              fontSize: "14px", 
              mb: 1 
            }}
          >
            Term and Condition
          </Link>
        </Grid>

        {/* Section 3 - Menu Links */}
        <Grid size={{ xs: 6, sm: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", marginBottom: "10px", fontWeight: "bold" }}
          >
            Menu
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{ color: "text.primary", display: "block", fontSize: "14px", mb: 1 }}
          >
            About
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ color:  "text.primary", display: "block", fontSize: "14px", mb: 1 }}
          >
            Services
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ color: "text.primary", display: "block", fontSize: "14px", mb: 1 }}
          >
            Blog
          </Link>
        </Grid>

        {/* Section 4 - Contact Details */}
        <Grid size={{ xs: 6, sm: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              marginBottom: "10px",
              fontWeight: "bold"
            }}
          >
            Contact
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "5px" }}>
            Phone: +221 77 022 11 29
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "5px" }}>
            Email: @example.com
          </Typography>
          <Typography variant="body2">Address: Dakar</Typography>
          <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Link href="#" color="inherit">
              <LinkedIn />
            </Link>
            <Link href="#" color="inherit">
              <FacebookOutlinedIcon />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Links */}

      <Box
        sx={{
          marginTop: "20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "10px",
          display:'flex',
          justifyContent:'space-between'
        }}
      >

        <Box>
          <Typography
            variant="body2"
            sx={{fontSize: "15px", color: "text.primary" }}
          >
            © Blackidentity copyright 2024
          </Typography>
        </Box>
        <Box>
          <Link
            href="#"
            underline="none"
            sx={{ color: "text.primary", marginRight: "15px", fontSize: "14px" }}
          >
            Terms
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ color: "text.primary", marginRight: "15px", fontSize: "14px" }}
          >
            Privacy
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ color: "text.primary", fontSize: "14px" }}
          >
            Cookies
          </Link>
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;
