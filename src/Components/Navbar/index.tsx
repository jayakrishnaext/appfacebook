import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HistoryIcon from "@mui/icons-material/History";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import fb from "../Assets/fb.svg";
import kohili from "../Assets/kohili.svg";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import GridViewIcon from "@mui/icons-material/GridView";
import { LiaFacebookMessenger } from "react-icons/lia";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import "./index.css";
import Body from "../Body";
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileOpe, setMobileOpe] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerToggl = () => {
    setMobileOpe(!mobileOpe);
  };
  const data = [
    { id: 0, text: "VaritKhili", icon: <img src={kohili} /> },
    {
      id: 1,
      text: "Friends",
      icon: <GroupIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 2,
      text: "Marketplace",
      icon: <StorefrontIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 3,
      text: "Most Recent",
      icon: <HistoryIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 4,
      text: "Groups",
      icon: <GroupsIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 5,
      text: "Watch",
      icon: <OndemandVideoIcon sx={{ fontSize: "25px", color: "white" }} />,
    },
    {
      id: 6,
      text: "See More",
      icon: <ExpandCircleDownIcon sx={{ fontSize: "29px", color: "white" }} />,
    },
  ];

  const drawer = (
    <Box sx={{ padding: "10px", backgroundColor: "#181820", height: "100vh" }}>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <img src={fb} />
        <OutlinedInput
          className="inputs"
          placeholder="Search"
          sx={{
            width: "70%",
            height: "40px",
            

            backgroundColor: "gray",
            "& fieldset": { border: "none" },
            marginTop: "-10px",
            borderRadius: "10px",
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
        />
      </Box>
      <Divider />

      <List>
        {data.map((tex, index) => (
          <ListItem key={tex.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{tex.icon}</ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={tex.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`, backgroundColor: "#181820" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Box className="display">
              <Box>
                <IconButton>
                  <HomeIcon
                    fontSize="large"
                    sx={{ color: "#fff", margin: "4px" }}
                  />
                </IconButton>
                <IconButton>
                  <VideoLibraryIcon
                    fontSize="large"
                    sx={{ color: "#fff", margin: "4px" }}
                  />
                </IconButton>
                <IconButton>
                  <StorefrontIcon
                    fontSize="large"
                    sx={{ color: "#fff", margin: "4px" }}
                  />
                </IconButton>
                <IconButton>
                  <GroupIcon
                    fontSize="large"
                    sx={{ color: "#fff", margin: "4px" }}
                  />
                </IconButton>
                <IconButton>
                  <VideogameAssetIcon
                    fontSize="large"
                    sx={{ color: "#fff", margin: "4px" }}
                  />
                </IconButton>
              </Box>
              <Box className="mobile-device">
                <IconButton>
                  <LiaFacebookMessenger color="#fff" className="message" />
                </IconButton>
                <IconButton>
                  <GridViewIcon sx={{ color: "#fff",  }} />
                </IconButton>
                <IconButton>
                  <CircleNotificationsIcon
                    sx={{ color: "#fff" }}
                    className="notifiaction"
                  />
                </IconButton>
                <IconButton>
                  <img src={kohili} className="kohili-image" />
                </IconButton>
              </Box>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggl}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpe}
          onClose={handleDrawerToggl}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` ,backgroundColor:'black'},
          
        }}
      >
        
        <Toolbar />
        
           <Box>
           <Body/>
           </Box> 
        
      </Box>
    </Box>
  );
}
