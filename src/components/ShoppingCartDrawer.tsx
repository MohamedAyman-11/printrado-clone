import { Clear, ProductionQuantityLimits } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { NavLink } from "react-router-dom";
import type { IProduct } from "../interfaces";
import { Fragment } from "react/jsx-runtime";
import DrawerProductCard from "./DrawerProductCard";

interface IProps {
  open: boolean;
  toggleDrawer: (value: boolean) => () => void;
}
const ShoppingCartDrawer = ({ open, toggleDrawer }: IProps) => {
  /* Get Cart Products Form Store */
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
  const DrawerList = (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {cartProductsList.map((product: IProduct) => (
          <Fragment key={product.slug}>
            <DrawerProductCard product={product} />
            <Divider
              sx={{
                my: "10px",
              }}
            />
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        slotProps={{
          paper: {
            sx: {
              width: "360px",
              py: "20px",
              zIndex: (theme) => theme.zIndex.modal,
            },
          },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Stack
          pb={"10px"}
          px={"10px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h6"
            component={"h6"}
            sx={{
              color: "#242424",
              fontWeight: "bold",
            }}
          >
            Shopping cart
          </Typography>
          <Button
            onClick={toggleDrawer(false)}
            disableRipple
            sx={{
              color: "#333",
              transition: "all 0.3s ease",
              backgroundColor: "transparent",
              fontSize: "15px",
              gap: "1px",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                color: "#777",
              },
              "& .MuiButton-startIcon": {
                margin: 0,
              },
            }}
            startIcon={<Clear />}
          >
            <Typography fontWeight={700}>Close</Typography>
          </Button>
        </Stack>
        <Divider />
        <Box>
          {cartProductsList.length ? (
            DrawerList
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              py={"35px"}
            >
              <ProductionQuantityLimits
                sx={{
                  fontSize: "85px",
                  mx: "auto",
                  mb: "20px",
                  textAlign: "center",
                  color: "#00000012",
                  display: "block",
                }}
              />
              <Typography
                variant="body1"
                color="#242424"
                fontWeight={700}
                mb={"20px"}
              >
                No products in the cart.
              </Typography>
              <NavLink
                className={"go-to-shop"}
                onClick={toggleDrawer(false)}
                to={"/"}
                style={{}}
              >
                Return To Shop
              </NavLink>
            </Box>
          )}
        </Box>
        {/* {DrawerList} */}
      </Drawer>
    </div>
  );
};
export default ShoppingCartDrawer;
