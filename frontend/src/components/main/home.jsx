import DashBoard from "./dashboard";
import Navbar from "./navbar";

const Home = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <DashBoard />
    </>
  );
};

export default Home;
