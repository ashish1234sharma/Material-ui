import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

import React from "react";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
            <ListItemButton disablePadding>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 1" secondary='secondary text' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
        <ListItemButton disablePadding>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary='secondary text'  />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
        <ListItemButton disablePadding>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary='secondary text'  />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
