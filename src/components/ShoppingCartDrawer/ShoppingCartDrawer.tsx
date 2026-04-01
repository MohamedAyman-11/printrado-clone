import { ProductionQuantityLimits } from "@mui/icons-material";
import { Box, Divider, Drawer, List, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { NavLink } from "react-router-dom";
import type { IProduct } from "../../interfaces";
import { Fragment } from "react/jsx-runtime";
import ShoppingCartDrawerFooter from "./ShoppingCartDrawerFooter";
import ShoppingCartDrawerHeader from "./ShoppingCartDrawerHeader";
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
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
      role="presentation"
    >
      <List
        disablePadding
        sx={{
          flexGrow: 1,
          overflow: "auto",
          minHeight: 0,

          "&::-webkit-scrollbar": {
            width: "8px",
            borderRadius: 0,
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "0px",
            transition: "background-color 0.3s ease",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#999",
          },
        }}
      >
        {cartProductsList.map((product: IProduct) => (
          <Fragment key={product.slug}>
            <DrawerProductCard
              product={product}
              onClick={toggleDrawer(false)}
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
              width: "350px",
              py: "20px",
              zIndex: (theme) => theme.zIndex.modal,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            },
          },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <ShoppingCartDrawerHeader toggleDrawer={toggleDrawer} />
        <Divider />
        {/* {DrawerList} */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
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
        <ShoppingCartDrawerFooter toggleLShoppingDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};
export default ShoppingCartDrawer;
