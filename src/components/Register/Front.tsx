import React from "react";
import { TextField } from "@mui/material";

interface IFront {
  setRotate: (value: boolean) => void;
  rotate: boolean;
  setRegData?: (value: object) => void;
}

const Front = React.memo(({ setRotate, rotate, setRegData }: IFront) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const MemodTextField = React.memo(TextField);

  return (
    <div className={"popup__front"}>
      <span className="popup__title">Создайте учетную запись</span>
      <form action="" className="popup__form">
        <input type="text" className="popup__input" placeholder="Имя" />

        <input type="text" className="popup__input" placeholder="Фамилия" />

        <span className="popup__subtitle">Дата рождения</span>
        <p className="popup__text">
          Эта информация не будет общедоступной. Подтвердите свой возраст, даже
          если эта учетная запись предназначена для компании, домашнего
          животного и т. д.
        </p>
        <MemodTextField className="popup__date" type="date" fullWidth />

        <button className="popup__btn btn-reset btn" type="submit">
          Далее
        </button>
      </form>
    </div>
  );
});

export default Front;
