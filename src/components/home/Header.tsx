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
import club from "../../assets/img/club.jpg";
import club1 from "../../assets/img/club2.jpg";
import club2 from "../../assets/img/club3.jpg";
import club3 from "../../assets/img/club4.jpg";
import club4 from "../../assets/img/club5.jpg";
import club5 from "../../assets/img/club6.jpg";
import club6 from "../../assets/img/club7.jpg";

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
  club,
  club1,
  club2,
  club3,
  club4,
  club5,
  club6,
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

  // Optional: Add click handler for manual navigation
  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <header className="mt-10 md:mt-0">
      <Navbar />

      {/* hero section */}
      <div
        className="w-full h-[80vh] bg-top md:bg-top md:min-h-screen relative bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* absolute background */}
        <div className="absolute top-0 w-full h-[80vh] md:min-h-screen bg-gradient-to-r from-black/70 to-black/5"></div>
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

        {/* Dynamic indicator */}
        <div className="absolute bottom-20 left-[50%] -translate-x-[50%]">
          <div className="flex items-center justify-center gap-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-[22px] aspect-square rounded-full border-2 grid items-center justify-center cursor-pointer transition-all duration-300 ${
                  currentImageIndex === index
                    ? "border-primary scale-110"
                    : "border-[#E6E1E5] hover:border-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-[12px] aspect-square rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? "bg-primary" : "bg-[#E6E1E5]"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
