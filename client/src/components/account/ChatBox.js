import React from "react";
import { Dialog, Box, makeStyles, withStyles } from "@material-ui/core";
import Menu from "../Menu/Menu";
import ChatMessenger from "../chat/ChatMessenger";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    minWidth: 380,
  },
  rightComponent: {
    width: "70%",
    minWidth: 300,
    height: "100%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
  },
});
const style = {
  dialog: {
    marginTop: "12%",
    height: "95%",
    width: "91%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 0,
    boxShadow: "none",
    overflow: "hidden",
  },
};

const ChatBox = ({ classes }) => {
  const classStyle = useStyles();
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialog }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classStyle.component}>
        <Box className={classStyle.leftComponent}>
          <Menu />
        </Box>
        <Box className={classStyle.rightComponent}>
          {" "}
          <ChatMessenger />{" "}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
