const mongoose = require("mongoose");
const Users = require("../models/auth.model");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    const allUserDetails = [];
    allUsers.forEach((users) => {
      allUserDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
      });
    });

    res.status(200).json({
      success: true,
      message: "Successfully fetched users...",
      allUserData: allUserDetails,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Error fetching user data ${error.message}`,
    });
  }
};

module.exports = { getAllUsers };
