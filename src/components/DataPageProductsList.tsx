import { Box, Grid } from "@mui/material";
import { HomeData } from "../data/homePageData";
import { useState } from "react";
import { DataScienceData } from "../data/dataPageData";
import ProductCard from "./ProductCard";
import CustomPagination from "./CustomPagination";

const DataProductsList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = DataScienceData.slice(startIndex, endIndex);
  return (
    <Box
      component="section"
      sx={{
        mt: "3px",
        py: 12,
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
          count={Math.ceil(DataScienceData.length / itemsPerPage)}
          page={page}
          setPage={setPage}
        />
      </Box>
    </Box>
  );
};

export default DataProductsList;
