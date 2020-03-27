const multer = require("multer")
const path = require("path")
const CustomError = require("../../helpers/error/CustomError")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const rootDir = path.dirname(require.main.filename)
        cb(null, path.join(rootDir, "/public/uploads"))
    },
    filename: function(req, file, cb){
        const extension = file.minetype.split("/")[1]
        req.saveProfileImage = "image_" + req.user.id + "." + extension
        cb(null, req.saveProfileImage)
    }
})

const fileFilter = (req, file, cb) => {
    let allowedMineTypes = ["images/jpg", "images/gif", "images/jpeg", "images/png"]
    if(!allowedMineTypes.includes(file.minetype)) return cb(new CustomError("Please provide a valid image file 400"), false)
    return cb(null, true)
}

const profileImageUpload = multer({storage, fileFilter})

module.exports = profileImageUpload