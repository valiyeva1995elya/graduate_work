const mongoose = require("mongoose");
const { AccountSchema, PostSchema, UniversitySchema } = require("./Schemas.js");

const AccountModel = mongoose.model("Account", AccountSchema);
const PostModel = mongoose.model("Post", PostSchema);
const UniversityModel = mongoose.model("University", UniversitySchema);

module.exports = {
    PostModel,
    AccountModel,
    UniversityModel,
}
