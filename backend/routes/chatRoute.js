const express = require("express");
const { getChat } = require("../controllers/chatController");
const router = express.Router();

router.route('/chat').post(getChat);

module.exports=router;

