import { Box, Button, Stack, Typography } from "@mui/material";
import type { IProduct } from "../../interfaces";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { removeItemFromCart } from "../../app/features/cart/cartSlice";
import { useAppDispatch } from "../../app/store";
import QuantityBox from "./QuantityBox";

interface IProps {
  product: IProduct;
}
const SmallProductCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const onClickToRemove = (product: IProduct) => {
    dispatch(removeItemFromCart(product));
  };
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        gap={"20px"}
        sx={{
          pb: "15px",
          mb: "15px",
          borderBottom: "1px solid #0000001a",
          "&:last-child": {
            borderBottom: "none",
          },
        }}
      >
        <Box
          component={"img"}
          src={product.img}
          alt={product.title}
          sx={{
            height: "130px",
            width: "100px",
            borderRadius: "6px",
          }}
        />
        <Box flex={1} display={"flex"} flexDirection={"column"} gap={"10px"}>
          {/* Title  */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"6px"}
            flexGrow={1}
          >
            <Typography
              component={Link}
              to={`/product/${product.slug}`}
              sx={{
                color: "#242424",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#777",
                },
              }}
            >
              {product.title}
            </Typography>
            <Button
              onClick={() => onClickToRemove(product)}
              sx={{
                cursor: "pointer",
                color: "inherit",
                padding: 0,
                minWidth: 0,
                transition: "all 0.3s ease",
                "&:hover svg": {
                  color: "#777",
                },
              }}
            >
              <Close
                fontSize="small"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            </Button>
          </Stack>
          {/* Price  */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexGrow={1}
            sx={{
              borderBottom: "1px dashed #0000001b",
              pb: "5px",
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <Typography
              sx={{
                color: "#777",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Price
            </Typography>
            <Typography
              sx={{
                color: "#777",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              {product.price} EGP
            </Typography>
          </Stack>
          {/* Quantity  */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexGrow={1}
            sx={{
              borderBottom: "1px dashed #0000001b",
              pb: "5px",
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <Typography
              sx={{
                color: "#777",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Quantity
            </Typography>
            <QuantityBox product={product} />
          </Stack>
          {/* Actions  */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexGrow={1}
            sx={{
              borderBottom: "1px dashed #0000001b",
              pb: "5px",
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <Typography
              sx={{
                color: "#777",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Subtotal
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              {product.price + 80} EGP
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
export default SmallProductCard;
