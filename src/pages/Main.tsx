import React from "react";
import LogIn from "../components/LogIn";
import Footer from "../components/Footer";
import Register from "../components/Register";

const Main: React.FC = () => {
  const [authToggle, setAuthToggle] = React.useState<Boolean>(false);

  const handleClickToggle = () => {
    setAuthToggle(!authToggle);
  };

  return (
    <div className="main">
      <div className="main__wrap">
        <div className="main__left">
          <div className="main__clouds">
            <div className="main__cloud">Пойдешь гулять?</div>
            <div className="main__cloud">Нет</div>
            <div className="main__cloud">Почему!?</div>
            <div className="main__cloud">Деньги машина есть?</div>
          </div>
          <div className="main__images">
            <img src="/ghost1.svg" alt="" height={500} />
            <img src="/ghost2.svg" alt="" height={500} />
          </div>
        </div>
        {authToggle ? (
          <LogIn handleClickToggle={handleClickToggle} />
        ) : (
          <Register handleClickToggle={handleClickToggle} />
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Main;
