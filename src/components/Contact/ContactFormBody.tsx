import { Box, Typography } from "@mui/material";
import Form from "./Form";

const ContactFormBody = () => {
  return (
    <>
      <Box>
        <Box component={"div"} className="header-wrapper" mb={"20px"}>
          <Typography
            component={"h4"}
            sx={{
              fontSize: "32px",
              color: "#242424",
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
          <Form />
        </Box>
      </Box>
    </>
  );
};
export default ContactFormBody;
