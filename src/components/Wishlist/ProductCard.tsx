import { Check, Close, ShoppingCart } from "@mui/icons-material";
import { Box, Button, Icon, Stack, Typography } from "@mui/material";
import type { IProduct } from "../../interfaces";
import { useAppDispatch } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import { addItemToCart } from "../../app/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { addItemToWishList } from "../../app/features/wishList/wishListSlice";
import { memo } from "react";
interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  /* ** Get Data From Store ** */
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  /* ** Checks ** */
  const inCart = cartProducts.find((item) => item.slug === product.slug);

  /* ** Handlers ** */
  const onAddItemToCart = () => {
    dispatch(addItemToCart(product));
  };
  const onRemoveFromWishlist = () => {
    dispatch(addItemToWishList(product));
  };
  return (
    <>
      <Box>
        <Button
          onClick={onRemoveFromWishlist}
          disableRipple
          sx={{
            display: "flex",
            alignItems: "center",
            lineHeight: "initial",
            textTransform: "initial",
            bgcolor: "transparent",
            transition: "all 0.3s ease",
            cursor: "pointer",
            mb: "5px",
            "&:hover": {
              color: "#777",
              bgcolor: "transparent",
            },
            "&:hover svg": {
              color: "#777",
            },
            "&:hover p": {
              color: "#777",
            },
          }}
        >
          <Icon>
            <Close
              sx={{
                color: "#333",
                fontSize: "19px",
                transition: "all 0.3s ease",
              }}
            />
          </Icon>
          <Typography
            variant="body1"
            color="#333"
            fontSize={"14px"}
            fontWeight={600}
            sx={{
              transition: "all 0.3s ease",
            }}
          >
            Remove
          </Typography>
        </Button>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 0 4px rgba(0,0,0,0.12)",
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              transform: "translateY(-5px) ",
            },
            "&:hover .btn-add-to-cart": {
              opacity: 1,
            },
            "&:hover .box-content": {
              transform: {
                xs: "translateY(0px)",
                lg: "translateY(-48px)",
              },
            },
          }}
        >
          {/* Badge */}
          <Stack
            sx={{
              zIndex: (theme) => theme.zIndex.drawer - 1,
              width: "calc(100% - 20px)",
              position: "absolute",
              top: "10px",
              left: "10px",
              right: "10px",
            }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {product.inStock ? (
              product.hasDiscount && (
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{
                    bgcolor: "text.primary",
                    color: "white",
                    borderRadius: "30px",
                    fontSize: "13px",
                    py: 0.5,
                    px: 1,
                  }}
                >
                  -{product.discountRate}%
                </Typography>
              )
            ) : (
              <Typography
                variant="body2"
                fontWeight={700}
                sx={{
                  bgcolor: "error.light",
                  color: "white",
                  borderRadius: "30px",
                  py: 0.5,
                  px: 1,
                  fontSize: "13px",
                }}
              >
                Sold Out
              </Typography>
            )}
          </Stack>
          {/* IMAGE */}
          <Box
            component={Link}
            to={`/product/${product.slug}`}
            sx={{
              width: "100%",
              overflow: "hidden",
              height: {
                xs: "240px",
                sm: "270px",
              },
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
              sx={{
                width: "100%",
                height: "100%",
                transition: "all 0.3s ease",
              }}
            />
          </Box>

          {/* CONTENT */}
          <Box
            className="box-content"
            sx={{
              p: "15px 12px",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
              bgcolor: "#fff",
              gap: "8px",
              flexGrow: 1,
              transform: {
                xs: "translateY(0px)",
                lg: "translateY(10px)",
              },
              marginBottom: {
                xs: "0px",
                lg: "-48px",
              },
            }}
          >
            {/* Title */}
            <Typography
              textTransform={"capitalize"}
              component={Link}
              to={`/product/${product.slug}`}
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "#333",
                fontSize: "15px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "44px",
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
              mt={"5px"}
              mb={"5px"}
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
                  {Math.trunc(product.price)} EGP
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={"bold"}
                >
                  {Math.trunc(product.price)} EGP
                </Typography>
              )}
              <Typography
                variant="body2"
                color="text.primary"
                fontWeight={"bold"}
              >
                {product.hasDiscount && product.discountRate
                  ? Math.trunc(
                      product.price -
                        (product.price * product?.discountRate) / 100,
                    ) + " EGP"
                  : null}
              </Typography>
            </Stack>
            <Button
              className="btn-add-to-cart"
              disabled={!product.inStock}
              onClick={onAddItemToCart}
              sx={{
                position: "relative",
                width: "100%",
                height: "36px",
                borderRadius: "35px",
                opacity: {
                  xs: 1,
                  lg: 0,
                },
                bgcolor: "primary.main",
                color: "#fff",
                overflow: "hidden",
                mt: "5px",
                transition: "all 0.3s ease",
                transitionDelay: {
                  xs: "0s",
                  lg: "0.07s",
                },
                "&:hover": {
                  bgcolor: "primary.light",
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
                <Check
                  className="icon"
                  sx={{
                    position: "absolute",
                    fontSize: "20px",
                    transform: "translateY(100%)",
                    opacity: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ) : (
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
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default memo(ProductCard);
