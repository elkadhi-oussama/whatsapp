import React, { useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";
import { setConversation } from "../../server/api";
import { UserContext } from "../context/UserProvider";
const useStyles = makeStyles({
  component: {
    height: 40,
    display: "flex",
    padding: "13px 0",
    cursor: "pointer",
  },
  displayPicture: {
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: "50%",
    padding: "0 14px",
  },
  container: {
    display: "flex",
  },
  timestamp: {
    fontSize: 12,
    marginLeft: "auto",
    color: "#00000099",
    marginRight: 20,
  },
  text: {
    display: "block",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14,
  },
});

const Text = ({ user }) => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);
  const setUser = async () => {
    setPerson(user);
    setConversation({ senderId: account.googleId, receiverId: user.googleId });
  };
  return (
    <Box className={classes.component} onClick={() => setUser()}>
      <Box>
        <img
          src={user.imageUrl}
          alt="userImage"
          className={classes.displayPicture}
        />
      </Box>
      <Box>
        <Typography> {user.name} </Typography>
      </Box>
    </Box>
  );
};

export default Text;
