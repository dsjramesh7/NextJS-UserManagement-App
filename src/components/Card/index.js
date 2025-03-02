import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

const UserCard = ({ id, name, email, role, onEdit, onDelete }) => {
  return (
    <Card className="w-full max-w-sm p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Role:</strong> {role}
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="sm" onClick={() => onEdit(id)}>
            <Pencil className="w-4 h-4 mr-2" /> Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>
            <Trash className="w-4 h-4 mr-2" /> Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
