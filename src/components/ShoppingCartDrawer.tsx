import { Clear } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

interface IProps {
  open: boolean;
  toggleDrawer: (value: boolean) => () => void;
}
const ShoppingCartDrawer = ({ open, toggleDrawer }: IProps) => {
  // const DrawerList = (
  //   <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
  //     <List>
  //       {NAVBARDATA.map((item: INAVBARDATA) => (
  //         <Fragment key={item.id}>
  //           <ListItem disablePadding>
  //             <ListItemButton
  //               disableRipple
  //               component={NavLink}
  //               to={item.path}
  //               sx={{
  //                 fontSize: "14px",
  //                 background: "transparent",
  //                 transition: "all 0.3s ease",
  //                 "&:hover": {
  //                   backgroundColor: "transparent",
  //                   color: "primary.main",
  //                 },
  //               }}
  //             >
  //               <ListItemText primary={item.title} />
  //             </ListItemButton>
  //           </ListItem>
  //           <Divider />
  //         </Fragment>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <div>
      <Drawer
        slotProps={{
          paper: {
            sx: {
              width: "360px",
              py: "20px",
            },
          },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Stack
          pb={"10px"}
          px={"10px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h6"
            component={"h6"}
            sx={{
              color: "#242424",
              fontWeight: "bold",
            }}
          >
            Shopping cart
          </Typography>
          <Button
            onClick={toggleDrawer(false)}
            disableRipple
            sx={{
              color: "#333",
              transition: "all 0.3s ease",
              backgroundColor: "transparent",
              fontSize: "15px",
              gap: "1px",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                color: "#777",
              },
              "& .MuiButton-startIcon": {
                margin: 0,
              },
            }}
            startIcon={<Clear />}
          >
            <Typography fontWeight={700}>Close</Typography>
          </Button>
        </Stack>
        <Divider />
        {/* {DrawerList} */}
      </Drawer>
    </div>
  );
};
export default ShoppingCartDrawer;
