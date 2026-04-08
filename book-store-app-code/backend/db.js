  import mongoose from "mongoose";
  import dotenv from "dotenv";

  dotenv.config();

  const URL = process.env.MongoDBURL;
  console.log(URL)

  const connectToMongoDB = async () => {

      // const connectionParams = {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // };
      
      try {
        await mongoose.connect(URL);
        console.log("✅ Connected to MongoDB");
      } catch (error) {
        console.error("❌ Could not connect to MongoDB", error);
        process.exit(1); // Exit app if DB is critical
      }
    
  };


  export default connectToMongoDB;
