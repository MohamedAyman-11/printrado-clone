import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import QuantityBox from "./QuantityBox";
import { useAppDispatch } from "../../app/store";
import { removeItemFromCart } from "../../app/features/cart/cartSlice";
import type { IProduct } from "../../interfaces";

const ProductDisplay = () => {
  const dispatch = useAppDispatch();
  const cartProductsList = useAppSelector((state) => state.cart.cartProducts);
  const onClickToRemove = (product: IProduct) => {
    dispatch(removeItemFromCart(product));
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "10px",
          "&.MuiPaper-root": {
            boxShadow: "0 0 3px #ebebeb",
          },
        }}
      >
        <Table
          sx={{
            minWidth: "initial",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: "10px",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  textTransform: "uppercase",
                  color: "#242424",
                  width: "10px",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  textTransform: "uppercase",
                  color: "#242424",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                Product
              </TableCell>
              <TableCell
                sx={{
                  textTransform: "uppercase",
                  color: "#242424",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
                align="left"
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  textTransform: "uppercase",
                  color: "#242424",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
                align="left"
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  textTransform: "uppercase",
                  color: "#242424",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
                align="left"
              >
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProductsList.map((product) => (
              <TableRow
                key={product.slug}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    color: "#242424",
                    padding: "8px",
                  }}
                  component="th"
                  scope="row"
                >
                  <Button
                    onClick={() => onClickToRemove(product)}
                    sx={{
                      cursor: "pointer",
                      color: "inherit",
                      transition: "all 0.3s ease",
                      borderRadius: "50%",

                      minWidth: "0",
                      "&:hover svg": {
                        color: "#777",
                      },
                    }}
                  >
                    <Close
                      fontSize="small"
                      sx={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Button>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    padding: "10px 12px",
                  }}
                >
                  <Box
                    component={"img"}
                    src={product.img}
                    alt={product.title}
                    sx={{
                      height: "90px",
                      width: "80px",
                      borderRadius: "6px",
                    }}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    color: "#242424",
                    padding: "10px 12px",
                  }}
                  align="left"
                >
                  <Typography
                    component={Link}
                    to={`/product/${product.slug}`}
                    sx={{
                      color: "#242424",
                      fontWeight: 700,
                      fontSize: "15px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        color: "#777",
                      },
                    }}
                  >
                    {product.title}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    color: "#242424",
                    padding: "10px 12px",
                  }}
                  align="left"
                >
                  <Typography
                    sx={{
                      color: "#777",
                      fontWeight: 500,
                      fontSize: "15px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.price} EGP
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <QuantityBox product={product} />
                </TableCell>
                <TableCell
                  sx={{
                    color: "#242424",
                    padding: "10px 12px",
                  }}
                  align="left"
                >
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                  >
                    {product.price * product.quantity} EGP
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ProductDisplay;
