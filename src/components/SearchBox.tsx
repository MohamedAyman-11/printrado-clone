import { memo, useMemo, useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import Fuse from "fuse.js";
import { Cancel, Search } from "@mui/icons-material";
import { HomeData } from "../data/homePageData";
import SearchResultCard from "./SearchResultCard";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const fuse = useMemo(() => {
    return new Fuse(HomeData, {
      keys: ["title"],
      threshold: 0.2,
    });
  }, []);
  const filteredResults = useMemo(() => {
    return fuse.search(inputValue).map((result) => result.item);
  }, [fuse, inputValue]);

  return (
    <Box
      sx={{
        minWidth: {
          xs: "100%",
          lg: "500px",
        },
        position: "relative",
      }}
    >
      <TextField
        autoComplete="off"
        type="search"
        placeholder="Search for books..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            backgroundColor: "#eee",
            transition: "all 0.3s ease",
            "& fieldset": {
              border: "none",
              transition: "all 0.3s",
            },
            "&.Mui-focused fieldset": {
              border: "1.5px solid #333",
            },
          },
          "& .MuiOutlinedInput-root:hover": {
            backgroundColor: "#dfdfdf",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "gray", ml: 1 }} />
            </InputAdornment>
          ),
          endAdornment: inputValue && (
            <IconButton onClick={() => setInputValue("")} disableRipple>
              <Cancel
                fontSize="small"
                sx={{
                  color: "#666",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#999",
                  },
                }}
              />
            </IconButton>
          ),
        }}
      />
      {/* Render filtered results */}
      {inputValue.length >= 3 && (
        <Box
          sx={{
            minWidth: {
              xs: "100%",
              lg: "500px",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ccc",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#999",
              },
            },
            background: "#fff none repeat scroll 0 0",
            position: "absolute",
            maxHeight: "600px",
            zIndex: (theme) => theme.zIndex.modal + 1,
            top: "60px",
            left: 0,
            height: "auto",
            borderRadius: "0 0 5px 5px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            overflowY: "auto",
            padding: "10px 0",
          }}
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((product) => (
              <SearchResultCard
                key={product.slug}
                product={product}
                onClick={() => setInputValue("")}
              />
            ))
          ) : (
            <Typography variant="body1" color="#777" px={"20px"} py={"5px"}>
              No results found
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
export default memo(SearchBox);
