import {
  ListItemButton,
  ListItem,
  Divider,
  List,
  Drawer,
  Box,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import type { INAVBARDATA } from "../../../interfaces";
import { NAVBARDATA } from "../../../data";

interface IProps {
  open: boolean;
  toggleDrawer: (value: boolean) => () => void;
}
const LinksDrawer = ({ open, toggleDrawer }: IProps) => {
  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {NAVBARDATA.map((item: INAVBARDATA) => (
          <Fragment key={item.id}>
            <ListItem disablePadding>
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
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 600,
                      fontSize: "14px",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export default LinksDrawer;
