import mongoose from 'mongoose';
import { logger, env } from '@/config';

// Destructure the URI environment variable from '@/config'
const { uri } = env;

// Asynchronous function to connect to MongoDB
async function run() {
  try {
    // Attempt to connect to MongoDB using the URI
    await mongoose.connect(uri);

    // Log a success message upon successful connection
    logger.info('You successfully connected to MongoDB!');

    // Return the active MongoDB connection
    return mongoose.connection;
  } catch (error) {
    // Log an error message if the connection attempt fails
    logger.error('Error connecting to MongoDB:', error);
    // Rethrow the error to be handled by the caller
    throw error;
  }
}

export default run;
