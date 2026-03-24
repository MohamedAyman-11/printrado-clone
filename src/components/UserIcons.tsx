import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";

const UserIcons = () => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
        <IconButton
          sx={{
            width: "46px",
            height: "46px",
            bgcolor: "#1010100d",
            color: "#101010b3",
          }}
        >
          <FavoriteBorderOutlined fontSize="medium" />
        </IconButton>
        <IconButton
          sx={{
            width: "46px",
            height: "46px",
            bgcolor: "#1010100d",
            color: "#101010b3",
          }}
        >
          <PersonOutlined fontSize="medium" />
        </IconButton>
        <Button
          sx={{
            padding: "12px",
            bgcolor: "#101010",
            color: "white",
            borderRadius: "30px",
            fontWeight: "bold",
          }}
          startIcon={<ShoppingCartOutlined />}
        >
          0 EGP
        </Button>
      </Stack>
    </>
  );
};
export default UserIcons;
