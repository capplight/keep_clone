//mui drawer
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Drawer as MuiDrawer } from "@mui/material";

//components
import HeaderBar from "./HeaderBar";
import NavList from "./NavList";

const drawerWidth = 240;

//mui styles
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
// end of mui styles

//swipe drawer function from mui, on the left side of a screen
function SwipeDrawer() {
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderBar open={open} handleDrawer={handleDrawer} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <NavList />
      </Drawer>
    </Box>
  );
}

export default SwipeDrawer;
