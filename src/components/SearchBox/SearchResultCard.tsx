import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import type { IProduct } from "../../interfaces";
import { Link } from "react-router-dom";

interface IProps {
  product: IProduct;
  onClick: () => void;
}
const SearchResultCard = ({ product, onClick }: IProps) => {
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          transition: "all 0.3s ease",
          minHeight: "60px",
          "&:hover": {
            backgroundColor: "#0000000a",
          },
        }}
      >
        <ListItemButton
          disableRipple
          component={Link}
          to={`/product/${product.slug}`}
          onClick={onClick}
          sx={{
            fontSize: "14px",
            background: "transparent",
            transition: "all 0.3s ease",

            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            width={"100%"}
          >
            <ListItemAvatar
              sx={{
                minWidth: "50px",
                maxWidth: "50px",
                height: "100%",
              }}
            >
              <Box
                component={"img"}
                alt={product.title}
                src={product.img}
                sx={{
                  width: "100%",
                  height: "90%",
                }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                "& .MuiTypography-root.MuiTypography-body1  ": {
                  fontSize: "15px",
                  fontWeight: 500,
                },
              }}
              primary={product.title}
            />
            <ListItemText>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    textDecoration: product.hasDiscount
                      ? "line-through"
                      : "none",
                    opacity: product.hasDiscount ? 0.7 : 1,
                    fontSize: product.hasDiscount ? "14px" : "16px",
                    fontWeight: product.hasDiscount ? 500 : 600,
                  }}
                >
                  {product.price} EGP
                </Typography>
                {product.hasDiscount && product.discountRate && (
                  <Typography
                    variant="body1"
                    color="text.primary"
                    fontWeight={600}
                  >
                    {Math.trunc(
                      product.price -
                        (product.price * product.discountRate) / 100,
                    )}{" "}
                    EGP
                  </Typography>
                )}
              </Box>
            </ListItemText>
          </Stack>
        </ListItemButton>
      </ListItem>
    </>
  );
};
export default SearchResultCard;
