import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid2';


const BenefitsSection = () => {
  return (
    <Box  id="avantages" sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Explore #DoWhatYouCant
      </Typography>
     
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid size={{ xs:12, md: 6 }} >
         <motion.img
            src={`${process.env.PUBLIC_URL}/images/Ndeye-OUMOU.png`} // Remplacez par le chemin de l'image
            alt="Explore"
            style={{
              width: "90%",
              borderRadius: 4,
              //boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item size={{ xs:12, md: 6 }} >
          <Box>
            {/* Item 1 */}
            <Box mb={4}>
              <Typography variant="body2" color="textSecondary">
                01
              </Typography>
              <Typography variant="h6" fontWeight="bold" mt={1}>
                lorem ipsum dolor nera du partie
              </Typography>
              
              <Divider sx={{ mt: 2 }} />
            </Box>

            {/* Item 2 */}
            <Box mb={4}>
              <Typography variant="body2" color="textSecondary">
                02
              </Typography>
              <Typography variant="h6" fontWeight="bold" mt={1}>
              lorem ipsum dolor nera du partie
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </Box>

            {/* Item 3 */}
            <Box mb={4}>
              <Typography variant="body2" color="textSecondary">
                03
              </Typography>
              <Typography variant="h6" fontWeight="bold" mt={1}>
              lorem ipsum dolor nera du partie
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BenefitsSection;
