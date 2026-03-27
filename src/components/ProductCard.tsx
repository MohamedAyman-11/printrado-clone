import { FavoriteBorderOutlined, ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import type { IProduct } from "../interfaces";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/store";
import { addItemToCart } from "../app/features/cart/cartSlice";
interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const onAddItemToCart = () => {
    dispatch(addItemToCart(product));
  };
  return (
    <>
      <Grid size={{ xs: 6, md: 4, lg: 3, xl: 2.4 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            position: "relative",
            "&:hover .product-img": {
              transform: "scale(1.04)",
            },
          }}
        >
          {/* Badge */}
          <Stack
            sx={{
              zIndex: (theme) => theme.zIndex.drawer - 1,
              width: "calc(100% - 20px)",
              position: "absolute",
              top: "0px",
              left: "10px",
              right: "10px",
            }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {product.hasDiscount && (
              <Typography
                variant="body2"
                fontWeight={700}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: "30px",
                  py: 0.5,
                  px: 1,
                }}
              >
                -{product.discountRate}%
              </Typography>
            )}
            <Tooltip
              title="Add to wishlist"
              placement="top"
              arrow
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -10],
                      },
                    },
                  ],
                },
              }}
            >
              <IconButton
                sx={{
                  ml: "auto",
                  "&:hover svg": {
                    transform: "scale(1.15)",
                    color: "error.light",
                  },
                }}
              >
                <FavoriteBorderOutlined
                  sx={{
                    fontSize: "28px",
                    transition: "all 0.3s ease",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
          {/* IMAGE */}
          <Box
            component={Link}
            to={`/product/${product.slug}`}
            sx={{
              width: "100%",
              height: "300px",
            }}
          >
            <Box
              className="product-img"
              component={"img"}
              src={product.img}
              alt={product.title}
              decoding="async"
              loading="lazy"
              width={"100%"}
              height={"100%"}
              sx={{
                transition: "all 0.3s ease",
              }}
            />
          </Box>

          {/* CONTENT */}
          <Box
            sx={{
              p: 2,
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {/* Title */}
            <Typography
              textTransform={"capitalize"}
              component={Link}
              to={`/product/${product.slug}`}
              sx={{
                mt: "2px",
                fontWeight: 700,
                textDecoration: "none",
                color: "#333",
                fontSize: "15px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#777",
                },
              }}
            >
              {product.title}
            </Typography>
            {/* PRICE */}
            <Stack
              mt={"10px"}
              direction={"row"}
              alignItems={"center"}
              gap={"8px"}
            >
              {product.hasDiscount && product.discountRate ? (
                <Typography
                  fontSize={"13px"}
                  color="#BBBBBB"
                  sx={{
                    textDecoration: "line-through",
                  }}
                >
                  {product.price.toFixed(2)} EGP
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  color="primary.main"
                  fontWeight={"bold"}
                >
                  {product.price.toFixed(2)} EGP
                </Typography>
              )}
              <Typography
                variant="body2"
                color="primary.main"
                fontWeight={"bold"}
              >
                {product.hasDiscount && product.discountRate
                  ? (
                      product.price -
                      (product.price * product?.discountRate) / 100
                    ).toFixed(2) + " EGP"
                  : null}
              </Typography>
            </Stack>
            <Button
              onClick={onAddItemToCart}
              sx={{
                position: "relative",
                width: "100%",
                height: "40px",
                borderRadius: "90px",
                bgcolor: "primary.main",
                color: "#fff",
                overflow: "hidden",
                mt: "5px",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#d8832e",
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
              <ShoppingCart
                className="icon"
                sx={{
                  position: "absolute",
                  fontSize: "20px",
                  transform: "translateY(100%)",
                  opacity: 0,
                  transition: "all 0.3s ease",
                }}
              />
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default ProductCard;
