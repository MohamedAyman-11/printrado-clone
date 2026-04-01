import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { NAVBARDATA } from "../../../data";
import type { INAVBARDATA } from "../../../interfaces";
const Navbar = () => {
  return (
    <>
      <nav>
        <Box className={"container"}>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {NAVBARDATA.map((item: INAVBARDATA) => (
              <ListItem disablePadding sx={{ width: "auto" }} key={item.id}>
                <ListItemButton
                  disableRipple
                  component={NavLink}
                  to={item.path}
                  sx={{
                    fontSize: "14px",
                    background: "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "text.primary",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    slotProps={{
                      primary: {
                        fontSize: "14px",
                        fontWeight: 600,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </nav>
    </>
  );
};
export default Navbar;
