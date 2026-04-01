import { Box } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import SmallProductCard from "./SmallProductCard";

const ProductDisplaySmall = () => {
  const cart = useAppSelector((state) => state.cart.cartProducts);
  return (
    <>
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: "0 0 3px #ebebeb",
          p: "20px",
          bgcolor: "#fff",
        }}
      >
        {cart.map((product) => (
          <SmallProductCard product={product} key={product.slug} />
        ))}
      </Box>
    </>
  );
};
export default ProductDisplaySmall;
