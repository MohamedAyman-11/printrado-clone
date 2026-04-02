import { Box, Typography } from "@mui/material";
import { memo } from "react";
import ContactAccordion from "./ContactAccordion";

const AskedQuestions = () => {
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
        <Box component={"div"} className="header-wrapper" mb={"20px"}>
          <Typography
            component={"h4"}
            sx={{
              fontSize: {
                xs: "24px",
                lg: "36px",
              },
              color: "#242424",
              fontWeight: 700,
            }}
          >
            Frequently asked questions
          </Typography>
        </Box>
        <ContactAccordion />
      </Box>
    </>
  );
};
export default memo(AskedQuestions);
