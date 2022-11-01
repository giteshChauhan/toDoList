import Card from "../common/card";
import Carousel from "./carousel";
import "../../css/dashboard.css";

const DashBoard = () => {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <div className="dashboard">
        <Card />
        <Carousel />
      </div>
    </div>
  );
};

export default DashBoard;
