import React from "react";
import { Navigate } from "react-router-dom";

interface IBack {
  regData: object;
  setRegData: (value: object) => void;
}
const Back = React.memo(({ regData }: IBack) => {
  const [isLogIn, setIsLogIn] = React.useState(false);

  const onSubmit = () => {};
  return (
    <div className="popup__back">
      {isLogIn && <Navigate to="Home" />}
      <span className="popup__title">Создайте учетную запись</span>
      <form action="" className="popup__form" onSubmit={onSubmit}>
        <input
          name="login"
          type="text"
          className="popup__input"
          placeholder="Логин"
        />

        <input
          name="password"
          type="password"
          className="popup__input"
          placeholder="Пароль"
        />

        <input
          name="password2"
          type="password"
          className="popup__input"
          placeholder="Повторите пароль"
        />

        <button className="popup__btn btn-reset btn" type="submit">
          Регистрация
        </button>
      </form>
    </div>
  );
});

export default Back;
