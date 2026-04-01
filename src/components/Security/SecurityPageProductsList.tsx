import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ProductCard from ".././ProductCard";
import CustomPagination from ".././ProductDetails/CustomPagination";
import { HomeData } from "../../data/homePageData";
import { Helmet } from "react-helmet-async";

const SecurityProductsList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredProducts = HomeData.filter(
    (item) => item.category === "Security",
  );
  const currentItems = filteredProducts.slice(startIndex, endIndex);
  return (
    <>
      <Helmet>
        <title>Cybersecurity | Printrado</title>
      </Helmet>
      <Box
        component="section"
        sx={{
          mt: "3px",
          py: 5,
          backgroundImage: "url(/images/background.webp)",
          backgroundColor: "#fff",
        }}
      >
        <Box className="container">
          <Grid container spacing={2}>
            {currentItems.map((product) => (
              <Grid size={{ xs: 6, md: 4, lg: 3, xl: 2.4 }} key={product.slug}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <CustomPagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={page}
            setPage={setPage}
          />
        </Box>
      </Box>
    </>
  );
};

export default SecurityProductsList;
