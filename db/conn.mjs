import { MongoClient } from 'mongodb';

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString);

async function connectToDatabase() {
  let conn;

  try {
    conn = await client.connect();
    console.log('Successfully connected to Mongo');
  } catch (err) {
    console.log(err);
  }

  let db = conn.db('sample_training');
  return db;
}

// Export the function or use it directly in your code
export default connectToDatabase;