import { Button, Stack } from "@mui/material";

const OAuth = () => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "column",
            lg: "row",
          },
          alignItems: "center",
        }}
        gap={"15px"}
      >
        <Button
          sx={{
            flex: 1,
            height: "44px",
            borderRadius: "35px",
            boxShadow: "none",
            color: "#fff",
            fontWeight: 600,
            bgcolor: "#3B5998",
            textTransform: "initial",
            textAlign: "center",
            backgroundImage: "url(/images/facebook.png)",
            backgroundSize: "26px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 15px center",
            width: "100%",
            ":hover": {
              bgcolor: "#314d88",
              boxShadow: "none",
            },
          }}
          variant="contained"
        >
          Facebook
        </Button>
        <Button
          sx={{
            flex: 1,
            height: "44px",
            borderRadius: "35px",
            boxShadow: "none",
            color: "#fff",
            fontWeight: 600,
            textTransform: "initial",
            textAlign: "center",
            bgcolor: "#4285F4",
            backgroundImage: "url(/images/google.png)",
            backgroundSize: "26px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 15px center",
            width: "100%",
            ":hover": {
              bgcolor: "#3d7fe8",
              boxShadow: "none",
            },
          }}
          variant="contained"
        >
          Google
        </Button>
      </Stack>
    </>
  );
};
export default OAuth;
