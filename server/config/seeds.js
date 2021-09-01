const db = require("./connection");
const { User, Event, Category, Dish } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Fine Dining" },
    { name: "Casual Dining" },
  ]);

  console.log("categories seeded");

  await Dish.deleteMany();
  const dishes = await Dish.insertMany([
    {
      name: "Caskata Red Lobster Large Oval Rimmed Platter",
      description:
        "East meets West in this playful battle between these spirited crustaceans. Lobsters from both coasts sprawl across this generously sized porcelain oval platter, adding a graphic dose of seaside style to any table. Inspired by the New England clambakes we loved as kids, this is a platter worth fighting for!",
    },
    {
      name: "Quail Legs with Tamarind Glaze and Fig Chutney",
      description:
        "A gourmet plate featuring tangy glazed quail legs served with a freshly made fig chutney.",
    },
    {
      name: "Coffee With Milk And Sugar",
      description: "A gourmet Java coffee with lactose milk and brown sugar",
    },
  ]);
  console.log("dishes seeded");

  // await Event.deleteMany();

  // const events = await Event.insertMany([
  //   {
  //     date: new Date(),
  //     location: "11 Lexington Ave, New York, NY 10016",
  //     dishes: [dishes[0]._id],
  //     chefs: [chefs],
  //     category: categories[0]._id,
  //   },
  //   {
  //     date: new Date(),
  //     location: "11 Lexington Ave, New York, NY 10016",
  //     category: categories[1]._id,
  //     chefs: User[0]._id,
  //     dishes: [dishes[1]._id],
  //   },
  //   {
  //     date: new Date(),
  //     location: "5th Ave, New York, NY 10018",
  //     category: categories[1]._id,
  //     chefs: User[1]._id,
  //     dishes: [dishes[2]._id],
  //   },
  // ]);

  // console.log("events seeded");

  await User.deleteMany();

  await User.create({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Jerry",
    lastName: "smith",
    email: "jerry.smith@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
