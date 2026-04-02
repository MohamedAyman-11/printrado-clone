import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BreadCrumb from "../BreadCrumb";
import { useLocation, useParams } from "react-router-dom";
import { HomeData } from "../../data/homePageData";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItemToCart } from "../../app/features/cart/cartSlice";
import { addItemToWishList } from "../../app/features/wishList/wishListSlice";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CustomTabs from "./Tabs";
import ProductDetailsAccordion from "./ProductDetailsAccordion";
import RelatedProducts from "./RelatedProducts";
import ProductDetailsImg from "./ProductDetailsImg";
import ProductDetailsInfo from "./ProductDetailsInfo";
import ProductQuantity from "./ProductQuantity";
import AddToCartButton from "./AddToCartButton";
import AddToWishListButton from "./AddToWishListButton";
import { Helmet } from "react-helmet-async";
import NotFound from "../../pages/NotFound";

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
  /* ** Get Data From Store ** */
  const wishListProducts = useAppSelector(
    (state) => state.wishList.wishListProducts,
  );
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  const selectedProductSlug = params.slug;
  const selectedProduct = useMemo(() => {
    return HomeData.filter(
      (product) => product.slug.toLocaleLowerCase() === selectedProductSlug,
    )[0];
  }, [selectedProductSlug]);
  /* ** Checks ** */
  const inCart = useMemo(
    () => cartProducts.find((item) => item.slug === selectedProduct.slug),
    [cartProducts, selectedProduct],
  );
  const inWishListProducts = useMemo(
    () => wishListProducts.find((item) => item.slug === selectedProduct.slug),
    [wishListProducts, selectedProduct],
  );

  const onAddItemToCart = useCallback(() => {
    dispatch(
      addItemToCart({
        ...selectedProduct,
        quantity: Number(inputValue),
      }),
    );
  }, [dispatch, selectedProduct, inputValue]);
  const onAddItemToWishList = useCallback(() => {
    dispatch(addItemToWishList(selectedProduct));
  }, [dispatch, selectedProduct]);
  if (!selectedProduct) {
    return <NotFound />;
  }
  return (
    <>
      <Helmet>
        <title>
          {selectedProduct?.title
            ? selectedProduct.title + " | Printrado"
            : "Loading..."}
        </title>
      </Helmet>
      <Box
        component="section"
        sx={{
          mt: "3px",
          py: 5,
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
              <ProductDetailsImg img={selectedProduct.img} />
              <Box flex={1}>
                {/* Product Info */}
                <ProductDetailsInfo product={selectedProduct} />
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
                    <ProductQuantity
                      inputValue={inputValue}
                      setInputValue={setInputValue}
                    />
                    {/* Add To Cart */}
                    <AddToCartButton
                      disabled={!selectedProduct.inStock}
                      inCart={inCart ? true : false}
                      onAddItemToCart={onAddItemToCart}
                    />
                  </Box>
                  {/* Add To Wish List */}
                  <AddToWishListButton
                    inWishList={inWishListProducts ? true : false}
                    onAddItemToWishList={onAddItemToWishList}
                  />
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
                {!isLarge && <ProductDetailsAccordion />}
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
