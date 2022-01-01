import React, { useState } from "react";
import Conversation from "./Conversation";
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <Header />
      <Search setText={setText} />
      <Conversation text={text} />
    </div>
  );
};

export default Menu;
