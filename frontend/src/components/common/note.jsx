import { BiMessageSquare, BiMessageSquareCheck } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import moment from "moment";
import "../../css/note.css";

const Note = ({ list, onCheck, onRemove }) => {
  const { title, items, date, _id: listId } = list;

  return (
    <div className="myNoteBody">
      <div className="myListName">
        <h4>{title}</h4>
        <hr className="myHr" />
      </div>
      <div
        className="myTasks"
        style={{
          justifyContent: "normal",
          alignItems: "normal",
          padding: "5px",
          height: "200px",
        }}
      >
        {items.map(({ item, isCheck, _id }) => {
          if (isCheck) {
            return (
              <div className="myListItem" key={_id}>
                <BiMessageSquareCheck
                  size="1rem"
                  color="rgba(4, 4, 236, 0.9)"
                  className="myLogo"
                  style={{ margin: "5px" }}
                />
                <strike>{item}</strike>
              </div>
            );
          }
          return (
            <div className="myListItem" key={_id}>
              <BiMessageSquare
                size="1rem"
                color="rgba(4, 4, 236, 0.9)"
                className="myLogo"
                style={{ margin: "5px" }}
                onClick={() => onCheck(listId, _id)}
              />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <hr className="myHr" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <small>{moment(date).format("lll")}</small>
        <div className="myDivider" />
        <RiDeleteBin6Line
          size="2rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
          style={{ marginTop: "5px" }}
          onClick={() => onRemove(listId)}
        />
      </div>
    </div>
  );
};

export default Note;
