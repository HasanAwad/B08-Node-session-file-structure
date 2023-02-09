const express = require("express");
const router = express.Router();
const StudentsController = require("../controllers/StudentsController");
const checkAuth = require("../middleware/check-auth");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },

  filename: function (req, file, cb) {
    console.log(file);

    const { fieldname, originalname } = file;
    const date = Date.now();
    // filename will be: image-1345923023436343-filename.png
    const filename = `${fieldname}-${date}-${originalname}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

/* GET users listing. */
router.get("/", StudentsController.getAll);
router.get("/:id", StudentsController.get);
router.post("/", checkAuth, upload.single("image"), StudentsController.post);
router.put("/:id", checkAuth, StudentsController.put);
router.delete("/:id", checkAuth, StudentsController.delete);

module.exports = router;
