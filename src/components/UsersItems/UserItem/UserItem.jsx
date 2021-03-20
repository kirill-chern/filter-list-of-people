import style from "../UsersItems.module.scss";

export default function UserItem({ user: { name, lastname, age, sex } }) {
  return (
    <div className={style.UserItem}>
      <div>{`${name} ${lastname}`}</div>
      <div>Возраст: {age}</div>
      <div>Пол: {sex === "m" ? "мужской" : "женский"}</div>
    </div>
  );
}
