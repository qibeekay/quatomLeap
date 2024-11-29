import { useEffect, useState } from "react";
import { Button, Navbar } from "../../components";
import img1 from "../../assets/immm.jpg";
import img2 from "../../assets/img/img10.jpg";
import img3 from "../../assets/fran.jpg";
import img4 from "../../assets/bg-4.png";
import img5 from "../../assets/img/img11.jpg";
import img6 from "../../assets/img/volley.jpg";
import img7 from "../../assets/imgs1.jpg";
import img8 from "../../assets/imgs2.jpg";
import img9 from "../../assets/imgs3.jpg";
import img10 from "../../assets/imgs4.jpg";
import img11 from "../../assets/imgs5.jpg";

// Array of background images
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

interface props {
  h1?: string;
  p?: string;
  btext: string;
  size: string;
  smsize?: string;
  ath?: string;
}
const Header = ({ h1, p, btext, size, ath, smsize }: props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically change background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <Navbar />

      {/* hero section */}
      <div
        className="w-full min-h-screen relative bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* absolute background */}
        <div className="absolute top-0 w-full min-h-screen bg-gradient-to-r from-black/70 to-black/5"></div>
        <div className="text-white relative pt-[6rem] xs:pt-[12rem] sm:pt-[16rem] max-w-[1440px] px-4 mx-auto">
          <div className="max-w-[759px] flex flex-col gap-6">
            <p className=" uppercase text-primary text-sm xs:text-xl">{p}</p>
            <h1 className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[61px] text-white font-bold">
              {h1}
            </h1>
            <div className="mt-4">
              <Button size={size} ath={ath} name={btext} smsize={smsize} />
            </div>
          </div>
        </div>

        {/* indicator */}
        <div className="absolute bottom-20 left-[50%] -translate-x-[50%]">
          <div className="flex items-center  justify-center w-full relative gap-4">
            {/* indicator 1 */}
            <div
              className={`w-[22px] aspect-square rounded-full border-2  grid items-center justify-center ${
                currentImageIndex === 0 ? "border-primary" : "border-[#E6E1E5]"
              }`}
            >
              <div
                className={`w-[12px] aspect-square rounded-full ${
                  currentImageIndex === 0 ? "bg-primary" : "bg-[#E6E1E5]"
                }`}
              ></div>
            </div>
            {/* indicator 1 */}
            <div
              className={`w-[22px] aspect-square rounded-full border-2  grid items-center justify-center ${
                currentImageIndex === 1 ? "border-primary" : "border-[#E6E1E5]"
              }`}
            >
              <div
                className={`w-[12px] aspect-square rounded-full ${
                  currentImageIndex === 1 ? "bg-primary" : "bg-[#E6E1E5]"
                }`}
              ></div>
            </div>
            {/* indicator 2 */}
            <div
              className={`w-[22px] aspect-square rounded-full border-2  grid items-center justify-center ${
                currentImageIndex === 2 ? "border-primary" : "border-[#E6E1E5]"
              }`}
            >
              <div
                className={`w-[12px] aspect-square rounded-full ${
                  currentImageIndex === 2 ? "bg-primary" : "bg-[#E6E1E5]"
                }`}
              ></div>
            </div>
            {/* indicator 3 */}
            <div
              className={`w-[22px] aspect-square rounded-full border-2  grid items-center justify-center ${
                currentImageIndex === 3 ? "border-primary" : "border-[#E6E1E5]"
              }`}
            >
              <div
                className={`w-[12px] aspect-square rounded-full ${
                  currentImageIndex === 3 ? "bg-primary" : "bg-[#E6E1E5]"
                }`}
              ></div>
            </div>
            {/* indicator 4 */}
            <div
              className={`w-[22px] aspect-square rounded-full border-2  grid items-center justify-center ${
                currentImageIndex === 4 ? "border-primary" : "border-[#E6E1E5]"
              }`}
            >
              <div
                className={`w-[12px] aspect-square rounded-full ${
                  currentImageIndex === 4 ? "bg-primary" : "bg-[#E6E1E5]"
                }`}
              ></div>
            </div>
            {/* indicator 3 */}
            <div
              className={`w-[22px] aspect-square rounded-full border-2  grid items-center justify-center ${
                currentImageIndex === 5 ? "border-primary" : "border-[#E6E1E5]"
              }`}
            >
              <div
                className={`w-[12px] aspect-square rounded-full ${
                  currentImageIndex === 5 ? "bg-primary" : "bg-[#E6E1E5]"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
