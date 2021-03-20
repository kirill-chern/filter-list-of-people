import style from "./UsersFilter.module.scss";

export default function UsersFilter({ setInput }) {
  return (
    <div className={style.UsersFilter}>
      <form className={style.UsersFilterForm}>
        <fieldset>
          <legend>Фильтры</legend>
          <label>
            Имя
            <input
              onChange={(e) =>
                setInput((state) => ({
                  ...state,
                  inputData: { ...state.inputData, name: e.target.value },
                }))
              }
              type="text"
              name="firstName"
            />
          </label>
          <label>
            Фамилия
            <input
              onChange={(e) =>
                setInput((state) => ({
                  ...state,
                  inputData: { ...state.inputData, lastname: e.target.value },
                }))
              }
              type="text"
              name="lastName"
            />
          </label>
          <label>
            Возраст
            <input
              onChange={(e) =>
                setInput((state) => ({
                  ...state,
                  inputData: {
                    ...state.inputData,
                    age:
                      (Number.isNaN( +e.target.value ) || e.target.value === "") ? "" : +e.target.value
                  },
                }))
              }
              type="text"
              name="age"
            />
          </label>
          <label>
            М
            <input
              onChange={(e) =>
                setInput((state) => ({
                  ...state,
                  inputData: {
                    ...state.inputData,
                    sex: { ...state.inputData.sex, m: e.target.checked },
                  },
                }))
              }
              type="checkbox"
              name="sex"
              value="m"
            />
          </label>
          <label>
            Ж
            <input
              onChange={(e) =>
                setInput((state) => ({
                  ...state,
                  inputData: {
                    ...state.inputData,
                    sex: { ...state.inputData.sex, f: e.target.checked },
                  },
                }))
              }
              type="checkbox"
              name="sex"
              value="f"
            />
          </label>
        </fieldset>
      </form>
    </div>
  );
}
