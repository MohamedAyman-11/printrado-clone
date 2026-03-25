import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { SECURITYDATA } from "../data/securityPageData";

const SecurityProductsList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = SECURITYDATA.slice(startIndex, endIndex);
  return (
    <Box
      component="section"
      sx={{
        mt: "3px",
        py: 12,
        backgroundImage: "url(./images/background.webp)",
        backgroundColor: "#777",
      }}
    >
      <Box className="container">
        <Grid container spacing={2}>
          {currentItems.map((product, index) => (
            <Grid size={{ xs: 6, md: 4, lg: 3, xl: 2.4 }} key={index}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover .product-img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Badge */}
                <Stack
                  sx={{
                    zIndex: (theme) => theme.zIndex.drawer - 1,
                    width: "calc(100% - 20px)",
                    position: "absolute",
                    top: "0px",
                    left: "10px",
                    right: "10px",
                  }}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  {product.hasDiscount && (
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: "30px",
                        py: 0.5,
                        px: 1,
                      }}
                    >
                      -{product.discountRate}%
                    </Typography>
                  )}
                  <IconButton
                    sx={{
                      ml: "auto",
                      "&:hover svg": {
                        transform: "scale(1.15)",
                        color: "error.light",
                      },
                    }}
                  >
                    <FavoriteBorderOutlined
                      sx={{
                        fontSize: "28px",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </IconButton>
                </Stack>
                {/* IMAGE */}
                <Box
                  component={Link}
                  to={"/"}
                  sx={{
                    width: "100%",
                    height: {
                      xs: "250px",
                      al: "300px",
                      xxl: "320px",
                      overflow: "hidden",
                    },
                  }}
                >
                  <Box
                    className="product-img"
                    component={"img"}
                    src={product.img}
                    width={"100%"}
                    height={"100%"}
                    sx={{
                      transition: "all 0.3s ease",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <Box
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#333",
                      fontSize: "15px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {product.title}
                  </Typography>
                  {/* PRICE */}
                  <Stack
                    mt={"10px"}
                    direction={"row"}
                    alignItems={"center"}
                    gap={"8px"}
                  >
                    {product.hasDiscount && product.discountRate ? (
                      <Typography
                        fontSize={"13px"}
                        color="#BBBBBB"
                        sx={{
                          textDecoration: "line-through",
                        }}
                      >
                        {product.price} EGP
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        color="primary.main"
                        fontWeight={"bold"}
                      >
                        {product.price} EGP
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      color="primary.main"
                      fontWeight={"bold"}
                    >
                      {product.hasDiscount && product.discountRate
                        ? product.price -
                          (product.price * product?.discountRate) / 100 +
                          " EGP"
                        : null}
                    </Typography>
                  </Stack>
                  <Button
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "40px",
                      borderRadius: "90px",
                      bgcolor: "primary.main",
                      color: "#fff",
                      overflow: "hidden",
                      mt: "10px",
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
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"40px"}
        >
          <Pagination
            count={Math.ceil(SECURITYDATA.length / itemsPerPage)}
            page={page}
            onChange={(event, value) => setPage(value)}
            shape="rounded"
            sx={(theme) => ({
              transition: "all 0.3s ease",
              "& .MuiButtonBase-root": {
                fontSize: "14px",
                color: "#242424",
                fontWeight: 700,
                margin: "2px",
              },
              "& .Mui-selected": {
                bgcolor: `${theme.palette.primary.main} !important`,
                color: "#fff !important",
              },
              "& .Mui-selected:hover": {
                bgcolor: `${theme.palette.primary.main} !important`,
                color: "#fff !important",
              },
              "& .MuiTouchRipple-root": {
                display: "none",
              },
              "& .Mui-disabled": {
                display: "none",
              },
            })}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "26px",
                  },
                }}
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SecurityProductsList;
