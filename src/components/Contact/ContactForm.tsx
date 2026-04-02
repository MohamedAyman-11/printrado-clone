import ContactFormBody from "./ContactFormBody";
import ContactFormHeader from "./ContactFormHeader";
import { Box } from "@mui/material";

const ContactForm = () => {
  return (
    <>
      <Box
        sx={{
          flex: "1",
          width: {
            xs: "100%",
            md: "50%",
          },
        }}
      >
        <ContactFormHeader />
        <ContactFormBody />
      </Box>
    </>
  );
};
export default ContactForm;
