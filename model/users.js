const User = require("./schemas/user");

const findById = async (id) => {
  return await User.findOne({ _id: id });
};

const findByEmail = async (email) => {
  return await User.findOne({ email });
};

const findByVerifyTokenEmail = async (token) => {
  return await User.findOne({ verifyToken: token });
};

const create = async (userOptions) => {
  const user = new User(userOptions);
  return await user.save();
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

const getCurrentUser = async (id) => {
  return await User.findOne({ _id: id }, "email");
};

// const updateAvatar = async (id, avatar) => {
//   return await User.updateOne({ _id: id }, { avatar });
// };

// cloudinary
const updateAvatar = async (id, avatar, idCloudAvatar = null) => {
  return await User.updateOne({ _id: id }, { avatar, idCloudAvatar });
};

const updateVerifyToken = async (id, verify, verifyToken) => {
  return await User.updateOne(
    { _id: id },
    { verify, verifyToken: verifyToken }
  );
};

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
  getCurrentUser,
  updateAvatar,
  updateVerifyToken,
  findByVerifyTokenEmail,
};
