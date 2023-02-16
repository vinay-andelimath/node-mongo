const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);
// creating the database name

async function run() {
    const rent = client.db("rent");
    const myColl = rent.collection("rentalhomes");

    const doc = { name: "home", rent: 2000 };
    const result = await myColl.insertOne(doc);
    console.log(
        `A document was inserted with the _id: ${result}`,
    );

    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Establish and verify connection
        await client.db("rent").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


