import axios from "axios";

const URL = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error about api for addUser", error);
  }
};
export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);

    return response;
  } catch (error) {
    console.log("Error about api for get users", error);
  }
};

export const setConversation = async (data) =>{
    try {
        await axios.post(`${URL}/conversation/add`, data)
    } catch (error) {
        console.log("Error we can't get Conversation" , error)
    }
}

export const getConversation = async (data) =>{
    try {
        let response = await axios.post(`${URL}/conversation/get`, data)
        return response
    } catch (error) {
        console.log("Error not can't message ", error)
    }
}

export const newMessage = async (data) =>{
  try {
    await axios.post(`${URL}/message/add`, data)
  } catch (error) {
    console.log("Error for New Message", error)
  }
}
export const getMessages = async (id) =>{
  
  try {
    console.log(id.data)
    let response= await axios.get(`${URL}/message/get/${id}`)
    
    return response.data
  } catch (error) {
    console.log("Error get Message", error)
  }
}
