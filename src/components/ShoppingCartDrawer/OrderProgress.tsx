import { Box, LinearProgress, Typography } from "@mui/material";
import { memo, useMemo } from "react";
import { useAppSelector } from "../../app/hooks";

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
      <Box sx={{ py: "15px" }} px={"15px"}>
        <Typography sx={{ mb: 1, color: "#777", fontSize: "15px" }}>
          {remaining ? (
            <Typography component={"span"}>
              Add <span className="remaining-price">{remaining} EGP </span>
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
            height: 10,
            borderRadius: 5,
            backgroundColor: "#eee",
            "& .MuiLinearProgress-bar": {
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
              backgroundSize: "15px 15px",
              backgroundColor: "#ed9c4b",
            },
          }}
        />
      </Box>
    </>
  );
};
export default memo(OrderProgress);
