import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";

const RememberMe = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={"20px"}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          sx={{
            "& .MuiButtonBase-root": {
              p: "0 6px",
            },
            "& .MuiButtonBase-root.Mui-checked": {
              color: "#0076ff",
            },
            "& .MuiSvgIcon-root": {
              width: "18px",
              height: "18px",
            },
            "& .MuiTypography-root ": {
              fontSize: "15px",
              userSelect: "none",
              lineHeight: "initial",
            },
          }}
        />
        <Button
          component={Link}
          to={"/my-account"}
          sx={{
            fontSize: "15",
            textTransform: "initial",
            transition: "all 0.3s ease",
            color: "text.primary",
            ":hover": {
              color: "primary.main",
              bgcolor: "transparent",
            },
          }}
        >
          Lost your password?
        </Button>
      </Stack>
    </>
  );
};
export default memo(RememberMe);
