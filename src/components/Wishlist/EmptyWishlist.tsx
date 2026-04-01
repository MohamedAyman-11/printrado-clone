import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const EmptyWishlist = () => {
  return (
    <>
      <Box
        sx={{
          height: "40vh",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          flexDirection: "column",
          p: "15px",
        }}
      >
        <FavoriteBorderOutlined
          sx={{
            mx: "auto",
            fontSize: "70px",
            color: "#00000012",
          }}
        />
        <Typography
          component={"h6"}
          sx={{
            color: "#242424",
            fontSize: {
              xs: "30px",
              md: "40px",
            },
            fontWeight: 700,
            mb: "20px",
          }}
        >
          This wishlist is empty.
        </Typography>
        <Typography
          sx={{
            color: "#777",
            maxWidth: "535px",
            fontSize: "15px",
            textAlign: "center",
            fontWeight: 500,
            mx: "auto",
          }}
        >
          You don't have any products in the wishlist yet. You will find a lot
          of interesting products on our "Shop" page.
        </Typography>
      </Box>
    </>
  );
};
export default EmptyWishlist;
