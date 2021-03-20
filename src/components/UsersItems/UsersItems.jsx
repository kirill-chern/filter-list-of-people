import UserItem from "./UserItem/UserItem";
import style from "./UsersItems.module.scss";

export default function UsersItems({usersData: { inputData, users } }) {
  return (
    <div className={style.UsersItems}>
      {users.map( (user, index) => (
        <UserItem key={index} user={user} inputData = {inputData}/>
      ))}
    </div>
  );
}
