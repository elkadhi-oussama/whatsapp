import express from "express";
import { addUser, getUsers } from "../controller/UserController.js";
import {newConversation, getConversation} from "../controller/ConversationController.js"
import {newMessage, getMessage} from "../controller/MessageController.js"
const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post('/conversation/add', newConversation)
route.post("/conversation/get", getConversation)
route.post("/message/add", newMessage)
route.get("/message/get/:id", getMessage)
export default route;
