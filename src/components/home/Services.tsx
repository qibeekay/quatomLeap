import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import React, { useState } from "react";

const animation = { duration: 100000, easing: (t: number) => t };

const Services = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    // loop: true,
    // initial: 0,
    // drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 3.5, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    // slides: { perView: 1, spacing: 20 },
  });
  // const [sliderRef] = useKeenSlider<HTMLDivElement>({
  //   loop: true,
  //   renderMode: "performance",
  //   drag: true,
  //   // created(s) {
  //   //   s.moveToIdx(5, true, animation);
  //   // },
  //   // updated(s) {
  //   //   s.moveToIdx(s.track.details.abs + 5, true, animation);
  //   // },
  //   // animationEnded(s) {
  //   //   s.moveToIdx(s.track.details.abs + 5, true, animation);
  //   // },
  //   breakpoints: {
  //     "(min-width: 600px)": {
  //       slides: { perView: 2, spacing: 20 },
  //     },
  //     "(min-width: 1000px)": {
  //       slides: { perView: 3.5, spacing: 20 },
  //     },
  //   },
  //   slides: { perView: 1, spacing: 20 },
  // });

  return (
    <div className="bg-[#E8E8E8]">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px] relative">
        <div className="flex flex-col gap-[60px] relative">
          <div>
            <p className="header-1">What we offer </p>
            <p className="header-2">Our Services</p>
          </div>

          <div>
            <div ref={sliderRef} className="keen-slider">
              {/* slider 1 */}
              <div className="keen-slider__slide number-slide1">
                <div className="grid min-h-[389px] rounded-lg">
                  {/* image */}
                  <div className="h-[200px] overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={img3}
                      alt=""
                    />
                  </div>
                  <div className="p-4 grid">
                    <p className="text-xl font-semibold text-dark">
                      Sports Scholarship Placement and Advisory
                    </p>
                    <p className="text-[#6B6767] mt-4">
                      We help athletes secure scholarships at top international
                      institutions through personalized recruitment strategies.
                      Our team connects talented athletes with global sports
                      programs, offering guidance on the application process,
                      eligibility, and scholarship opportunities. We ensure
                      athletes are matched with the best opportunities to
                      advance their academic and athletic careers abroad.
                    </p>
                  </div>
                </div>
              </div>

              {/* slider 2 */}
              <div className="keen-slider__slide number-slide2">
                <div className="grid min-h-[389px] rounded-lg">
                  {/* image */}
                  <div className="h-[200px] overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={img5}
                      alt=""
                    />
                  </div>
                  <div className="p-4 grid">
                    <p className="text-xl font-semibold text-dark">
                      Contract Negotiations
                    </p>
                    <p className="text-[#6B6767] mt-4">
                      We provide expert support in negotiating contracts for
                      athletes, ensuring they receive fair terms and benefits.
                      Our team handles the complexities of contract details,
                      from salary and incentives to legal protections, allowing
                      athletes to focus on their performance while we secure the
                      best possible agreements for their careers.
                    </p>
                  </div>
                </div>
              </div>

              {/* slider 3 */}
              <div className="keen-slider__slide number-slide3">
                <div className="grid min-h-[389px] rounded-lg">
                  {/* image */}
                  <div className="h-[200px] overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={img4}
                      alt=""
                    />
                  </div>
                  <div className="p-4 grid">
                    <p className="text-xl font-semibold text-dark">
                      Marketing and Endorsement Opportunities
                    </p>
                    <p className="text-[#6B6767] mt-4">
                      We connect athletes with brands and sponsorships to
                      elevate their profiles and generate income through
                      endorsements. Our team identifies opportunities that align
                      with the athlete's personal brand, negotiates deals, and
                      maximizes exposure, helping athletes build long-term
                      partnerships and expand their influence beyond the field.
                    </p>
                  </div>
                </div>
              </div>

              {/* slider 4 */}
              <div className="keen-slider__slide number-slide4">
                <div className="grid min-h-[389px] rounded-lg">
                  {/* image */}
                  <div className="h-[200px] overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={img3}
                      alt=""
                    />
                  </div>
                  <div className="p-4 grid">
                    <p className="text-xl font-semibold text-dark">
                      Public Relations and Social Media Strategy
                    </p>
                    <p className="text-[#6B6767] mt-4">
                      We craft tailored PR and social media strategies to help
                      athletes build a strong public image. From managing media
                      relations to creating engaging online content, our team
                      ensures athletes maintain a positive and authentic
                      presence across all platforms, enhancing their visibility
                      and connecting them with fans and sponsors globally
                    </p>
                  </div>
                </div>
              </div>

              {/* slider 5 */}
              <div className="keen-slider__slide number-slide5">
                <div className="grid min-h-[389px] rounded-lg">
                  {/* image */}
                  <div className="h-[200px] overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={img6}
                      alt=""
                    />
                  </div>
                  <div className="p-4 grid">
                    <p className="text-xl font-semibold text-dark">
                      Community Outreach and Foundation
                    </p>
                    <p className="text-[#6B6767] mt-4">
                      We assist athletes in giving back to their communities by
                      developing impactful outreach programs and establishing
                      foundations. Our team helps create initiatives that
                      reflect the athlete's values, from charity events to youth
                      development projects, empowering them to make a positive
                      difference and leave a lasting legacy off the field.
                    </p>
                  </div>
                </div>
              </div>

              {/* slider 6 */}
              <div className="keen-slider__slide number-slide6">
                <div className="grid min-h-[389px] rounded-lg">
                  {/* image */}
                  <div className="h-[200px] overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={img1}
                      alt=""
                    />
                  </div>
                  <div className="p-4 grid">
                    <p className="text-xl font-semibold text-dark">
                      Post-Career Management
                    </p>
                    <p className="text-[#6B6767] mt-4">
                      We help athletes navigate the transition from competitive
                      sports to their next phase. Our team assists in financial
                      planning, education, networking, and mental health
                      support. We empower athletes to build successful
                      post-career careers and leave a lasting impact beyond the
                      field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {loaded && instanceRef.current && (
            <>
              <div className="">
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
              </div>

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
