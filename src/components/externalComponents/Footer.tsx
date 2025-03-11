import logo from "../../assets/logo.png";
import face from "../../assets/face.png";
import x from "../../assets/x.png";
import insta from "../../assets/insta.png";
import linki from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";

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
          <div className="flex gap-y-16 items-center sm:items-start sm:flex-row gap-x-10 lg:gap-x-[7rem] lg:justify-center justify-center flex-wrap">
            <div className="md:max-w-[70%] flex justify-center flex-col gap-5 items-center text-center">
              <p className="font-semibold text-lg">About Company</p>

              <p className="text-center ">
                Quantum leap sport is a dynamic sports agency dedicated to
                empowering athletes and brands in Nigeria. We offer a
                comprehensive range of services, including player placement via
                athletic scholarships to high schools and colleges in United
                States, Asia and Europe, player representation, management,
                sales, consulting, and marketing, tailored to meet the unique
                needs of our clients.
              </p>

              <div className="flex items-center gap-4">
                {/* instagram */}
                <div className="grid items-center justify-center rounded-full w-[40px] aspect-square bg-primary">
                  <Link
                    to={
                      "https://www.instagram.com/ql_sportsonline?igsh=YmlrdHEybDIzNWk4&utm_source=qr"
                    }
                  >
                    <img src={insta} alt="" />
                  </Link>
                </div>
                {/* tiktok */}
                <div className="grid items-center justify-center rounded-full w-[40px] aspect-square bg-primary">
                  <Link to={"http://www.tiktok.com/@quantumleapsports"}>
                    <FaTiktok color="white" />
                  </Link>
                </div>
                {/* facebook */}
                <div className="grid items-center justify-center rounded-full w-[40px] aspect-square bg-primary">
                  <div>
                    <img src={face} alt="" />
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
