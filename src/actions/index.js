"use server";
import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

// Add new user action
export const addNewUserAction = async (formData, pathTorevalidate) => {
  // console.log("formData", formData);
  try {
    await connectToDB();
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      revalidatePath(pathTorevalidate);
      return {
        success: true,
        message: "User created successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Try again later1",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! Try again later2",
    };
  }
};

//fetch user action
export const fetchUserAction = async () => {
  try {
    await connectToDB();
    const listOfUsers = await User.find({});
    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! Try again later2",
    };
  }
};

//delete user action
export const deleteUserAction = async (currentUserId, pathTorevalidate) => {
  try {
    await connectToDB();
    const deletedUser = await User.findByIdAndDelete(currentUserId);
    if (deletedUser) {
      revalidatePath(pathTorevalidate);
      return {
        success: true,
        message: "User deleted Successfully",
      };
    } else {
      return {
        success: false,
        message: "Couldn't able to delete user try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong while deleing...",
    };
  }
};

//edit user action
export const editUserAction = async () => {
  try {
    await connectToDB();
    const getUserId = await User.findByIdAndUpdate();
    if (getUserId) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: "User Id not found",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};
