import { Box, Button, Typography } from "@mui/material";
interface IProps {
  setShowLogin: (value: boolean | ((prev: boolean) => boolean)) => void;
}
const JoinGuide = ({ setShowLogin }: IProps) => {
  return (
    <>
      <Box
        textAlign={"center"}
        flex={1}
        sx={{
          width: "100%",
          px: {
            xs: "20px",
            lg: "40px",
          },
        }}
      >
        <Typography
          variant="h2"
          component={"h2"}
          color="#242424"
          fontSize={"24px"}
          fontWeight={700}
          mb={"20px"}
        >
          Login
        </Typography>
        <Typography variant="body1" color="#777" fontSize={"15px"} mb={"20px"}>
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and we'll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier
        </Typography>
        <Button
          onClick={() => setShowLogin((prev) => !prev)}
          sx={{
            width: "fit-content",
            p: "8px 20px",
            background: "#f7f7f7",
            color: "#333",
            borderRadius: "35px",
            textTransform: "initial",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "#ececec",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </>
  );
};
export default JoinGuide;
