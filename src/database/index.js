import { PASSWORD, USERNAME } from "@/utils/constants";
import mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://${USERNAME}:${PASSWORD}@usermanagementapp.l1x2t.mongodb.net/`;
  mongoose
    .connect(url)
    .then(() => console.log("DataBase Connected Sucessfully"))
    .catch((error) => {
      console.log(error);
    });
};

export default connectToDB;
