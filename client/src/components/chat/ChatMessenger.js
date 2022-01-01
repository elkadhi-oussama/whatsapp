import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Box } from "@material-ui/core";
import Header from "./Header";
import Messanger from "./Messanger";
import { getConversation } from "../../server/api";
import { AccountContext } from "../context/AccountProvider";
const ChatMessenger = () => {
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.googleId]);

  return (
    <Box>
      <Header />
      <Messanger conversation={conversation} />
    </Box>
  );
};

export default ChatMessenger;
