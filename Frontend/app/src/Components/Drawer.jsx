import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import Contacts from '@material-ui/icons/Contacts';
import Loyalty from '@material-ui/icons/Loyalty';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "Black",
    fontSize: "20px",
  },
  icon: {
    color: "white"
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText>
              <Link to="/about" className={classes.link}>About</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Loyalty />
            </ListItemIcon>
            <ListItemText>
              <Link to="/about" className={classes.link}>Productos</Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;