const express = require('express');
const { createMessage, getAllMessages, deleteMessage } = require('../controllers/messageController');
// const { verifyToken, isAdmin } = require('../middlewares/auth');

const router = express.Router();

router.post('/', createMessage);
router.get('/',  getAllMessages);
router.delete('/:id',  deleteMessage);

module.exports = router;