import connectToDB from "@/database";
import User from "@/models/user";

// Add new user action
export const addNewUserAction = async (formData) => {
  try {
    await connectToDB();
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      return {
        success: true,
        message: "User created successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Try again later",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! Try again later",
    };
  }
};
