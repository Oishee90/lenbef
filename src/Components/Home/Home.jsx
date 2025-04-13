import Navbar from "../Home/Navbar";
import About from "./About";
import Banner from "./Banner";
import Communication from "./Communication";
import Milestones from "./Milestones";
import StayConnected from "./StayConnected";
import Choose from "./Choose";
import Grow from "./Grow";
import Footer from "./Footer";
import Feature from "./Feature";
import Frequantly from "./Frequantly";
import PricingPlan from "./PricingPlan";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="bg-white h-full">
      <div className="pt-5 p-4">
        <Navbar></Navbar>
        <Banner></Banner>
        <Milestones></Milestones>
        <About></About>
        <PricingPlan></PricingPlan>
        <Feature></Feature>
        <ContactForm></ContactForm>
        {/*         
        <StayConnected></StayConnected>
        <About></About>
        <Communication></Communication> */}
        {/* <Choose></Choose> */}
        <Frequantly></Frequantly>

        {/* <div className="!z-50">
          <Grow></Grow>
        </div> */}
        <div className="!z-10">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
