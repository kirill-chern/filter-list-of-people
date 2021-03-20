import "./App.css";
import UsersItems from "./components/UsersItems/UsersItems";
import UsersFilter from "./components/UsersFilter/UsersFilter";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch("https://venbest-test.herokuapp.com/")
      .then( response => response.json() )
      .then( response => setUsers([...response]) );
  });
  return (
    <div className="App">
      <UsersFilter />
      <UsersItems users = {users}/>
    </div>
  );
}

export default App;
