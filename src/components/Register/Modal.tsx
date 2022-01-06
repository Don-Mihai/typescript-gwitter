import React, { FC } from "react";
import Front from "./Front";
import Back from "./Back";

interface IModal {
  handleToggle: () => void;
}
const Modal: FC<IModal> = ({ handleToggle }) => {
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [regData, setRegData] = React.useState<object>({});
  return (
    <div className={"popup"}>
      <div className="overlay" onClick={handleToggle} />
      <div className={`popup__wrap ${rotate ? "popup__rotate" : ""}`}>
        <Front rotate={rotate} setRotate={setRotate} setRegData={setRegData} />
        <Back setRegData={setRegData} regData={regData} />
      </div>
    </div>
  );
};

export default Modal;
