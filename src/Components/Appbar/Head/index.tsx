import React, { Component } from "react";
import { Box, Grid, Drawer, IconButton } from "@mui/material";
import "./index.css";

import { GiHamburgerMenu } from "react-icons/gi";
import Appbar from "..";
//
interface IProps {}

interface IState {
  mobileOpen: boolean;
}

export default class Head extends Component<IProps, IState> {
  state: IState = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState((pre) => ({ mobileOpen: !pre.mobileOpen }));
  };

  render() {
    const { mobileOpen } = this.state;
    return (
        <Box>
      <Box className="home-page-container">
        <Box className="home-page-nav-side-bar-container">
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Appbar />
          </Box>
          <Box sx={{ height: "100%" }}>
            <Box className="home-page-nav">
              <IconButton
                sx={{ display: { md: "none" } }}
                onClick={this.handleDrawerToggle}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: 85,
                  }}
                >
                  <GiHamburgerMenu color="#fff" />
                  <GiHamburgerMenu color="#fff" />
                </Box>
              </IconButton>
              <Box className="home-page-nav"></Box>
            </Box>
            <Box className="home-page-content-container">
              <Grid container spacing={3}></Grid>

              <Grid container spacing={3}></Grid>
            </Box>
          </Box>
        </Box>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box" },
            }}
          >
            <Appbar />
          </Drawer>
        </Box>
      </Box>

      


    
   
      </Box>
    );
  }
}
