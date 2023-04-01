import React from "react";
import {
  AppBar,
  Button,
  Container,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

import DrawerAppBar from "./Drawer";

const ResponsiveAppBar = ({ pages }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      sx={{ background: "#1E1F20", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            overflowY: { xs: "hidden" },
          }}
        >
          <Typography
            className="logo"
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              component="img"
              className="logo"
              sx={{
                width: "30%",
              }}
              src={`${process.env.PUBLIC_URL}/pic/logo.svg`}
            ></Typography>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.to}
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                key={page.name}
              >
                <Button
                  key={page.name}
                  sx={{
                    display: "block",
                    fontFamily: "Exo 2, sans-serif",
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    mx: 1,
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
        <DrawerAppBar
          pages={pages}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />{" "}
      </Container>
      <Box
        sx={{
          position: "relative",
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          height: { xs: "100px", sm: "120px" },
        }}
      >
        <IconButton
          size="large"
          aria-label="hamburger-menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="img"
          className="logo"
          sx={{
            width: { xs: "150px", sm: "180px" },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          src={`${process.env.PUBLIC_URL}/pic/logo.svg`}
        ></Typography>
      </Box>
    </AppBar>
  );
};

export default ResponsiveAppBar;
