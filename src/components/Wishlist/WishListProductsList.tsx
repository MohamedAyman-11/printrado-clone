import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import WishlistHeader from "./WishlistHeader";
import WishlistBody from "./WishlistBody";

const WishListProductsList = () => {
  return (
    <>
      <Helmet>
        <title>Wishlist | Printrado</title>
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
          <Box
            sx={{
              border: "1px solid #0000001b",
              borderRadius: "10px",
            }}
          >
            <WishlistHeader />
            <WishlistBody />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default WishListProductsList;
