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

const DrawerProductCard = ({ product }: { product: IProduct }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          disableRipple
          component={NavLink}
          to={`/product/${product.slug}`}
          sx={{
            fontSize: "14px",
            background: "transparent",
            transition: "all 0.3s ease",
            "&:hover .MuiTypography-root.MuiTypography-body1 ": {
              color: "#777 ",
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
              <Stack display={"flex"} direction={"row"} alignItems={"center"}>
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
                  {product.hasDiscount && product.discountRate
                    ? Math.trunc(
                        product.price -
                          (product?.discountRate / 100) * product.price,
                      )
                    : product.price}
                </Typography>
              </Stack>
            </ListItemText>
            <IconButton
              size="small"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
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
