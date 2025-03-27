import { useNavigate } from "react-router-dom";
import bg from "../assets/signup.png";
const Success = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
  };
  return (
    <div className="flex 2xl:flex-row flex-col justify-between items-center h-full 2xl:h-screen ">
      {/* Left Form Section */}
      <div className=" w-full 2xl:w-1/2 flex flex-col justify-center items-center  p-8 bg-gradient-to-b from-[#5BACDA] to-[#F2F2F2] h-full montserrat ">
        {/* Heading */}
        <h2
          className="text-center text-[#2F2F2F] mt-20 text-[20px] montserrat leading-[30px]"
          aria-label="Password update message"
        >
          Your password has been updated. Please <br /> change your password
          regularly.
        </h2>

        {/* Congratulations */}
        <h1
          className="text-center text-[#2F2F2F] mt-20 text-5xl montserrat leading-[30px]"
          aria-label="Congratulations message"
        >
          Congratulations
        </h1>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full lg:w-1/2 p-2 border border-[#000000]  bg-[#1E3A8A] text-white font-bold  montserrat placeholder:text-[#00000080] rounded-xl mt-9"
        >
          Continue
        </button>
      </div>

      {/* Right Image Section */}
      <div className=" w-full 2xl:w-1/2  2xl:h-screen">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Success;
