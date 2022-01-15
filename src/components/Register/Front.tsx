import React from "react";
import { TextField } from "@mui/material";
import { useInput } from "../../hooks";

interface IFront {
  setRotate: (value: boolean) => void;
  rotate: boolean;
  setRegData?: (value: object) => void;
}

interface IInputs {
  name: string;
  lastName: string;
  birthDate: string;
}

const Front = React.memo(({ setRotate, rotate, setRegData }: IFront) => {
  const name = useInput("", { minLength: 3, maxLength: 20 });

  const MemodTextField = React.memo(TextField);

  return (
    <div className={"popup__front"}>
      <span className="popup__title">Создайте учетную запись</span>
      <form action="" className="popup__form">
        <input
          name={"name"}
          value={name.value}
          onBlur={name.handleBlur}
          onChange={name.handleValue}
          type="text"
          className="popup__input"
          placeholder="Имя"
        />
        {name.isDirty && name.minLength.value && (
          <span className={"popup__errors-text"}>
            {name.minLength.textError}
          </span>
        )}
        <input
          name={"lastName"}
          type="text"
          className="popup__input"
          placeholder="Фамилия"
        />

        <span className="popup__subtitle">Дата рождения</span>
        <p className="popup__text">
          Эта информация не будет общедоступной. Подтвердите свой возраст, даже
          если эта учетная запись предназначена для компании, домашнего
          животного и т. д.
        </p>
        <MemodTextField
          name={"birthDate"}
          className="popup__date"
          type="date"
          fullWidth
        />

        <button className="popup__btn btn-reset btn" type="submit">
          Далее
        </button>
      </form>
    </div>
  );
});

export default Front;
