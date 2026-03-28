import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Badge,
  badgeClasses,
  Button,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { useAppSelector } from "../app/hooks";
interface IProps {
  toggleDrawer: (value: boolean) => () => void;
}
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -10px;
    background-color: #fff;
    color: #ed9c4b;
    box-shadow: 0 0 2px #999;
  }
`;
const UserIcons = ({ toggleDrawer }: IProps) => {
  /* Get Cart Products Form Store */
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
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
          <CartBadge
            badgeContent={cartProductsList.length}
            color="primary"
            overlap="circular"
          />
        </Button>
      </Stack>
    </>
  );
};
export default UserIcons;
