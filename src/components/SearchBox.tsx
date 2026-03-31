import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import Fuse from "fuse.js";
import { Search } from "@mui/icons-material";
import { HomeData } from "../data/homePageData";
import SearchResultCard from "./SearchResultCard";
import { useNavigate } from "react-router-dom";
import SearchBoxEndIcons from "./SearchBoxEndIcons";

const SearchBox = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);
  const fuse = useMemo(() => {
    return new Fuse(HomeData, {
      keys: ["title"],
      threshold: 0.2,
    });
  }, []);
  const filteredResults = useMemo(() => {
    return fuse.search(inputValue.trim()).map((result) => result.item);
  }, [fuse, inputValue]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        boxRef.current &&
        !boxRef.current.contains(event.target as Node) &&
        inpRef.current &&
        !inpRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* Handlers */
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inpValue = e.target.value;
    setInputValue(inpValue);
    if (inpValue.length >= 3) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const onFocusHandler = () => {
    if (inputValue.length >= 3) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const onSearchHandler = () => {
    navigate(`/search?q=${encodeURIComponent(inputValue)}`);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          lg: "500px",
          xl: "600px",
        },
        position: "relative",
      }}
    >
      <TextField
        ref={inpRef}
        autoComplete="off"
        type="search"
        placeholder="Search for books..."
        value={inputValue}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onKeyDown={(e: KeyboardEvent) => {
          if (
            e.key === "Enter" &&
            inputValue.trim() !== "" &&
            filteredResults.length > 0
          ) {
            onSearchHandler();
            setOpen(false);
          }
        }}
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
            "& .MuiOutlinedInput-input ": {
              px: inputValue ? 4 : "0",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #333",
            },

            "&.Mui-focused:hover": {
              backgroundColor: "#fff",
            },
          },

          "& .MuiOutlinedInput-root:hover": {
            backgroundColor: "#dfdfdf",
          },
        }}
        InputProps={{
          startAdornment: !inputValue && (
            <InputAdornment position="start">
              <Search sx={{ color: "gray", ml: 1 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <SearchBoxEndIcons
              open={open}
              inputValue={inputValue}
              setInputValue={setInputValue}
              onSearchHandler={onSearchHandler}
              setOpen={setOpen}
            />
          ),
        }}
      />
      {/* Render filtered results */}
      {open && inputValue.trim().length >= 3 && (
        <Box
          ref={boxRef}
          sx={{
            width: "100%",
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
                onClick={() => {
                  setInputValue("");
                  setOpen(false);
                }}
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
