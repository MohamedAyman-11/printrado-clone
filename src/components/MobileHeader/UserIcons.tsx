import {
  FavoriteBorderOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, badgeClasses, IconButton, Stack, styled } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
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
        <Link
          to={"/wishlist"}
          className="small-header-icon"
          style={{
            position: "relative",
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
        </Link>
        <Link to={"/cart"} className="small-header-icon">
          <PersonOutlined
            fontSize="medium"
            sx={{
              fontSize: "18ppx",
              transition: "all 0.3s ease",
            }}
          />
        </Link>
        <IconButton
          onClick={toggleLShoppingDrawer(true)}
          disableRipple
          sx={{
            width: "42px",
            height: "42px",
            color: "#101010b3",
          }}
        >
          <ShoppingCartOutlined
            fontSize="medium"
            sx={{
              fontSize: "18ppx",
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
export default UserIcons;
