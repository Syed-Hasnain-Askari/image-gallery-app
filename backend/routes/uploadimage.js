const express = require('express');
const router = express.Router();
const uploadImage = require('../controller/uploadImage');
router.post('/upload', uploadImage.upload.array('image', 2), uploadImage.uploadImageController);
router.get('/getimage-bycategory/:category', uploadImage.getImagesByCategory)
module.exports = router;
