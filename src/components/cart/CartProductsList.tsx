import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";
import OrderProgress from "../ShoppingCartDrawer/OrderProgress";
import ProductDisplay from "./ProductDisplay";
import { useAppSelector } from "../../app/hooks";
import CartEmpty from "./CartEmpty";
import CartInfo from "./CartInfo";
import ProductDisplaySmall from "./ProductDisplaySmall";

const CartProductsList = () => {
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Helmet>
        <title>Cart | Printrado</title>
      </Helmet>
      <Box
        component="section"
        sx={{
          mt: "3px",
          py: 5,
          backgroundImage: "url(/images/background.webp)",
          backgroundColor: "#fff",
        }}
      >
        <Box className="container">
          {cartProductsList.length ? (
            <Stack
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: {
                  xs: "column",
                  lg: "row",
                },
                gap: "25px",
              }}
            >
              {/* Left  */}
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    lg: "66.6%",
                  },
                }}
              >
                {/* Order Progress  */}
                <Box
                  sx={{
                    bgcolor: "#fff",
                    padding: "5px",
                    borderRadius: "10px",
                    boxShadow: "0 0 3px #ebebeb",
                  }}
                >
                  <OrderProgress />
                </Box>
                <Box mt={"20px"}>
                  {isLarge && <ProductDisplay />}
                  {!isLarge && <ProductDisplaySmall />}
                </Box>
              </Box>
              {/* Right */}
              <CartInfo />
            </Stack>
          ) : (
            <CartEmpty />
          )}
        </Box>
      </Box>
    </>
  );
};
export default CartProductsList;
