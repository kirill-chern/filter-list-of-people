import style from "../UsersItems.module.scss";

export default function UserItem({
  user: { name, lastname, age, sex },
  inputData: {
    name: inputName,
    lastname: inputLastName,
    age: inputAge,
    sex: inputSex
  }
}) {
  const content = (
    <div className={style.UserItem}>
      <div>{`${name} ${lastname}`}</div>
      <div>Возраст: {age}</div>
      <div>Пол: {sex === "m" ? "мужской" : "женский"}</div>
    </div>
  );
  if (((inputName === "") ? true : name.toLowerCase().includes(inputName.toLowerCase())) && ((inputLastName === "") ? true : lastname.toLowerCase().includes(inputLastName.toLowerCase())) && ((inputAge === "") ? true : (age === inputAge)) && ( (!inputSex.m && !inputSex.f) ? true : ( inputSex.m && sex === "m" ) ? true : ( inputSex.f && sex === "f" ) ? true : false ) ) {
    return content;
  } else {
    return null;
  }
}
