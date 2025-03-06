import UserState from "@/context";

const CommanLayout = ({ children }) => {
  return <UserState>{children}</UserState>;
};

export default CommanLayout;
