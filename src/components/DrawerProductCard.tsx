import {
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import type { IProduct } from "../interfaces";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { useAppDispatch } from "../app/store";
import { removeItemFromCart } from "../app/features/cart/cartSlice";

const DrawerProductCard = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();
  const removeProductFromCart = () => {
    dispatch(removeItemFromCart(product));
  };
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          border: "1px solid #0000001b",
          transition: "all 0.3s ease",
          py: "15px",
          "&:last-of-type": {
            borderBottom: "none",
          },

          "&:first-of-type": {
            borderTop: "none",
          },
          "&:hover .MuiTypography-root.MuiTypography-body1 ": {
            color: "#777 ",
          },
          "&:hover": {
            backgroundColor: "#0000000a",
          },
        }}
      >
        <ListItemButton
          disableRipple
          component={NavLink}
          to={`/product/${product.slug}`}
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
            alignItems={"flex-start"}
            width={"100%"}
          >
            <ListItemAvatar>
              <Box
                component={"img"}
                alt={product.title}
                src={product.img}
                sx={{
                  minWidth: "65px",
                  maxWidth: "65px",
                }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                "& .MuiTypography-root.MuiTypography-body1  ": {
                  color: "#333",
                  fontWeight: 700,
                  display: "block",
                  transition: "all 0.3s ease",
                  fontSize: "15px",
                  flexGrow: 1,
                },
              }}
            >
              {product.title}
              <Stack
                display={"flex"}
                direction={"row"}
                alignItems={"center"}
                mt={"5px"}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#bbb",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  {product.quantity} x
                </Typography>
                <Typography
                  variant="h6"
                  color="primary.main"
                  fontWeight={700}
                  sx={{
                    fontSize: "16px",
                    ml: "5px",
                  }}
                >
                  {product.price}
                </Typography>
              </Stack>
            </ListItemText>
            <IconButton
              size="small"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeProductFromCart();
              }}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <Close
                sx={{
                  fontSize: "18px",
                }}
              />
            </IconButton>
          </Stack>
        </ListItemButton>
      </ListItem>
    </>
  );
};
export default DrawerProductCard;
