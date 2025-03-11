import React from "react";
// import img1 from "../../assets/img/arwt.jpg";
import img2 from "../../assets/img/beavers.jpg";
import img3 from "../../assets/img/bocs.jpg";
import img4 from "../../assets/img/guard.jpg";
import img5 from "../../assets/sponsor.png";
import img6 from "../../assets/sponsor1.png";
import img7 from "../../assets/sponsor3.png";
import img8 from "../../assets/sponsor4.png";

const images = [img2, img3, img4, img5, img6, img7, img8];

const Partners = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="flex flex-col gap-[60px]">
          <div>
            <p className="header-1"></p>
            <p className="header-2">Our Partners</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-y-10 mt-16 w-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center"
            >
              <div className="w-[200px] aspect-square rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-center object-cover"
                  src={img}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
