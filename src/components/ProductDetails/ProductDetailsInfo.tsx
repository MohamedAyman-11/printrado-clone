import { BlockOutlined, Check } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import type { IProduct } from "../../interfaces";
import { memo } from "react";
interface IProps {
  product: IProduct;
}
const ProductDetailsInfo = ({ product }: IProps) => {
  return (
    <>
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
        {product.title}
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
        {product.hasDiscount && product.discountRate ? (
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
            {Math.trunc(product.price)} EGP
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
            {Math.trunc(product.price)} EGP
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
          {product.hasDiscount && product.discountRate
            ? Math.trunc(
                product.price - (product.price * product?.discountRate) / 100,
              ) + " EGP"
            : null}
        </Typography>
      </Stack>
      {/* If Exists In Stock */}
      {product.inStock ? (
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
    </>
  );
};
export default memo(ProductDetailsInfo);
