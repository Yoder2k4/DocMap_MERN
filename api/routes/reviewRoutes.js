const express = require('express');
const { addComment } = require('../controllers/reviewControllers');
const router = express.Router();

router.route('/comments/:userId/:doctorId').post(addComment);
