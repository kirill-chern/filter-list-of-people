import "./App.css";
import UsersItems from "./components/UsersItems/UsersItems";
import UsersFilter from "./components/UsersFilter/UsersFilter";
import { useEffect, useState } from "react";

function App() {
  const [usersData, setUsers] = useState({
    inputData: {},
    users: [],
  });
  useEffect(() => {
    fetch("https://venbest-test.herokuapp.com/")
      .then((response) => response.json())
      .then((response) =>
        setUsers((state) => ({ ...state, users: [...response] }))
      );
  }, []);
  console.log(usersData);
  return (
    <div className="App">
      <UsersFilter setInput={setUsers} />
      <UsersItems users={usersData.users} />
    </div>
  );
}

export default App;
