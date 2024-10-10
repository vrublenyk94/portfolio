import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Drawer from "./components/drawer";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./header.styles";
import { downloadCV } from "../../utils/downloadCV";

const Header: React.FC = () => {
  const location = useLocation();
  const [pages] = React.useState(["Home", "Projects", "About"]);
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useStyles();

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.header_wrapper}>
        <Link to="/home">
          <Box component="img" src={logo} alt="logo" />
        </Link>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              pages={pages}
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={toggleDrawer}
            />
          </>
        ) : (
          <>
            <Box>
              {pages.map((page) => {
                const isActive = location.pathname === `/${page.toLowerCase()}`;
                return (
                  <Button
                    key={page}
                    component={Link}
                    to={`/${page.toLowerCase()}`}
                    className={`${classes.header_buttons} ${
                      isActive ? classes.active_button : ""
                    }`}
                  >
                    {page}
                  </Button>
                );
              })}
            </Box>
            <Box>
              <Button className={classes.header_buttons} onClick={downloadCV}>
                CV
                <ArrowDownwardIcon />
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
