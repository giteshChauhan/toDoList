import { BiMessageSquare, BiMessageSquareCheck } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../../css/note.css";

const Note = () => {
  return (
    <div className="myNoteBody">
      <div className="myListName">
        <h4>Title</h4>
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
        <BiMessageSquare
          size="1rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
          style={{ margin: "5px" }}
        />
        <span>Kuchh task jo krna hoga</span>
      </div>
      <hr className="myHr" />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <RiDeleteBin6Line
          size="2rem"
          color="rgba(4, 4, 236, 0.9)"
          className="myLogo"
          style={{ marginTop: "5px" }}
        />
      </div>
    </div>
  );
};

export default Note;
