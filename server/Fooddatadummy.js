import mongoose from "mongoose";
import Food from "./models/Food.js"; // Ensure the correct path to your Food model

const dummyFoodData = [
  {
    name: "Margherita Pizza",
    desc: "Classic Margherita with fresh basil and mozzarella.",
    img: "https://example.com/images/margherita.jpg",
    price: {
      org: 8.99,
      mrp: 10.99,
      off: 2,
    },
    category: ["Pizza", "Vegetarian"],
    ingredients: ["Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"],
  },
  {
    name: "Pepperoni Pizza",
    desc: "Delicious pizza topped with pepperoni and mozzarella.",
    img: "https://example.com/images/pepperoni.jpg",
    price: {
      org: 9.99,
      mrp: 12.99,
      off: 3,
    },
    category: ["Pizza", "Non-Vegetarian"],
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
  },
  {
    name: "Caesar Salad",
    desc: "Crispy romaine lettuce with Caesar dressing.",
    img: "https://example.com/images/caesar_salad.jpg",
    price: {
      org: 6.99,
      mrp: 8.99,
      off: 1,
    },
    category: ["Salad", "Vegetarian"],
    ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese"],
  },
];

const insertDummyData = async () => {
  try {
    await mongoose.connect("mongodb+srv://singhvishal6203650586:vishal1234@cluster0.tk30k.mongodb.net/La-vire-pizza?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Insert dummy food data
    await Food.insertMany(dummyFoodData);
    console.log("Dummy data inserted successfully.");
  } catch (err) {
    console.error("Error inserting dummy data:", err);
  } finally {
    mongoose.connection.close();
  }
};

insertDummyData();
