import {
  Badge,
  badgeClasses,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BreadCrumb from "./BreadCrumb";
import { useLocation, useParams } from "react-router-dom";
import { HomeData } from "../data/homePageData";
import {
  BlockOutlined,
  Check,
  FavoriteBorderOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addItemToCart } from "../app/features/cart/cartSlice";
import { addItemToWishList } from "../app/features/wishList/wishListSlice";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CustomTabs from "./Tabs";
import ProductDetailsAccordion from "./ProductDetailsAccordion";
import RelatedProducts from "./RelatedProducts";

const FavBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -6px;
    right: 0px;
  }
`;
const ProductDetailsCard = () => {
  /* ** States ** */
  const [inputValue, setInputValue] = useState("1");
  /* ** Hooks ** */
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const params = useParams();
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  /* ** Checks ** */
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  /* ** Get Data From Store ** */
  const wishListProducts = useAppSelector(
    (state) => state.wishList.wishListProducts,
  );
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  const selectedProductSlug = params.slug;
  const selectedProduct = HomeData.filter(
    (product) => product.slug.toLocaleLowerCase() === selectedProductSlug,
  )[0];
  /* ** Checks ** */
  const inCart = cartProducts.find(
    (item) => item.slug === selectedProduct.slug,
  );
  const inWishListProducts = wishListProducts.find(
    (item) => item.slug === selectedProduct.slug,
  );

  /* ** Handlers ** */
  const onAddItemToCart = () => {
    dispatch(
      addItemToCart({
        ...selectedProduct,
        quantity: Number(inputValue),
      }),
    );
  };
  const onAddItemToWishList = () => {
    dispatch(addItemToWishList(selectedProduct));
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          mt: "3px",
          py: 8,
          backgroundImage: "url(/images/background.webp) ",
          backgroundColor: "#fff",
        }}
      >
        <Box className="container">
          <BreadCrumb
            categoryPath={`/${selectedProduct.category.toLocaleLowerCase().replaceAll(" ", "-")}`}
            category={`${selectedProduct.category}`}
            title={`${selectedProduct.title}`}
          />
          <Box py={"30px"}>
            {/* Info */}
            <Stack
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
              alignItems={"flex-start"}
              gap={"40px"}
            >
              {/* Product Image */}
              <Box
                component={"img"}
                src={selectedProduct.img}
                sx={{
                  maxWidth: "392px",
                  height: "518px",
                  borderRadius: "10px",
                  width: {
                    xs: "90%",
                    sm: "100%",
                    md: "50%",
                  },
                  mx: {
                    xs: "auto",
                  },
                }}
              />
              <Box flex={1}>
                {/* Product Title */}
                <Typography
                  variant="h1"
                  color="#333333"
                  sx={{
                    fontSize: {
                      xs: "21px",
                      md: "34px",
                    },
                    lineHeight: "1.2",
                    fontWeight: 700,
                    textAlign: {
                      xs: "center",
                      md: "start",
                    },
                  }}
                >
                  {selectedProduct.title}
                </Typography>
                {/* Product Price */}
                <Stack
                  mt={"10px"}
                  direction={"row"}
                  alignItems={"center"}
                  gap={"10px"}
                  sx={{
                    justifyContent: {
                      xs: "center",
                      md: "start",
                    },
                  }}
                >
                  {selectedProduct.hasDiscount &&
                  selectedProduct.discountRate ? (
                    <Typography
                      color="#BBBBBB"
                      sx={{
                        textDecoration: "line-through",
                        fontSize: {
                          xs: "17px",
                          md: "25px",
                        },
                      }}
                    >
                      {Math.trunc(selectedProduct.price)} EGP
                    </Typography>
                  ) : (
                    <Typography
                      color="primary.main"
                      fontWeight={"bold"}
                      sx={{
                        fontSize: {
                          xs: "18px",
                          md: "29px",
                        },
                      }}
                    >
                      {Math.trunc(selectedProduct.price)} EGP
                    </Typography>
                  )}
                  <Typography
                    color="primary.main"
                    fontWeight={"bold"}
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "29px",
                      },
                    }}
                  >
                    {selectedProduct.hasDiscount && selectedProduct.discountRate
                      ? Math.trunc(
                          selectedProduct.price -
                            (selectedProduct.price *
                              selectedProduct?.discountRate) /
                              100,
                        ) + " EGP"
                      : null}
                  </Typography>
                </Stack>
                {/* If Exists In Stock */}
                {selectedProduct.inStock ? (
                  <Typography
                    align="center"
                    mx={"auto"}
                    variant="body1"
                    color="initial"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mt={"10px"}
                    gap={"2.5px"}
                    sx={{ fontWeight: 600, color: "#333" }}
                  >
                    <Check sx={{ color: "primary.main", fontSize: "20px" }} />
                    In stock
                  </Typography>
                ) : (
                  <Typography
                    align="center"
                    mx={"auto"}
                    variant="body1"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mt={"10px"}
                    gap={"2.5px"}
                    sx={{ fontWeight: 600, color: "error.light" }}
                  >
                    <BlockOutlined
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                    Sold Out
                  </Typography>
                )}
                {/* Actions  */}
                <Box
                  mt={"20px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"30px"}
                  pb={"30px"}
                  flexWrap={"wrap"}
                >
                  {/* Cart  */}
                  <Box
                    flex={"1 1 auto"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"20px"}
                    flexBasis={{
                      xs: "100%",
                      lg: "auto",
                    }}
                  >
                    {/* Quantity */}
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      sx={{
                        width: "fit-content",
                      }}
                    >
                      <input
                        className="qty-btn"
                        type="button"
                        disabled={Number(inputValue) <= 1}
                        value={"-"}
                        onClick={() =>
                          setInputValue((prev) => {
                            const num = Number(prev);
                            return num > 1 ? String(num - 1) : "1";
                          })
                        }
                      />
                      <input
                        min={1}
                        className="qty-inp"
                        type="number"
                        value={inputValue}
                        onKeyDown={(e) => {
                          if (
                            e.key === "ArrowDown" &&
                            Number(inputValue) <= 1
                          ) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          let value = e.target.value;
                          if (value === "") {
                            setInputValue("");
                            return;
                          }
                          let num = Number(value);
                          if (num < 1) {
                            setInputValue("1");
                            return;
                          }
                          setInputValue(String(num));
                        }}
                      />
                      <input
                        type="button"
                        value={"+"}
                        onClick={() =>
                          setInputValue((v) => {
                            const value = Number(v);
                            return String(value + 1);
                          })
                        }
                        className="qty-btn"
                      />
                    </Stack>
                    {/* Add To Cart */}
                    <Button
                      className="add-to-cart-btn"
                      disabled={!selectedProduct.inStock}
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
                  {/* Add To Wish List */}
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    onClick={onAddItemToWishList}
                    sx={{
                      cursor: "pointer",
                      width: "fit-content",
                      color: "#333333",
                      transition: "all 0.3s ease",
                      textTransform: "none",
                      bgcolor: "transparent",
                      fontSize: "15px",
                      fontWeight: 600,
                      userSelect: "none",
                      mx: {
                        xs: "auto",
                        md: 0,
                      },
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#767676",
                      },
                      "&:hover svg": {
                        bgcolor: "transparent",
                        color: "#767676",
                      },
                      "&:hover .MuiBadge-badge svg.MuiSvgIcon-root ": {
                        color: "#fff",
                      },
                    }}
                  >
                    <IconButton
                      sx={{
                        mr: inWishListProducts ? "5px" : "0px",
                        color: "#333333",
                        transition: "all 0.3s ease",
                      }}
                      disableRipple
                    >
                      <FavoriteBorderOutlined
                        sx={{ fontSize: "25px", transition: "all 0.3s ease" }}
                      />
                      {inWishListProducts && (
                        <FavBadge
                          badgeContent={
                            <Check
                              sx={{
                                fontSize: "10px",
                                transition: "all 0.3s ease",
                              }}
                            />
                          }
                          overlap="circular"
                          sx={{
                            "& .MuiBadge-badge": {
                              backgroundColor: "primary.main",
                              color: "white",
                              fontSize: "12px",
                              fontWeight: "bold",
                              width: "18px",
                              height: "18px",
                              borderRadius: "50%",
                            },
                          }}
                        />
                      )}
                    </IconButton>
                    <Typography fontWeight={600}>
                      {inWishListProducts
                        ? "Remove from wishlist"
                        : "Add to wishlist"}
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
                {/* Accordion And Tabs  */}
                <Box
                  pt={"30px"}
                  pb={"10px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={{
                    flexDirection: {
                      xs: "column",
                      lg: "row",
                    },
                    gap: "25px",
                  }}
                >
                  <Typography
                    display={"flex"}
                    alignItems={"center"}
                    variant="body1"
                    component={"span"}
                    sx={{
                      color: "#333",
                      fontWeight: 600,
                      fontSize: "15px",
                      lineHeight: 0,
                    }}
                  >
                    Category:
                    <Typography
                      ml={"3px"}
                      sx={{
                        color: "#777",
                        fontSize: "15px",
                        lineHeight: 0,
                      }}
                    >
                      {selectedProduct.category}
                    </Typography>
                  </Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      variant="body1"
                      component={"p"}
                      sx={{
                        color: "#333",
                        fontWeight: 600,
                        fontSize: "16px",
                        mr: "3px",
                        lineHeight: 0,
                      }}
                    >
                      Share:
                    </Typography>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                      <FaFacebookF className="soc" size={15} />
                      <FaXTwitter className="soc" size={15} />
                      <FaLinkedinIn className="soc" size={15} />
                      <FaWhatsapp className="soc" size={15} />
                    </Box>
                  </Box>
                </Box>
                {isLarge && <CustomTabs />}
                {isSmall && <ProductDetailsAccordion />}
              </Box>
            </Stack>
          </Box>
          <RelatedProducts product={selectedProduct} />
        </Box>
      </Box>
    </>
  );
};
export default ProductDetailsCard;
