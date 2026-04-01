import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { useMemo } from "react";

const CartInfo = () => {
  const cart = useAppSelector((state) => state.cart.cartProducts);
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }, [cart]);
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          width: {
            xs: "100%",
            lg: "33.4%",
          },
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0 0 3px #ebebeb",
          borderRadius: "10px",
        }}
      >
        <Stack direction={"column"} gap={"15px"}>
          <Typography
            component={"h4"}
            sx={{
              fontSize: "22px",
              color: "#242424",
              fontWeight: 700,
            }}
          >
            Cart Totals
          </Typography>
          <Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                borderBottom: "1px solid #0000001a",
                py: "15px",
              }}
            >
              <Typography fontSize={"15px"} color="#242424" fontWeight={700}>
                Subtotal
              </Typography>
              <Typography fontSize={"15px"} color="#777">
                {totalPrice} EGP
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                borderBottom: "1px solid #0000001a",
                py: "15px",
              }}
            >
              <Typography fontSize={"15px"} color="#242424" fontWeight={700}>
                Shipment
              </Typography>
              <Box>
                <Typography component={"p"} color={"#242424"} fontSize={"15px"}>
                  Cairo & Giza:{" "}
                  <Typography
                    component={"span"}
                    color="text.primary"
                    fontWeight={"600"}
                  >
                    80 EGP
                  </Typography>
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                borderBottom: "none",
                py: "15px",
                mb: "20px",
              }}
            >
              <Typography fontSize={"15px"} color="#242424" fontWeight={700}>
                Total
              </Typography>
              <Typography
                fontSize={"20px"}
                color="text.primary"
                fontWeight={700}
              >
                {totalPrice + 80} EGP
              </Typography>
            </Stack>
            <Button
              sx={{
                textTransform: "initial",
                bgcolor: "primary.main",
                transition: "all 0.3s ease",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "35px",
                height: "42px",
                padding: "5px 25px",
                width: "100%",
                "&:hover": {
                  bgcolor: "primary.light",
                },
              }}
            >
              Proceed to checkout
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default CartInfo;
