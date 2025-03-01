import { PASSWORD, USERNAME } from "@/utils/constants";
import * as mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://${USERNAME}:${PASSWORD}@usermanageapphere.epcmv.mongodb.net/`;
  mongoose
    .connect(url)
    .then(() => console.log("DataBase Connected Sucessfully"))
    .catch((error) => {
      console.log("Database is failed");
      console.log(error);
    });
};

export default connectToDB;
