const { Schema } = require("mongoose");

const AccountSchema = new Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    age: Number,
    follows: [],
});
const UniversitySchema = new Schema({
    name: String,
    address: String,
    city: String,
    img: String,
    web_pages: String,
    email: String,
    description: String,
    public_private: String,
});

module.exports = {
    AccountSchema,
    UniversitySchema
};