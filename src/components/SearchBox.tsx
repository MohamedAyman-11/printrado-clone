import { useState, type ChangeEvent } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Cancel, Search } from "@mui/icons-material";

const data = [
  { type: "category", label: "Clean Code" },
  { type: "product", label: "Clean Ruby" },
  { type: "product", label: "Clean Agile" },
];

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState<
    {
      type: string;
      label: string;
    }[]
  >([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const result = data.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredData(result);
  };

  return (
    <TextField
      autoComplete="off"
      type="search"
      placeholder="Search for books..."
      value={inputValue}
      onChange={handleChange}
      sx={{
        minWidth: {
          xs: "100%",
          lg: "500px",
        },
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
  );
};
export default SearchBox;
