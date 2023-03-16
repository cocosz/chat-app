import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { SimpleGrid } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      
      <Box id="golu" display="flex" alignItems="space-between" flexDirection="row" w="100%" h="91.5vh" p="20px" margin="20px">
      {user && <MyChats fetchAgain={fetchAgain} />}
     
   {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
   
   </Box>
   
    </div>
  );
};

export default Chatpage;
