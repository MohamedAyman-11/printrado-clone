import { Close, Search } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { memo } from "react";
interface IProps {
  open: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  onSearchHandler: () => void;
  setOpen: (value: boolean) => void;
}
const SearchBoxEndIcons = ({
  open,
  inputValue,
  setInputValue,
  onSearchHandler,
  setOpen,
}: IProps) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={0.4}
      >
        {open && (
          <IconButton
            onClick={() => {
              setInputValue("");
              setOpen(false);
            }}
            disableRipple
            sx={{
              padding: 0,
            }}
          >
            <Close
              fontSize="small"
              sx={{
                color: "#666",
                transition: "all 0.3s ease",
                fontSize: "20px",
                "&:hover": {
                  color: "#999",
                },
              }}
            />
          </IconButton>
        )}
        {inputValue.trim() && (
          <IconButton
            onClick={onSearchHandler}
            sx={{
              p: "10px",
              maxHeight: "initial",
              maxWidth: "initial",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#transparent",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#e4e4e4",
                boxShadow: "0 0 0 2px #e4e4e4",
              },
            }}
          >
            <Search sx={{ color: "gray", ml: 0 }} />
          </IconButton>
        )}
      </Stack>
    </>
  );
};
export default memo(SearchBoxEndIcons);
