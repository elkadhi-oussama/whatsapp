import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat as MessageIcon } from "@material-ui/icons";
import { AccountContext } from "../context/AccountProvider";
import { useContext } from "react";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import Drawer from "../drawer/InfoDrawer"
const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    display: "flex",
    padding: "10px 16px",
    alignItems: "center",
  },
  chatIcons: {
    marginLeft: "auto",
    display: "flex",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
});

const Header = () => {
    const [open, setOpen] = useState(false)
  const classes = useStyles();
  const { account } = useContext(AccountContext);
const toggleDrawer = () =>{
setOpen(true)
}

  return (
    <>
      <Box className={classes.header}>
        <img src={account.imageUrl} className={classes.avatar} onClick={()=>toggleDrawer()} />
        <Box className={classes.chatIcons}>
          <MessageIcon />
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer  open={open} setOpen = {setOpen} /> 
    </>
  );
};

export default Header;
