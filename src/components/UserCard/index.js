"use client";
import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { deleteUserAction } from "@/actions";
import { UserContext } from "@/context";

const UserCard = ({ id, firstName, email, lastName, address }) => {
  const {
    setAddNewUserFormData,
    addNewUserFormData,
    setOpenDialog,
    openDialog,
    setEditUserId,
    editUserId,
  } = useContext(UserContext);
  // console.log(addNewUserFormData);
  const handleDeleteUser = async (getCurrentUserId) => {
    const result = await deleteUserAction(getCurrentUserId, "/user-management");
    return result;
  };

  const HandleEditUser = async () => {
    setOpenDialog(true);
    setAddNewUserFormData({
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
    });
    setEditUserId(id);
  };
  return (
    <Card className="w-full max-w-sm p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {firstName} {lastName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Address:</strong> {address}
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="sm" onClick={HandleEditUser}>
            <Pencil className="w-4 h-4 mr-2" /> Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              handleDeleteUser(id);
            }}
          >
            <Trash className="w-4 h-4 mr-2" /> Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
