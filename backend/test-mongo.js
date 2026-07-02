const { MongoClient } = require("mongodb");
require("dotenv").config();

async function testConnection() {
  console.log("Testing MongoDB connection...");
  console.log("URI loaded:", process.env.MONGO_URI ? "YES" : "NO");

  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    console.log("✅ SUCCESS: Connected to MongoDB Atlas");
    await client.close();
  } catch (err) {
    console.error("❌ FAILED:");
    console.error(err);
  }
}

testConnection();