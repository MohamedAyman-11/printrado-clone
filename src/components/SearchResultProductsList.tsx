import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HomeData } from "../data/homePageData";
import Fuse from "fuse.js";
import { Alert, Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import CustomPagination from "../components/ProductDetails/CustomPagination";
const SearchResultProductsList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const fuse = useMemo(() => {
    return new Fuse(HomeData, {
      keys: ["title"],
      threshold: 0.2,
    });
  }, []);
  const filteredResults = useMemo(() => {
    return fuse.search(query.trim()).map((result) => result.item);
  }, [fuse, query]);
  const currentItems = filteredResults.slice(startIndex, endIndex);
  return (
    <>
      {filteredResults.length ? (
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
                <Grid
                  size={{ xs: 6, md: 4, lg: 3, xl: 2.4 }}
                  key={product.slug}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <CustomPagination
              count={Math.ceil(filteredResults.length / itemsPerPage)}
              page={page}
              setPage={setPage}
            />
          </Box>
        </Box>
      ) : (
        <Box height={"50vh"}>
          <Box className="container">
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              mx={"auto"}
            >
              <Box
                component={"img"}
                src="/images/no_items.svg"
                sx={{
                  width: "350px",
                  height: "350px",
                  mx: "auto",
                }}
              />
              <Alert
                variant="filled"
                severity="warning"
                sx={{
                  color: "#fff",
                  bgcolor: "primary.main",
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                  },
                  py: 1.5,
                  mt: 1,
                  borderRadius: "10px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                No products were found matching your selection. Please try again
                with different keywords.
              </Alert>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default SearchResultProductsList;
