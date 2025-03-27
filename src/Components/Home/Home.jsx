import Navbar from "../Home/Navbar";
import About from "./About";
import Banner from "./Banner";
import Communication from "./Communication";
import Milestones from "./Milestones";
import StayConnected from "./StayConnected";
import Choose from "./Choose";
import Grow from "./Grow";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-white h-full">
      <div className="pt-5">
        <Navbar></Navbar>
        <Banner></Banner>
        <Milestones></Milestones>
        {/* 
        <StayConnected></StayConnected>
        <About></About>
        <Communication></Communication>
        <Choose></Choose>
        <div className="!z-50">
          <Grow></Grow>
        </div>
        <div className="!z-10">
          <Footer></Footer>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
