import { Clear } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { memo } from "react";
interface IProps {
  toggleDrawer: (value: boolean) => () => void;
}
const ShoppingCartDrawerHeader = ({ toggleDrawer }: IProps) => {
  return (
    <>
      <Stack
        pb={"20px"}
        px={"15px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="h6"
          component={"h6"}
          sx={{
            color: "#242424",
            fontWeight: "bold",
          }}
        >
          Shopping cart
        </Typography>
        <Button
          onClick={toggleDrawer(false)}
          disableRipple
          sx={{
            color: "#333",
            transition: "all 0.3s ease",
            backgroundColor: "transparent",
            fontSize: "15px",
            gap: "1px",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              color: "#777",
            },
            "& .MuiButton-startIcon": {
              margin: 0,
            },
          }}
          startIcon={<Clear />}
        >
          <Typography fontWeight={700}>Close</Typography>
        </Button>
      </Stack>
    </>
  );
};
export default memo(ShoppingCartDrawerHeader);
