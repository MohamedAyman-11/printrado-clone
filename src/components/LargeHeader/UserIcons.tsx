import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, badgeClasses, Button, Stack, styled } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { useMemo } from "react";
import { Link } from "react-router-dom";
interface IProps {
  toggleDrawer: (value: boolean) => () => void;
}
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -15px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #ed9c4b;
    box-shadow: 0 0 2px #999;
  }
`;
const UserIcons = ({ toggleDrawer }: IProps) => {
  /* Get Cart Products Form Store */
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
  const totalPrice = useMemo(() => {
    return cartProductsList.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0,
    );
  }, [cartProductsList]);

  return (
    <>
      <Stack direction={"row"} alignItems={"center"} gap={"15px"}>
        <Link to={"/wishlist"} className="large-header-icon">
          <FavoriteBorderOutlined
            fontSize="medium"
            sx={{
              transition: "all 0.3s ease",
            }}
          />
        </Link>
        <Link to={"/cart"} className="large-header-icon">
          <PersonOutlined
            fontSize="medium"
            sx={{
              transition: "all 0.3s ease",
            }}
          />
        </Link>
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            padding: "10px 15px",
            bgcolor: "#101010",
            color: "white",
            borderRadius: "30px",
            fontWeight: "bold",
          }}
          startIcon={<ShoppingCartOutlined />}
        >
          {totalPrice} EGP
          <CartBadge
            badgeContent={cartProductsList.length}
            showZero
            color="primary"
            overlap="circular"
          />
        </Button>
      </Stack>
    </>
  );
};
export default UserIcons;
