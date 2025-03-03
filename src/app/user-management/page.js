import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/AddNewUser";
import UserCard from "@/components/UserCard";

const UserManagementPage = async () => {
  const getListOfAllUsers = await fetchUserAction();
  console.log(getListOfAllUsers);
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="p-20 max-w-6xl mx-auto">
        <div className="flex justify-between">
          <h1 className="">User Management</h1>
          <AddNewUser />
        </div>
        <div className="">
          {getListOfAllUsers &&
          getListOfAllUsers?.data &&
          getListOfAllUsers?.data?.length > 0 ? (
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
            <p>No Users Found Create One</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
