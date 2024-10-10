import React from "react";
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";
import { useStyles } from "../header.styles";
import { downloadCV } from "../../../utils/downloadCV";

interface IDrawerProps {
  pages: string[];
  isDrawerOpen: boolean;
  toggleDrawer: (open: boolean) => void;
}

const Drawer: React.FC<IDrawerProps> = ({
  pages,
  isDrawerOpen,
  toggleDrawer,
}) => {
  const { classes } = useStyles();
  return (
    <MuiDrawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          {pages.map((page) => {
            const isActive = location.pathname === `/${page.toLowerCase()}`;
            return (
              <ListItem
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                className={`${classes.header_buttons} ${
                  isActive ? classes.active_button : ""
                }`}
              >
                <ListItemText primary={page} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          <ListItem className={classes.header_buttons} onClick={downloadCV}>
            <ListItemText primary="Get a CV" />
            <ArrowDownwardIcon />
          </ListItem>
        </List>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
