const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const accountsRouter = require("./routers/accountsRouter");
const postsRouter = require("./routers/postsRouter");
const universityRouter = require("./routers/universityRouter");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://valiyeva1995elya:BXCHAKUhQxxQBPuQ@cluster0.bktnxmw.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err){
        console.log("ERROR", err);
    }else{
        console.log("start server");
        app.use("/accounts", accountsRouter);
        app.use("/posts", postsRouter);
        app.use("/universities", universityRouter);
        app.listen(8080);
    }
}); 