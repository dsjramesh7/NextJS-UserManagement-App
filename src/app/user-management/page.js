import AddNewUser from "@/components/AddNewUser";

const UserManagementPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="p-20 max-w-6xl mx-auto">
        <div className="flex justify-between">
          <h1 className="">User Management</h1>
          <AddNewUser />
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
