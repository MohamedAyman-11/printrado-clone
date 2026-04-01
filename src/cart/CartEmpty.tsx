import { ProductionQuantityLimits } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          minHeight: "40vh",
        }}
      >
        <ProductionQuantityLimits
          sx={{
            fontSize: "135px",
            color: "#00000012",
          }}
        />
        <Box mb={"20px"}>
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
              mx: "auto",
            }}
          >
            Your cart is currently empty.
          </Typography>
          <Typography
            maxWidth={"535px"}
            mb={"20px"}
            mx={"auto"}
            color="#777"
            fontSize={"16px"}
            textAlign={"center"}
            fontWeight={500}
            lineHeight={"1.7"}
          >
            To proceed to checkout you must add some books to your shopping
            cart.
            <br />
            You will find a lot of interesting books on our "Shop" page.
          </Typography>
        </Box>
        <Typography
          component={Link}
          to={"/"}
          sx={{
            textTransform: "initial",
            color: "#fff",
            bgcolor: "primary.main",
            height: "42px",
            px: "25px",
            py: "5px",
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "35px",
            transition: "all 0.3s ease",
            display: "flex",
            width: "fit-content",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            textDecoration: "none",
            "&:hover": {
              bgcolor: "primary.light",
            },
          }}
        >
          Return to shop
        </Typography>
      </Box>
    </>
  );
};
export default CartEmpty;
