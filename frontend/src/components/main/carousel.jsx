import Note from "../common/note";

const Carousel = ({ onCheck, onRemove, lists }) => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      style={{ width: "100%" }}
      data-bs-ride="false"
    >
      <div className="carousel-indicators" style={{ top: "97%" }}>
        {lists.map((it, index) => (
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index}
            className="active"
            aria-current="true"
            key={it._id}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {lists.map((list) => (
          <div className="carousel-item active" key={list._id}>
            <Note onCheck={onCheck} list={list} onRemove={onRemove} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
