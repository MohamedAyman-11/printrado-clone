import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
interface IProps {
  toggleDrawer: (value: boolean) => () => void;
}
const UserIcons = ({ toggleDrawer }: IProps) => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
        <IconButton
          sx={{
            width: "46px",
            height: "46px",
            bgcolor: "#1010100d",
            color: "#101010b3",
            "&:hover svg": {
              color: "#999",
              transform: "scale(1.09)",
            },
          }}
        >
          <FavoriteBorderOutlined
            fontSize="medium"
            sx={{
              transition: "all 0.3s ease",
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            width: "46px",
            height: "46px",
            bgcolor: "#1010100d",
            color: "#101010b3",
            "&:hover svg": {
              color: "#999",
              transform: "scale(1.09)",
            },
          }}
        >
          <PersonOutlined
            fontSize="medium"
            sx={{
              transition: "all 0.3s ease",
            }}
          />
        </IconButton>
        <Button
          onClick={toggleDrawer(true)}
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
