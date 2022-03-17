import { useCallback, useState } from "react/cjs/react.development";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = useCallback((uName, uAge) => {
    setUserList((prevUsers) => [
      ...prevUsers,
      { username: uName, age: uAge, id: Math.random().toString() },
    ]);
  }, []);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
