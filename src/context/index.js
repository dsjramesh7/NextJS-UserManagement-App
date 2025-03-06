"use client";
import { addNewUserFormInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);
export default function UserState({ children }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );
  const [editUserId, setEditUserId] = useState(null);
  return (
    <UserContext.Provider
      value={{
        setEditUserId,
        editUserId,
        setAddNewUserFormData,
        addNewUserFormData,
        setOpenDialog,
        openDialog,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
