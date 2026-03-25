import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FOOTERLINKS, SOCIALMEDIAICONS, USEFULLINKS } from "../data";
import type { INAVBARDATA, ISOCIALDATA, IUSEFULLINKS } from "../interfaces";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box component={"footer"} bgcolor={"#000"} mb={0} py={"20px"}>
        <Box className={"container"}>
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              alignItems: {
                xs: "flex-start",
                lg: "flex-start",
              },
            }}
            justifyContent={"space-between"}
          >
            <Stack className="info" direction={"column"} flex={1} gap={"20px"}>
              <Box
                component={"img"}
                width={180}
                height={100}
                src="/images/logo.webp"
              />
              <Typography color="#FFFFFFCC" variant="body1">
                At PRINTRADO Bookstore, we believe that books are the main
                resource for effective learning.
              </Typography>
            </Stack>
            <Stack className="quick-links" direction={"column"} flex={1}>
              <Typography variant="h5" color="primary.main" fontWeight={700}>
                Quick links
              </Typography>
              <List>
                {FOOTERLINKS.map((item: INAVBARDATA) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      disableRipple
                      component={Link}
                      to={item.path}
                      sx={{
                        textAlign: "left",
                        transition: "all 0.3s ease",
                        color: "#FFFFFF99",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        sx={{
                          margin: 0,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Stack>
            <Stack className="useful-links" direction={"column"} flex={1}>
              <Typography variant="h5" color="primary.main" fontWeight={700}>
                Quick links
              </Typography>
              <List>
                {USEFULLINKS.map((item: IUSEFULLINKS) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      disableRipple
                      component={Link}
                      to={"/"}
                      sx={{
                        textAlign: "left",
                        transition: "all 0.3s ease",

                        color: "#FFFFFF99",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        sx={{
                          margin: 0,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Stack>
            <Stack className="social-links" direction={"column"} flex={1}>
              <Typography variant="h5" color="primary.main" fontWeight={700}>
                Social links
              </Typography>
              <Stack
                direction={"row"}
                flexWrap={"wrap"}
                gap={"10px"}
                mt={"32px"}
                width={"200px"}
              >
                {SOCIALMEDIAICONS.map((item: ISOCIALDATA) => {
                  const Icon = item.icon;
                  return (
                    <IconButton
                      key={item.id}
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        bgcolor: "#ffffff4d",
                        color: "#fff",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: item.color,
                        },
                      }}
                    >
                      <Icon size={20} />
                    </IconButton>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Box pt={"20px"}>
            <Typography variant="body1" color="#ffffff99" align="center">
              2026 Made with{" "}
              <Box component="span" sx={{ color: "red" }}>
                ❤️
              </Box>{" "}
              by{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 500,
                  color: "primary.main",
                  "&:hover": { textDecoration: "none" },
                }}
              >
                Mohamed Ayman
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
