import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";
import CustomPagination from "./CustomPagination";
import { HomeData } from "../data/homePageData";

const DataProductsList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredProducts = HomeData.filter(
    (item) => item.category === "Data Science",
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
            <ProductCard key={product.slug} product={product} />
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

export default DataProductsList;
