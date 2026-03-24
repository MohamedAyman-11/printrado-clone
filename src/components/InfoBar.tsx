import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Divider, Icon, Stack } from "@mui/material";
import { Phone } from "@mui/icons-material";

const InfoBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1010100d",
          boxShadow: "none",
        }}
      >
        <Box className="container">
          <Stack
            py={"6px"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{ flexGrow: 1 }}
              color="text.primary"
            >
              The 1st Technology & Business bookstore in Egypt
            </Typography>
            <Stack direction={"row"} gap={"15px"}>
              <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
                <Icon sx={{ color: "#4f4f4f" }}>
                  <Phone sx={{ width: 20, height: 20 }} />
                </Icon>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ flexGrow: 1 }}
                  color="#4f4f4f"
                >
                  01234567890
                </Typography>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ height: "15px", my: "auto" }}
              />
              <Button
                sx={{
                  bgcolor: "customColor.light",
                  color: "text.secondary",
                  borderRadius: "30px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Free shipping for all orders of EGP 2,000
              </Button>
            </Stack>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
};
export default InfoBar;
