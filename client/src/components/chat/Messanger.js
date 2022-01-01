import React, { useState, useContext, useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";
import Footer from "./Footer";
import { newMessage, getMessages } from "../../server/api";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    // height: 'calc(100% - 114px)',
    backgroundSize: "50%",
    background: "#ededed",
  },
  footer: {
    height: "55px",
    background: "#ededed",
    // position: 'absolute',
    width: "100%",
    // bottom: 0
  },
  component: {
    height: "70vh",
    overflowY: "scroll",
    width: "100%",
  },
  container: {
    padding: "1px 80px",
  },
});
const Messanger = ({ conversation }) => {
 
  const classes = useStyles();
  const [value, setValue] = useState();
  const [messages, setMessages] = useState([])
  const { account } = useContext(AccountContext);
  useEffect(() => {
   
    const getMessageDetails = async () => {
      let msg= await getMessages(conversation);
      
      setMessages(msg)
    };
    getMessageDetails();
  }, [conversation]);
  const sendText = async (e) => {
    let code = e.keyCode || e.which;
    if (!value) return;
    if (code === 13) {
      let message = {
        sender: account.googleId,
        conversationId: conversation.googleId,
        text: value,
      };
      await newMessage(message);
      setValue("");
    }
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.component}>
        { messages.map(msg =>(
          <Box>
            <p> {msg} </p>
          </Box>
        ))}
      </Box>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Box>
  );
};

export default Messanger;
