import { Box, Grid } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import ProductCard from "./ProductCard";
import { memo } from "react";
import EmptyWishlist from "./EmptyWishlist";
const WishlistBody = () => {
  const wishlistItems = useAppSelector(
    (state) => state.wishList.wishListProducts,
  );
  return (
    <>
      {wishlistItems.length ? (
        <Box p={"15px"}>
          <Grid container columnSpacing={"20px"} rowSpacing={"10px"}>
            {wishlistItems.map((product) => (
              <Grid size={{ xs: 6, md: 4, lg: 3 }} key={product.slug}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <EmptyWishlist />
      )}
    </>
  );
};
export default memo(WishlistBody);
