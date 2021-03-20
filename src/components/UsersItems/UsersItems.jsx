import UserItem from "./UserItem/UserItem";
import style from "./UsersItems.module.scss";

export default function UsersItems({ users }) {
  return (
    <div className={style.UsersItems}>
      {users.map( (user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}
