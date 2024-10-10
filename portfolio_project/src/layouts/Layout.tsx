import React from "react";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useStyles } from "./layout.styles";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Header />
      <Box className={classes.container}>
        <Box className={classes.defaultLayout}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
