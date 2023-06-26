const mongoose = require("mongoose");
const cities = require("./cities");
// places and decsriptors deconstructed from seedhelpers file
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  // every time seedDB is function, existing data in the db will be deleted
  await Campground.deleteMany({});
  // for loop to create 50 random campgrounds
  for (let i = 0; i < 300; i++) {
    //   random number generator for camp location
    const random1000 = Math.floor(Math.random() * 1000);
    //   random number generator for camp name
    const sample = (array) => array[Math.floor(Math.random() * array.length)];
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6487242da2279ddbbc075f2c",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dtsed2emw/image/upload/v1686846587/YelpCamp/berqvydyrxeansvjxoxa.jpg",
          filename: "YelpCamp/berqvydyrxeansvjxoxa",
        },
        {
          url: "https://res.cloudinary.com/dtsed2emw/image/upload/v1686846601/YelpCamp/xcdhngvpe6obrbetq8pd.jpg",
          filename: "YelpCamp/xcdhngvpe6obrbetq8pd",
        },
      ],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium saepe, minima velit vel voluptatibus, dolore porro eligendi sunt similique explicabo aspernatur nesciunt deleniti sequi autem nulla aliquid distinctio adipisci quidem.",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
    });
    await camp.save();
  }
};

// mongoose connection will close when seedDB runs
seedDB().then(() => {
  mongoose.connection.close();
});
