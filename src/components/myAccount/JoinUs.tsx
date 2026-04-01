import { Box, Divider, Stack, Typography } from "@mui/material";
import RegisterForm from "./RegisterForm";
import JoinGuide from "./JoinGuide";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const JoinUs = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <Helmet>
        <title>My Account | Printrado</title>
      </Helmet>
      <Box
        component={"section"}
        sx={{
          backgroundImage: "url(/images/background.webp)",
          mt: "3px",
          py: 5,
        }}
      >
        <Box className="container">
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!showLogin && <RegisterForm />}
            {showLogin && <LoginForm />}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: {
                  md: "block",
                  xs: "none",
                },
              }}
            />
            <Box
              alignItems="center"
              gap={2}
              my={"20px"}
              width={"100%"}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <Box flex={1} height="1px" bgcolor="#0000001b" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#242424",
                }}
              >
                OR
              </Typography>
              <Box flex={1} height="1px" bgcolor="#0000001b" />
            </Box>
            <JoinGuide setShowLogin={setShowLogin} />
          </Stack>
        </Box>
      </Box>
    </>
  );
};
export default JoinUs;
