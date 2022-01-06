import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface Toggle {
  handleToggle: () => void;
}

const PopUpAuthorize: FC<Toggle> = ({ handleToggle }) => {
  const [isLogIn, setIsLogIn] = React.useState(false);

  const onSubmit = () => {};
  return (
    <div className="popup">
      {isLogIn && <Navigate to="Home" />}
      <div className="overlay" onClick={handleToggle} />
      <div className="popup__wrap auth-wrap">
        <span className="popup__title">Войдите в учетную запись</span>
        <form action="" className="popup__form" onSubmit={onSubmit}>
          <input type="text" className="popup__input" placeholder="Логин" />

          <input
            type="password"
            className="popup__input"
            placeholder="Пароль"
          />

          <button className="popup__btn btn btn-reset" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpAuthorize;
