const multer = require('multer')

module.exports = multer({
    upload: {
        storage: multer.memoryStorage()
    }
});