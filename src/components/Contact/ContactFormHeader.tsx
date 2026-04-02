import { Box, Typography } from "@mui/material";

const ContactFormHeader = () => {
  return (
    <>
      <Box>
        <Box component={"div"} className="header-wrapper" mb={"20px"}>
          <Typography
            component={"h4"}
            sx={{
              fontSize: "36px",
              color: "#242424",
              fontWeight: 700,
            }}
          >
            New Cairo
          </Typography>
        </Box>

        <Box component={"div"} className="info-wrapper" mb="20px">
          <Typography
            component={"p"}
            sx={{
              fontSize: "15px",
              color: "#242424",
              lineHeight: "1.6",
              mb: "20px",
            }}
          >
            <b>5th Settlement</b>
            <br />
            <strong>
              South Investors 4 - Building 244 - Gamal Abdelnasser Road
            </strong>
          </Typography>

          <Typography
            component={"p"}
            sx={{
              fontSize: "15px",
              color: "#242424",
              mb: "20px",
            }}
          >
            <strong>Sunday - Thursday </strong>
            10:00 - 18:00
          </Typography>

          <Typography
            component={"p"}
            sx={{
              fontSize: "15px",
              color: "#242424",
              mb: "20px",
            }}
          >
            <strong>011-011-60177</strong>
          </Typography>

          <Typography
            component={"p"}
            sx={{
              fontSize: "15px",
              color: "#242424",
            }}
          >
            <strong>
              This is a logistic branch, not a showroom. Prior reservation and
              coordination is "MANDATORY" before visiting.
            </strong>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ContactFormHeader;
