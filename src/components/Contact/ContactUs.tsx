import { Box, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import ContactForm from "./ContactForm";
import AskedQuestions from "./AskedQuestions";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact us | Printrado</title>
      </Helmet>
      <Box
        component="section"
        sx={{
          mt: "3px",
          py: 5,
          backgroundImage: "url(/images/background.webp)",
          backgroundColor: "#fff",
        }}
      >
        <Box className="container">
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "30px",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <ContactForm />
            <AskedQuestions />
          </Stack>
        </Box>
      </Box>
    </>
  );
};
export default ContactUs;
