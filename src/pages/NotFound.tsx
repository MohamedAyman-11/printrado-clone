import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | Printrado</title>
      </Helmet>
      <Box
        component="section"
        sx={{
          mt: "3px",
          py: 5,
          backgroundColor: "#fff",
          minHeight: "50vh",
        }}
      >
        <Box className="container">
          <Box component={"div"} className="content" textAlign={"center"}>
            <Box
              sx={{
                padding: "40px 0",
                mb: "20px",
              }}
            >
              <Box
                sx={{
                  padding: "1.5em 0",
                  position: "relative",
                  "&:before": {
                    content: `"404"`,
                    textAlign: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: {
                      xs: "180px",
                      md: "250px",
                    },
                    fontWeight: 700,
                    color: "#f1f1f1",
                    zIndex: 0,
                    letterSpacing: "10px",
                  },
                }}
              >
                <Typography
                  component={"h3"}
                  sx={{
                    color: "text.primary",
                    textTransform: "uppercase",
                    fontWeight: 900,
                    fontSize: {
                      xs: "40px",
                      md: "55px",
                    },
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Not Found
                </Typography>
              </Box>
            </Box>
            <Typography
              component={"h1"}
              sx={{
                color: "#242424",
                fontSize: {
                  xs: "18px",
                  md: "28px",
                },
                fontWeight: 700,
                mb: "20px",
              }}
            >
              This is somewhat embarrassing, isn’t it?
            </Typography>
            <Typography
              component={"h1"}
              sx={{
                color: "#777777",
                fontSize: {
                  xs: "15px",
                  md: "17px",
                },
                mb: "20px",
              }}
            >
              It looks like nothing was found at this location. Maybe try a
              search?
            </Typography>
            <Typography
              component={NavLink}
              to={"/"}
              reloadDocument
              sx={{
                mx: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "200px",
                padding: "0 25px",
                height: "42px",
                color: "#fff",
                fontSize: "16pxx",
                bgcolor: "primary.main",
                borderRadius: "35px",
                transition: "all 0.3s ease",
                textDecoration: "none",
                fontWeight: 700,
                ":hover": {
                  bgcolor: "primary.light",
                },
              }}
            >
              Go to home
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default NotFound;
