import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        component={"section"}
        sx={{
          minHeight: "50vh",
          backgroundImage: "url( /images/background.webp)",
          backgroundColor: "#777",
          mt: "3px",
        }}
      >
        <Box className={"container"}>
          <Box
            sx={{
              py: "40px",
            }}
          >
            <Typography variant="body1" color="#777" mb={"20px"}>
              At PRINTRADO Bookstore, we believe that books are the main
              resource for effective learning.
            </Typography>
            <Typography variant="body1" color="#777" mb={"20px"}>
              Our aim is to provide technology and business books for affordable
              prices.
            </Typography>
            <Typography variant="body1" color="#777" mb={"20px"}>
              The business is owned and managed by experts in the software and
              business fields.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default About;
