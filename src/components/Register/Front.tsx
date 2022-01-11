import React from "react";
import { TextField } from "@mui/material";

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
  const [inputs, setInputs] = React.useState<IInputs>({
    name: "",
    lastName: "",
    birthDate: "",
  });

  const MemodTextField = React.memo(TextField);

  return (
    <div className={"popup__front"}>
      <span className="popup__title">Создайте учетную запись</span>
      <form action="" className="popup__form">
        <input
          name={"name"}
          value={inputs.name}
          onBlur={handleBlur}
          onChange={handleInputs}
          type="text"
          className="popup__input"
          placeholder="Имя"
        />
        {inputsDirty?.name && nameError && (
          <span className={"popup__errors-text"}>{nameError}</span>
        )}
        <input
          name={"lastName"}
          value={inputs.lastName}
          onBlur={handleBlur}
          onChange={handleInputs}
          type="text"
          className="popup__input"
          placeholder="Фамилия"
        />
        {inputsDirty?.lastName && lastNameError && (
          <span className={"popup__errors-text"}>{lastNameError}</span>
        )}
        <span className="popup__subtitle">Дата рождения</span>
        <p className="popup__text">
          Эта информация не будет общедоступной. Подтвердите свой возраст, даже
          если эта учетная запись предназначена для компании, домашнего
          животного и т. д.
        </p>
        <MemodTextField
          name={"birthDate"}
          value={inputs.birthDate}
          // @ts-ignore
          onBlur={handleBlur}
          // @ts-ignore
          onChange={handleInputs}
          className="popup__date"
          type="date"
          fullWidth
        />
        {inputsDirty?.birthDate && birthDateError && (
          <span className={"popup__errors-text"}>{birthDateError}</span>
        )}
        <button className="popup__btn btn-reset btn" type="submit">
          Далее
        </button>
      </form>
    </div>
  );
});

export default Front;
