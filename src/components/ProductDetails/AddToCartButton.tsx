import { Check, ShoppingCart } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { memo } from "react";
interface IProps {
  inCart: boolean;
  onAddItemToCart: () => void;
  disabled: boolean;
}
const iconStyle = {
  position: "absolute",
  fontSize: "20px",
  transform: "translateY(100%)",
  opacity: 0,
  transition: "all 0.3s ease",
};
const AddToCartButton = ({ inCart, onAddItemToCart, disabled }: IProps) => {
  return (
    <>
      <Button
        className="add-to-cart-btn"
        disabled={disabled}
        onClick={onAddItemToCart}
        sx={{
          cursor: "pointer",
          flex: "1 1 auto",
          flexGrow: {
            xs: "0",
            lg: "1",
          },
          position: "relative",
          width: {
            xs: "100%",
            lg: "100%",
          },
          height: "40px",
          borderRadius: "90px",
          bgcolor: "primary.main",
          color: "#fff",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "#d8832e",
          },
          "&:disabled": {
            pointerEvents: "auto",
            bgcolor: "#999",
            color: "#fff",
            cursor: "not-allowed",
          },
          "&:hover .text": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "&:hover .icon": {
            transform: "translateY(0)",
            opacity: 1,
          },
        }}
      >
        {/* Text */}
        <Typography
          className="text"
          sx={{
            position: "absolute",
            fontSize: "12px",
            fontWeight: 700,
            transition: "all 0.3s ease",
          }}
        >
          Add to cart
        </Typography>
        {/* Icon */}
        {inCart ? (
          <Check className="icon" sx={iconStyle} />
        ) : (
          <ShoppingCart className="icon" sx={iconStyle} />
        )}
      </Button>
    </>
  );
};
export default memo(AddToCartButton);
