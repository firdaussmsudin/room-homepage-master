import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Box,
  Button,
  styled,
  IconButton,
  Drawer,
  Stack,
  bottomNavigationActionClasses,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../theme/theme";

const MenuButton = styled(Button)({
  textTransform: "lowercase",
  margin: "0 10px",
  borderBottom: "3px solid transparent",
  borderRadius: "0",
  position: "relative",
  disableRipple: true,
  "&:hover::after": {
    content: '""',
    position: "absolute",
    left: "3",
    bottom: "0",
    width: "20px",
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.up("xs")]: {
    margin: "0 5px",
  },
});

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "0 0 0 0" }}
    >
      <Toolbar sx={{ marginRight: "40px" }}>
        <IconButton
          color="primary"
          // onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
          onClick={() => {
            setMobileMenu(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"top"}
          open={mobileMenu}
          onClose={() => {
            setMobileMenu(false);
          }}
        >
          <Stack direction="row" sx={{ display: { xs: "flex", md: "none" } }}>
            <CloseIcon
              sx={{ m: "50px 5% 50px 20px" }}
              onClick={() => {
                setMobileMenu(false);
              }}
            />
            <MenuButton variant="text" color="secondary">
              home
            </MenuButton>
            <MenuButton variant="text" color="secondary">
              shop
            </MenuButton>
            <MenuButton variant="text" color="secondary">
              about
            </MenuButton>
            <MenuButton variant="text" color="secondary">
              contact
            </MenuButton>
          </Stack>
        </Drawer>
        <Typography
          color="primary"
          variant="h1"
          sx={{ margin: { xs: "auto", sm: "0" } }}
        >
          room
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <MenuButton variant="text" color="primary">
            home
          </MenuButton>
          <MenuButton variant="text" color="primary">
            shop
          </MenuButton>
          <MenuButton variant="text" color="primary">
            about
          </MenuButton>
          <MenuButton variant="text" color="primary">
            contact
          </MenuButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
