import React, { Component } from "react";
import "./index.css";

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { GoHomeFill } from "react-icons/go";
import { BsSearch, BsArrowDownCircle } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { AiOutlinePlus, AiFillHeart } from "react-icons/ai";
import { IoMdWifi } from "react-icons/io";


//
interface IProps {
  navigate?:any
}

interface IState {
  selectedIndex: number;
}

 class Appbar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { selectedIndex } = this.state;
    const {navigate} = this.props
    return (
        <Box
          className="side-bar-container"
          sx={{ width: "100%", minWidth:250, maxWidth: 290, bgcolor: "transparent" }}
        >
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton>
          
            </ListItemButton>
          </List>
          <List component="nav" aria-label="main mailbox folders">
            {/* Home button */}
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => {this.handleListItemClick(event, 0);navigate('/')}}
            >
              <ListItemIcon>
                <GoHomeFill size={24} color="#fff" />
              </ListItemIcon>
              <ListItemText className="side-bar-list-item" primary="Home" />
            </ListItemButton>
            {/* Search button */}
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => {this.handleListItemClick(event, 1); navigate('/search')}}
            >
              <ListItemIcon>
                <BsSearch size={22} color="#fff" />
              </ListItemIcon>
              <ListItemText className="side-bar-list-item" primary="Search" />
            </ListItemButton>
            {/* Your library */}
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => this.handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <BiLibrary size={22} color="#fff" />
              </ListItemIcon>
              <ListItemText className="side-bar-list-item" primary="Your Library" />
            </ListItemButton>
          </List>

          <List component="nav" aria-label="main mailbox folders">
            {/* plus button */}
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => {this.handleListItemClick(event, 3);navigate("/playlist")}}
            >
              <ListItemIcon sx={{}}>
                <Box className="side-bar-icon-container side-bar-plus">
                  <AiOutlinePlus size={14} color="#000" />
                </Box>
              </ListItemIcon>
              <ListItemText className="side-bar-list-item " primary="Create Playlist" />
            </ListItemButton>
            {/* love button */}
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => {this.handleListItemClick(event, 4);navigate("/liked-songs")}}
            >
              <ListItemIcon>
                <Box className="side-bar-icon-container side-bar-love">
                  <AiFillHeart size={10} color="#fff" />
                </Box>
              </ListItemIcon>
              <ListItemText className="side-bar-list-item" primary="Liked Songs" />
            </ListItemButton>
            {/* wifi button */}
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => {this.handleListItemClick(event, 5)}}
            >
              <ListItemIcon>
                <Box className="side-bar-icon-container side-bar-wifi">
                  <IoMdWifi size={16} color="#159643" />
                </Box>
              </ListItemIcon>
              <ListItemText className="side-bar-list-item" primary="Your Episodes" />
            </ListItemButton>
          </List>
          {/* With out icons */}
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => this.handleListItemClick(event, 6)}
            >
              <ListItemText className="side-bar-list-item" primary="FAV" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => this.handleListItemClick(event, 7)}
            >
              <ListItemText
                className="side-bar-list-item"
                primary="Daily Mix 1"
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => this.handleListItemClick(event, 8)}
            >
              <ListItemText
                className="side-bar-list-item"
                primary="Discover Weekly"
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => this.handleListItemClick(event, 9)}
            >
              <ListItemText
                className="side-bar-list-item"
                primary="Malayalam"
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => this.handleListItemClick(event, 10)}
            >
              <ListItemText
                className="side-bar-list-item"
                primary="Dance / Electronix Mix"
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => this.handleListItemClick(event, 11)}
            >
              <ListItemText
                className="side-bar-list-item"
                primary="EDM / Popular"
              />
            </ListItemButton>
          </List>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => this.handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <BsArrowDownCircle size={20} color="#fff" />
              </ListItemIcon>
              <ListItemText className="side-bar-list-item" primary="Install App" />
            </ListItemButton>
          </List>
        </Box>
     
    );
  }
}

export default Appbar