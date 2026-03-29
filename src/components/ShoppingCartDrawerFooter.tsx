import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { memo, useMemo } from "react";
import OrderProgress from "./OrderProgress";
import { Link } from "react-router-dom";
interface IProps {
  toggleLShoppingDrawer: (value: boolean) => () => void;
}
const ShoppingCartDrawerFooter = ({ toggleLShoppingDrawer }: IProps) => {
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
  const totalPrice = useMemo(() => {
    return cartProductsList.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0,
    );
  }, [cartProductsList]);
  return (
    <>
      <Box>
        <Stack
          py={"15px"}
          px={"15px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            border: "1px solid #0000001b",
            borderRight: "none",
            borderLeft: "none",
          }}
        >
          <Typography
            variant="h6"
            component={"h6"}
            sx={{
              color: "#242424",
              fontWeight: "bold",
            }}
          >
            Subtotal:
          </Typography>
          <Typography
            variant="body1"
            color="primary.main"
            sx={{
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            {totalPrice} EGP
          </Typography>
        </Stack>
        <OrderProgress />
        {/* ** Button Actions ** */}
        <Stack direction={"column"} px={"15px"}>
          <Link
            className="go-to-cart"
            to={"/cart"}
            onClick={toggleLShoppingDrawer(false)}
          >
            View cart
          </Link>
          <Button
            sx={{
              width: "100%",
              color: "#ffff",
              bgcolor: "primary.main",
              mt: "10px",
              borderRadius: "35px",
              fontWeight: 600,
              textTransform: "initial",
              p: "12px 20px",
              display: "block",
              lineHeight: "initial",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#d8832e",
              },
            }}
          >
            Checkout
          </Button>
        </Stack>
      </Box>
    </>
  );
};
export default memo(ShoppingCartDrawerFooter);
