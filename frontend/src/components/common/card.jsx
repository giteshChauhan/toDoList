import {
  BiMessageSquareAdd,
  BiMessageSquare,
  BiMessageSquareX,
} from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import "../../css/card.css";

const Card = ({ onSend }) => {
  const [itemsList, setItemsList] = useState([{ item: "item1" }]);
  const [listItem, setListItem] = useState("");
  const [title, setTitle] = useState("");

  const removeItem = (ind) => {
    const items = itemsList.filter((it, index) => index !== ind);
    setItemsList(items);
  };

  const addItem = () => {
    const items = [...itemsList];
    items.push({ item: listItem });
    setItemsList(items);
  };

  const renderItem = (item, index) => {
    return (
      <div
        className="myListItem"
        style={{
          justifyContent: "normal",
          alignItems: "normal",
          padding: "5px",
          height: "200px",
        }}
        key={index}
      >
        <BiMessageSquare
          size="1rem"
          color="rgba(4, 4, 236, 0.9)"
          style={{ margin: "5px" }}
        />
        <span>{item}</span>
        <div className="myDivider" />
        <BiMessageSquareX
          size="1rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
          style={{ margin: "5px" }}
          onClick={() => removeItem(index)}
        />
      </div>
    );
  };

  return (
    <div className="myCardBody">
      <div className="myListName">
        <input
          placeholder="Give name to your list..."
          className="myInput"
          onChange={(e) => setTitle(e.target.value)}
        />
        <hr className="myHr" />
      </div>
      <div className="myListItem">
        <input
          placeholder="Enter list item..."
          onChange={(e) => setListItem(e.target.value)}
        />
        <BiMessageSquareAdd
          size="2rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
          onClick={() => addItem()}
        />
      </div>
      <div className="myTasks">
        {itemsList.map(({ item }, index) => renderItem(item, index))}
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <AiOutlineSend
          size="2rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
          onClick={() => onSend(title, itemsList)}
        />
      </div>
    </div>
  );
};

export default Card;
