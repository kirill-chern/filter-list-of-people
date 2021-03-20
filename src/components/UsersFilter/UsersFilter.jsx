import style from "./UsersFilter.module.scss";

export default function UsersFilter() {
  return (
    <div className={style.usersFilter}>
      <form className={style.usersFilterForm}>
        <fieldset>
          <legend>Фильтры</legend>
          <label>
            Имя
            <input type="text" name="firstName" />
          </label>
          <label>
            Фамилия
            <input type="text" name="lastName" />
          </label>
          <label>
            Возраст
            <input type="text" name="age" />
          </label>
          <label>
            М
            <input type="checkbox" name="sex" value="m" />
          </label>
          <label>
            Ж
            <input type="checkbox" name="sex" value="f" />
          </label>
        </fieldset>
      </form>
    </div>
  );
}
