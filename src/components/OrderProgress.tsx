import { Box, LinearProgress, Typography } from "@mui/material";
import { memo, useMemo } from "react";
import { useAppSelector } from "../app/hooks";

const OrderProgress = () => {
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
  const totalPrice = useMemo(() => {
    return cartProductsList.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0,
    );
  }, [cartProductsList]);
  const remaining = totalPrice < 2000 ? 2000 - totalPrice : null;
  const progress = Math.min((totalPrice / 2000) * 100, 100);
  return (
    <>
      <Box sx={{ py: "15px" }}>
        <Typography sx={{ mb: 1, color: "#777", fontSize: "15px" }}>
          {remaining ? (
            <Typography component={"span"}>
              Add <span className="remaining-price">{remaining} EGP</span> EGP
              to cart and get free shipping!
            </Typography>
          ) : (
            "Your order qualifies for free shipping!"
          )}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "#eee",
            "& .MuiLinearProgress-bar": {
              background:
                "repeating-linear-gradient(45deg, #f97316, #f97316 10px, #fb923c 10px, #fb923c 20px)",
            },
          }}
        />
      </Box>
    </>
  );
};
export default memo(OrderProgress);
