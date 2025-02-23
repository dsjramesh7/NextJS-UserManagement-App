"use client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { addNewUserAction } from "@/actions";

const AddNewUser = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );
  // console.log(addNewUserFormData);

  const handleSaveDisabled = () => {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  };

  // adding the data from form
  const handleAddNewUserAction = async () => {
    const result = await addNewUserAction(addNewUserFormData);
    console.log(result);
  };
  return (
    <div>
      <Button
        onClick={() => setOpenDialog(true)}
        className="bg-red-300 text-white"
      >
        Add New User
      </Button>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
          setAddNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
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
                  onChange={(e) => {
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: e.target.value,
                    });
                  }}
                  className="col-span-3 text-red-500"
                />
              </div>
            ))}
            <DialogFooter>
              <Button
                className="bg-yellow-500 disabled:opacity-55"
                disabled={!handleSaveDisabled()}
                type="submit"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
