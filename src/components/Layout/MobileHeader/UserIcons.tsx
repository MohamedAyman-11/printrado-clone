import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Badge,
  badgeClasses,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import { Link } from "react-router-dom";
import { memo } from "react";
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    min-width: initial;
    top: -8px;
    right: 2px;
    width: 17px;
    height: 17px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 10px;
    color: #fff;
    line-height: initial;
    background-color: #ed9c4b;
    font-weight: initial;
  }
`;
interface IProps {
  toggleLShoppingDrawer: (value: boolean) => () => void;
}
const UserIcons = ({ toggleLShoppingDrawer }: IProps) => {
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
  const wishListProducts = useAppSelector(
    (state) => state.wishList.wishListProducts,
  );
  return (
    <>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          component={Link}
          to={"/wishlist"}
          sx={{
            width: "46px",
            height: "46px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            color: "#101010b3",
            transition: "all 0.3s ease",
            padding: "9px",
            position: "relative",
            ":hover svg": {
              transform: "scale(1.1)",
              color: "#999",
            },
          }}
        >
          <FavoriteBorderOutlined
            fontSize="medium"
            sx={{
              fontSize: "18ppx",
              transition: "all 0.3s ease",
            }}
          />
          <span className="wishlist-badge">{wishListProducts.length}</span>
        </Typography>
        <Typography
          component={Link}
          to={"/my-account"}
          sx={{
            width: "46px",
            height: "46px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            color: "#101010b3",
            transition: "all 0.3s ease",
            padding: "9px",
            position: "relative",
            ":hover svg": {
              transform: "scale(1.1)",
              color: "#999",
            },
          }}
        >
          <PersonOutlined
            fontSize="medium"
            sx={{
              fontSize: "18ppx",
              transition: "all 0.3s ease",
            }}
          />
        </Typography>
        <IconButton
          onClick={toggleLShoppingDrawer(true)}
          disableRipple
          sx={{
            width: "42px",
            height: "42px",
            color: "#101010b3",
            transition: "all 0.3s ease",
            ":hover svg": {
              color: "#999",
              transform: "scale(1.1)",
            },
          }}
        >
          <ShoppingCartOutlined
            fontSize="medium"
            sx={{
              fontSize: "18ppx",
              transition: "all 0.3s ease",
            }}
          />
          <CartBadge
            showZero
            badgeContent={cartProductsList.length}
            overlap="circular"
          />
        </IconButton>
      </Stack>
    </>
  );
};
export default memo(UserIcons);
