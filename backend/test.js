const { MongoClient } = require("mongodb");

const uri =
"mongodb+srv://arven_admin:arven007@arven-production.murkio5.mongodb.net/?retryWrites=true&w=majority&appName=arven-production";

async function run() {
  try {
    const client = new MongoClient(uri);

    await client.connect();

    console.log("✅ Connected");

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

run();