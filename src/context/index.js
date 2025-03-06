"use client";
import { createContext, useState } from "react";

export const UserContext = createContext(null);
export default function UserState({ children }) {
  const [editUserId, setEditUserId] = useState(null);
  return (
    <UserContext.Provider value={(setEditUserId, editUserId)}>
      {children}
    </UserContext.Provider>
  );
}
