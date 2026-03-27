import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { SOFTWAREDATA } from "../data/softwareData";
import ProductCard from "./ProductCard";
import CustomPagination from "./CustomPagination";

const SoftwareProductsList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = SOFTWAREDATA.slice(startIndex, endIndex);
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
          count={Math.ceil(SOFTWAREDATA.length / itemsPerPage)}
          page={page}
          setPage={setPage}
        />
      </Box>
    </Box>
  );
};
export default SoftwareProductsList;
