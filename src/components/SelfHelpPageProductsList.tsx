import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { HomeData } from "../data/homePageData";
import CustomPagination from "./ProductDetails/CustomPagination";
import ProductCard from "./ProductCard";

const SelfHelpProductsList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredProducts = HomeData.filter(
    (item) => item.category === "Self-Help",
  );
  const currentItems = filteredProducts.slice(startIndex, endIndex);
  return (
    <Box
      component="section"
      sx={{
        mt: "3px",
        py: 8,
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
  );
};

export default SelfHelpProductsList;
