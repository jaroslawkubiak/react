import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser, removeUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector(state => {
    return state.users; // { data: isLoading, error:null;}
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={5} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data.</div>;
  } else {
    content = data.map(user => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="mt-3 flex flex-row justify-between items-center bg-slate-500 rounded text-black">
        <h1 className="m-2 ml-4 text-xl text-slate-200 rounded">Users</h1>

        <Button
          success
          loading={isCreatingUser}
          className="border-0 m-2 rounded"
          onClick={handleUserAdd}
        >
          + Add User
        </Button>

        {creatingUserError && "Error creating user"}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
