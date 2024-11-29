import logo from "../../assets/logo.png";
import face from "../../assets/face.png";
import x from "../../assets/x.png";
import insta from "../../assets/insta.png";
import linki from "../../assets/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full relative bg-[#E8E8E8]">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        {/* img */}
        <div className="">
          <div className="w-[7rem] aspect-square">
            <img className="h-full w-full" src={logo} alt="Logo" />
          </div>
        </div>

        {/* links */}
        <div className=" border-y border-y-[#393535] py-20">
          <div className="flex gap-y-16 items-center sm:items-start sm:flex-row gap-x-10 lg:gap-x-[7rem] lg:justify-center flex-wrap">
            <div className="md:max-w-[70%] flex justify-center flex-col gap-5 items-center text-center">
              <p className="font-semibold text-lg">About Company</p>

              <p className="text-center ">
                Quantum leap sports helps businesses form strong partnerships
                that benefit both parties. We focus on finding sponsors for
                properties and offering expert advice to brands.
              </p>

              <div className="flex items-center gap-4">
                {/* facebook */}
                <div className="grid items-center justify-center rounded-full w-[40px] aspect-square bg-primary">
                  <div>
                    <img src={face} alt="" />
                  </div>
                </div>

                {/* twitter */}
                <div className="grid items-center justify-center rounded-full w-[40px] aspect-square bg-primary">
                  <div>
                    <img src={x} alt="" />
                  </div>
                </div>

                {/* instagram */}
                <div className="grid items-center justify-center rounded-full w-[40px] aspect-square bg-primary">
                  <div>
                    <img src={insta} alt="" />
                  </div>
                </div>

                {/* linkedin */}
                <div className="grid items-center justify-center rounded-full w-[40px] aspect-square bg-primary">
                  <div>
                    <img src={linki} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p>
                  {" "}
                  &copy; 2024 Quantum Leap Sports. LLC. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
