import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/AddNewUser";
import UserCard from "@/components/UserCard";

const UserManagementPage = async () => {
  const getListOfAllUsers = await fetchUserAction();
  console.log(getListOfAllUsers);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex justify-center items-center">
      <div className="p-10 max-w-4xl w-full bg-gray-800 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
          <h1 className="text-3xl font-bold">User Management</h1>
          <AddNewUser />
        </div>
        <div className="space-y-4">
          {getListOfAllUsers?.data?.length > 0 ? (
            getListOfAllUsers.data.map((singleUser) => (
              <UserCard
                key={singleUser._id}
                firstName={singleUser.firstName}
                lastName={singleUser.lastName}
                email={singleUser.email}
                address={singleUser.address}
              />
            ))
          ) : (
            <p className="text-center text-gray-400">
              No Users Found. Create One!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
