import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import "../../css/card.css";

const Card = () => {
  return (
    <div className="myCardBody">
      <div className="myListName">
        <input placeholder="Give your list a name..." className="myInput" />
        <hr className="myHr" />
      </div>
      <div className="myTasks">
        <input placeholder="Enter list item..." />
        <BiMessageSquareAdd
          size="2rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
        />
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <AiOutlineSend
          size="2rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
        />
      </div>
    </div>
  );
};

export default Card;
