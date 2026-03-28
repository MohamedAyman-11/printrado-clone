import {
  Check,
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Badge,
  badgeClasses,
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import type { IProduct } from "../interfaces";
import { useAppDispatch } from "../app/store";
import { useAppSelector } from "../app/hooks";
import { addItemToCart } from "../app/features/cart/cartSlice";
import { addItemToWishList } from "../app/features/wishList/wishListSlice";
import { Link } from "react-router-dom";
interface IProps {
  product: IProduct;
}
const FavBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
    padding: 0;
    background-color: #ed9c4b;
  }
`;
const ProductCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  /* ** Get Data From Store ** */
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  const wishListProducts = useAppSelector(
    (state) => state.wishList.wishListProducts,
  );
  /* ** Checks ** */
  const inCart = cartProducts.find((item) => item.slug === product.slug);

  const inWishList = wishListProducts.find(
    (item) => item.slug === product.slug,
  );
  /* ** Handlers ** */
  const onAddItemToCart = () => {
    dispatch(addItemToCart(product));
  };
  const onAddItemToWishList = () => {
    dispatch(addItemToWishList(product));
  };
  return (
    <>
      <Box
        sx={{
          height: "454px",
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
          {product.inStock ? (
            product.hasDiscount && (
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
              }}
            >
              Sold Out
            </Typography>
          )}
          {inWishList ? (
            <Tooltip
              title="Remove from wishlist"
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
                onClick={onAddItemToWishList}
                sx={{
                  ml: "auto",
                  backgroundColor: "transparent",
                  "&:hover svg": {
                    transform: "scale(1.15)",
                  },
                }}
              >
                <FavBadge
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "primary.main",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "bold",
                      borderRadius: "50%",
                    },
                  }}
                  badgeContent={
                    <Check
                      sx={{
                        fontSize: "10px",
                        transition: "all 0.3s ease",
                      }}
                    />
                  }
                  color="secondary"
                >
                  <Favorite
                    sx={{
                      fontSize: "28px",
                      transition: "all 0.3s ease",
                      color: "error.light",
                      backgroundColor: "transparent",
                    }}
                  />
                </FavBadge>
              </IconButton>
            </Tooltip>
          ) : (
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
                onClick={onAddItemToWishList}
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
          )}
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
                {Math.trunc(product.price)} EGP
              </Typography>
            ) : (
              <Typography
                variant="body2"
                color="primary.main"
                fontWeight={"bold"}
              >
                {Math.trunc(product.price)} EGP
              </Typography>
            )}
            <Typography
              variant="body2"
              color="primary.main"
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
            disabled={!product.inStock}
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
    </>
  );
};
export default ProductCard;
