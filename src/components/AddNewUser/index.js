"use client";
import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Dialog, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";

const AddNewUser = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );
  return (
    <div>
      <Button
        onClick={() => setOpenDialog(true)}
        className="bg-red-300 text-white"
      >
        Add New User
      </Button>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {addNewUserFormControls.map((controlItem) => (
              <div
                key={controlItem.name}
                className="grid grid-cols-4 items-center gap-4 mb-4"
              >
                <Label htmlFor="name" className="text-left">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  type={controlItem.type}
                  value={addNewUserFormData[controlItem.name]}
                  className="col-span-3"
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
