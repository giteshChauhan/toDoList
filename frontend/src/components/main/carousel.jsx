import Note from "../common/note";
import "../../css/carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      style={{ width: "100%" }}
      data-bs-ride="false"
    >
      <div className="carousel-indicators" style={{ top: "97%" }}>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Note />
        </div>
        <div className="carousel-item">
          <Note />
        </div>
        <div className="carousel-item">
          <Note />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
