import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Autocomplete, Stack, TextField } from "@mui/material";
import SearchAutocomplete from "./Search";
import UserIcons from "./UserIcons";

const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Box className="container">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              component={"img"}
              src="/images/logo.webp"
              sx={{
                maxWidth: "350px",
                width: "180px",
                height: "100px",
                // objectFit: "contain",
              }}
            />
            {/* <Autocomplete
              sx={{ flexGrow: 1 }}
              freeSolo
              disableClearable
              options={["Ahmed", "Ai"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search input"
                  variant="outlined"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: "search",
                    },
                  }}
                />
              )}
            /> */}
            <SearchAutocomplete />
            <UserIcons />
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
};

export default MainAppBar;
