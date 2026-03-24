import { useState, type ChangeEvent } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const data = [
  { type: "category", label: "Clean Code" },
  { type: "product", label: "Clean Ruby" },
  { type: "product", label: "Clean Agile" },
];

export default function SimpleSearch() {
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
      type="search"
      placeholder="Search..."
      value={inputValue}
      onChange={handleChange}
      sx={{
        minWidth: "550px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",
          backgroundColor: "#eee",
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
      }}
    />
  );
}
