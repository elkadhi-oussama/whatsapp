import User from "../modal/User.js";

export const addUser = async (request, response) => {
  try {
    let exist = await User.findOne({ googleId: request.body.googleId });
    if (exist) {
      response.status(200).json("User already exists");
      return;
    }
    const newUser = new User(request.body);
    await newUser.save();
    response.status(200).json("User saved");
  } catch (error) {
    response.status(500).json(error);
  }
};
export const getUsers = async (request, response) => {
    try {
        const user = await User.find({});
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}
