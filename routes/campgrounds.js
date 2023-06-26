const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../cloudinary/index");
const upload = multer({ storage });

const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, validateCampground, isAuthor } = require("../middleware");
const campgrounds = require("../controllers/campgrounds");

router
  .route("/")
  // campgrounds home page
  .get(catchAsync(campgrounds.index))
  //make new campground route
  .post(
    isLoggedIn,
    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.createCampground)
  );

//make new campground form page
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router
  .route("/:id")
  // campground show route
  .get(catchAsync(campgrounds.showCampground))
  //update campground route
  .put(
    isLoggedIn,
    isAuthor,
    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.updateCampground)
  )
  //delete campground route
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

//edit campground form page
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

module.exports = router;
