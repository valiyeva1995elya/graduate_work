const mongoose = require("mongoose");
const { AccountSchema, UniversitySchema } = require("./Schemas.js");

const AccountModel = mongoose.model("Account", AccountSchema);
const UniversityModel = mongoose.model("University", UniversitySchema);

module.exports = {
    AccountModel,
    UniversityModel,
}
