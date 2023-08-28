import React, { useState } from "react";
import {
  AppBar,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Logo from "../images/logo-1.png";
import { Button } from "@mui/material";

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.theme.palette.primary.light};
`;

// NavBar buttons
const NavbarButton = styled(Button)`
  color: ${(props) => props.theme.palette.primary.contrastText};
  margin: 10px;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

// Hamburger menu buttons
const StyledListItemText = styled(ListItemText)`
  color: ${(props) => props.theme.palette.primary.contrastText};
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.primary.light};
`;

const StyledDrawer = styled(Drawer)`
  width: 250px;
  background-color: primary;
`;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Neuigkeiten", path: "/news" },
    { id: 4, title: "Über uns", path: "/about" },
    { id: 3, title: "Kontakt", path: "/contact" },
  ];

  const renderLinks = () => {
    return navLinks.map((link) => (
      <Link to={link.path} key={link.id}>
        <NavbarButton color="primary">{link.title}</NavbarButton>
      </Link>
    ));
  };

  const renderDrawerLinks = () => {
    return navLinks.map((link) => (
      <ListItemButton key={link.id}>
        <Link
          to={link.path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <StyledListItemText primary={link.title} color="primary" />
        </Link>
      </ListItemButton>
    ));
  };

  return (
    <StyledContainer>
      <StyledAppBar position="static" elevation={0}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={Logo} alt="Logo" style={{ marginRight: "10px" }} />
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          <Hidden mdDown>{renderLinks()}</Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </StyledAppBar>
      <Hidden mdUp>
        <StyledDrawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
        >
          <div
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
            <List>{renderDrawerLinks()}</List>
          </div>
        </StyledDrawer>
      </Hidden>
    </StyledContainer>
  );
};

export default Navbar;
