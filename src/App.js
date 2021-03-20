import "./App.css";
import UsersItems from "./components/UsersItems/UsersItems";
import UsersFilter from "./components/UsersFilter/UsersFilter";

function App() {
  const users = [
    {
      name: "Александр",
      lastname: "Кислицкий",
      age: 12,
      sex: "m",
    },
    {
      name: "Диана",
      lastname: "Кислицкая",
      age: 35,
      sex: "f",
    },
  ];
  return (
    <div className="App">
      <UsersFilter />
      <UsersItems users = {users}/>
    </div>
  );
}

export default App;
