import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { Component } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import batman from '../Assets/batman.svg'
import secb from '../Assets/secb.svg'
import MovieIcon from '@mui/icons-material/Movie';
export default class Body extends Component {
  render() {
    return (
      <Box >
        <Card sx={{ backgroundColor: "hsla(341, 6%, 16%, 1)",maxWidth:'30rem' }}>
          <CardContent sx = {{textAlign:'center'}}>
            <Button startIcon={<AutoStoriesIcon />} sx = {{margin:'10px'}}>Stories</Button>
            <Button startIcon={<MovieIcon/>}  sx = {{margin:'10px'}}>Reels</Button>
            <Box sx = {{borderStyle:"dotted"}}></Box>
            <img src = {batman} style={{margin:'3px'}}/>
            <img src = {secb} style={{margin:'3px'}}/>
            <img src = {secb} style={{margin:'3px'}}/>
            {/* <img src = {secb} style={{margin:'3px'}}/> */}

          </CardContent>
        </Card>
      </Box>
    );
  }
}
