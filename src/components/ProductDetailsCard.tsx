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
} from "@mui/material";
import BreadCrumb from "./BreadCrumb";
import { useParams } from "react-router-dom";
import { HomeData } from "../data/homePageData";
import {
  Check,
  FavoriteBorderOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addItemToCart } from "../app/features/cart/cartSlice";
import { addItemToWishList } from "../app/features/wishList/wishListSlice";

const FavBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -6px;
    right: 0px;
  }
`;
const ProductDetailsCard = () => {
  const wishListProducts = useAppSelector(
    (state) => state.wishList.wishListProducts,
  );
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("1");
  const params = useParams();
  const selectedProductSlug = params.slug;
  const selectedProduct = HomeData.filter(
    (product) => product.slug.toLocaleLowerCase() === selectedProductSlug,
  )[0];

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
  const inWishListProducts = wishListProducts.find(
    (item) => item.slug === selectedProduct.slug,
  );
  console.log(inWishListProducts);

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
            <Stack direction={"row"} alignItems={"flex-start"} gap={"40px"}>
              {/* Product Image */}
              <Box
                component={"img"}
                src={selectedProduct.img}
                sx={{
                  width: "392px",
                  height: "518",
                  borderRadius: "10px",
                }}
              />
              <Box flex={1}>
                {/* Product Title */}
                <Typography
                  variant="h1"
                  color="#333333"
                  sx={{
                    fontSize: "34px",
                    lineHeight: "1.2",
                    fontWeight: 700,
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
                >
                  {selectedProduct.hasDiscount &&
                  selectedProduct.discountRate ? (
                    <Typography
                      fontSize={"25px"}
                      color="#BBBBBB"
                      sx={{
                        textDecoration: "line-through",
                      }}
                    >
                      {selectedProduct.price.toFixed(2)} EGP
                    </Typography>
                  ) : (
                    <Typography
                      fontSize={"29px"}
                      color="primary.main"
                      fontWeight={"bold"}
                    >
                      {selectedProduct.price.toFixed(2)} EGP
                    </Typography>
                  )}
                  <Typography
                    fontSize={"29px"}
                    color="primary.main"
                    fontWeight={"bold"}
                  >
                    {selectedProduct.hasDiscount && selectedProduct.discountRate
                      ? (
                          selectedProduct.price -
                          (selectedProduct.price *
                            selectedProduct?.discountRate) /
                            100
                        ).toFixed(2) + " EGP"
                      : null}
                  </Typography>
                </Stack>
                {/* Actions  */}
                <Box
                  mt={"20px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"30px"}
                  pb={"30px"}
                >
                  {/* Cart  */}
                  <Box
                    flex={"1 1 auto"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"20px"}
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
                      onClick={onAddItemToCart}
                      sx={{
                        flex: "1 1 auto",
                        position: "relative",
                        width: "100%",
                        height: "40px",
                        borderRadius: "90px",
                        bgcolor: "primary.main",
                        color: "#fff",
                        overflow: "hidden",
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
                    <Typography>
                      {inWishListProducts
                        ? "Remove from wishlist"
                        : "Add to wishlist"}
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ProductDetailsCard;
