import React, { useEffect } from "react";
import { getUsers } from "../../server/api.js";
import { Box, makeStyles } from "@material-ui/core";
import { useState, useContext } from "react";
import Text from "./Text";
import { AccountContext } from "../../components/context/AccountProvider.js";
const useStyles = makeStyles({
  component: {
    overflow: "overlay",
    height: "81vh",
  },
  divider: {
    margin: "0 0 0 67px",
    backgroundColor: "#F2F2F2",
  },
});

const Conversation = ({ text }) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      const detail = await getUsers();
      const dataUser = detail.data;
      const filterData = dataUser.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );

      setUsers(filterData);
    };
    fetchData();
  }, [text]);
  return (
    <>
      <Box className={classes.component}>
        {users.map(
          (user) => user.googleId !== account.googleId && <Text user={user} />
        )}
      </Box>
    </>
  );
};

export default Conversation;
