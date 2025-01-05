import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/QL.png";
import Button from "./Button";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { GetUserdata } from "../../api/auth";
import { PaystackButton } from "react-paystack";
import usePaystack from "../../hooks/usePaystack";

const Navbar = () => {
  const location = useLocation();
  const [nav, setnav] = useState(false);
  const [cat, setcat] = useState(false);
  const [status, setStatus] = useState(0);
  const [profile, setprofile] = useState(false);
  const paymentType = "player";
  const [usertoken, setUsertoken] = useState("");
  const [tokenStatus, setTokenStatus] = useState(false);
  const { email, loading, message, config, handleSuccess, handleClose } =
    usePaystack(paymentType);

  useEffect(() => {
    // Fetch mail from localStorage when the component mounts
    const userToken = localStorage.getItem("hopettt")?.trim();
    if (userToken) {
      const cleanedUserToken = userToken.replace(/"/g, "");
      setUsertoken(cleanedUserToken);
      setTokenStatus(true);
    }
  }, []);

  // fetch user data
  const getuser = async () => {
    // setIsLoading(true);

    const res = await GetUserdata(usertoken);
    console.log(res);
    setStatus(res.isPaid);
  };

  // fetch user on component mount
  useEffect(() => {
    if (usertoken) {
      getuser();
    }
  }, [usertoken]);

  const toggleNav = () => {
    setnav(!nav);
  };

  const toggleCat = () => {
    setcat(!cat);
  };

  const toggleProfile = () => {
    setprofile(!profile);
  };

  const navigate = useNavigate();

  const openCategory = (category: string) => {
    navigate(`/talents/${category}`, { state: { category } });
    setTimeout(() => {
      toggleCat();
      toggleNav();
    }, 500);
  };

  // create profile
  const openProfile = (category: string) => {
    navigate(`/create-profile/${category}`, { state: { category } });
    setTimeout(() => {
      toggleProfile();
      toggleNav();
    }, 500);
  };

  // Function to check if the link is active based on the current path
  const isActive = (path: string) => location.pathname === path;

  const openUser = (uuid: string) => {
    navigate(`/player-profile/${uuid}`, { state: { uuid } });
  };

  return (
    <nav className="bg-dark z-10 fixed top-0 w-full">
      <div className="flex items-center justify-between max-w-[1440px] px-4 mx-auto">
        {/* logo */}
        <div className="w-[5rem] my-4 aspect-square">
          <img className="h-full w-full" src={Logo} alt="Logo" />
        </div>

        {/* links */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className={`flex flex-col duration-300 ease-in-out items-center group hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-white"
                }`}
              >
                Home
                <div
                  className={`w-[16px] rounded-sm  h-1 bg-primary transition-opacity ease-in-out duration-300 ${
                    isActive("/") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`flex flex-col duration-300 ease-in-out items-center group hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-white"
                }`}
              >
                About
                <div
                  className={`w-[16px] rounded-sm h-1 bg-primary transition-opacity duration-300 ease-in-out ${
                    isActive("/about") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </Link>
            </li>

            {/* become a talent */}
            <li className="">
              <button
                className={`flex flex-col duration-300 ease-in-out items-center group hover:text-primary ${
                  isActive("/create-profile") ? "text-primary" : "text-white"
                }`}
                onClick={toggleProfile}
              >
                Become a prospect
                <div
                  className={`w-[16px] rounded-sm h-1 bg-primary transition-opacity duration-300 ease-in-out ${
                    isActive("/create-profile") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </button>

              {/* menu items */}
              <div
                className={`${
                  profile ? "grid" : "hidden"
                } fixed z-30 justify-end`}
              >
                <div className="w-[213px] bg-dark rounded-md h-[249px] items-center justify-center flex flex-col relative">
                  <button onClick={toggleProfile}>
                    <HiX
                      size={30}
                      className="text-white absolute top-4 right-4"
                    />
                  </button>
                  <div className="flex flex-col gap-4 border-l-8 border-primary px-4">
                    <button
                      className="text-white text-left"
                      onClick={() => {
                        openProfile("basketball");
                      }}
                    >
                      Basketball
                    </button>
                    <button
                      className="text-white"
                      onClick={() => {
                        openProfile("volleyball");
                      }}
                    >
                      Volleyball
                    </button>
                    <button
                      className="text-white"
                      onClick={() => {
                        openProfile("football");
                      }}
                    >
                      Football
                    </button>
                  </div>
                </div>
              </div>
            </li>

            {/* talents page */}
            <li className="">
              <button
                className={`flex flex-col duration-300 ease-in-out items-center group hover:text-primary ${
                  isActive("/talents") ? "text-primary" : "text-white"
                }`}
                onClick={toggleCat}
              >
                Talents
                <div
                  className={`w-[16px] rounded-sm h-1 bg-primary transition-opacity duration-300 ease-in-out ${
                    isActive("/talents") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </button>

              {/* menu items */}
              <div
                className={`${cat ? "grid" : "hidden"} fixed z-30 justify-end`}
              >
                <div className="w-[213px] bg-dark p-4 rounded-md h-[249px] items-center justify-center flex flex-col relative">
                  <button onClick={toggleCat} className="text-white">
                    <HiX size={30} className="absolute top-4 right-4" />
                  </button>
                  <div className="flex flex-col gap-4 border-l-8 border-primary px-4">
                    <button
                      className="text-white"
                      onClick={() => {
                        openCategory("college");
                      }}
                    >
                      College Athletes
                    </button>
                    <button
                      className="text-white"
                      onClick={() => {
                        openCategory("highschool");
                      }}
                    >
                      High School Athletes
                    </button>
                    <button
                      className="text-white"
                      onClick={() => {
                        openCategory("pro");
                      }}
                    >
                      Pro Athletes
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/blogs"
                className={`flex duration-300 ease-in-out flex-col items-center group hover:text-primary ${
                  isActive("/blogs") ? "text-primary" : "text-white"
                }`}
              >
                Blog
                <div
                  className={`w-[16px] rounded-sm h-1 bg-primary transition-opacity duration-300 ease-in-out ${
                    isActive("/blogs") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </Link>
            </li>
          </ul>
        </div>

        {/* button */}
        <div className="hidden lg:flex items-center gap-4">
          <div>
            <Link
              to={"/contact-us"}
              className="bg-primary hover:bg-primary/90 duration-300 ease-in-out text-dark py-4 px-6 w-fit rounded-lg font-semibold capitalize flex flex-col sm:flex-row"
            >
              Contact Us
            </Link>
          </div>

          {usertoken ? (
            status === 1 ? (
              <div className="">
                <button
                  onClick={() => {
                    openUser(usertoken);
                  }}
                  className="text-primary hover:text-primary/75"
                >
                  Profile
                </button>
              </div>
            ) : (
              <PaystackButton
                {...config}
                text="Subscibe"
                onSuccess={handleSuccess}
                onClose={handleClose}
                className="paystack-button text-white"
              />
            )
          ) : (
            <div className="">
              <Link
                to={"/auth/login"}
                className="text-primary hover:text-primary/75"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        <div className="block lg:hidden">
          <button className="" onClick={toggleNav}>
            <HiOutlineMenuAlt4 className="text-white" size={35} />
          </button>
        </div>
      </div>

      {/* Apply the backdrop-blur class conditionally */}
      {nav && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm  z-10"></div>
      )}

      {/* mobile nav */}
      <div
        className={`fixed w-full xs:w-[350px] sm:w-[450px] top-0 h-screen bg-dark duration-1000 transition-all ease-in-out z-[100] pl-10 ${
          nav ? "left-0" : "-left-[100rem]"
        }`}
      >
        <button
          className="mt-4 w-full grid items-center justify-end px-4"
          onClick={toggleNav}
        >
          <HiXMark className="text-white" size={30} />
        </button>
        <div className="mt-[7rem]">
          <ul className="flex flex-col gap-8">
            <li>
              <Link
                to="/"
                className={` duration-300 ease-in-out  group hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-white"
                }`}
              >
                Home
                <div
                  className={`w-[16px] rounded-sm  h-1 bg-primary transition-opacity ease-in-out duration-300 ${
                    isActive("/") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={` duration-300 ease-in-out group hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-white"
                }`}
              >
                About
                <div
                  className={`w-[16px] rounded-sm h-1 bg-primary transition-opacity duration-300 ease-in-out ${
                    isActive("/about") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </Link>
            </li>

            {/* Talents Page */}
            <li className="">
              <button
                className={` duration-300 ease-in-out items-center group hover:text-primary ${
                  isActive("/talents") ? "text-primary" : "text-white"
                }`}
                onClick={toggleProfile}
              >
                Become a Talent
              </button>

              {/* Dropdown Menu */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  profile ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col border-l-4 border-primary gap-3 px-4">
                  <li>
                    <button
                      onClick={() => {
                        openProfile("basketball");
                      }}
                      className="text-white hover:text-primary w-full text-left"
                    >
                      Basketball
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        openProfile("volleyball");
                      }}
                      className="text-white hover:text-primary w-full text-left"
                    >
                      Volleyball
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        openProfile("football");
                      }}
                      className="text-white hover:text-primary w-full text-left"
                    >
                      Football
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            <li className="">
              <button
                className={` duration-300 ease-in-out items-center group hover:text-primary ${
                  isActive("/talents") ? "text-primary" : "text-white"
                }`}
                onClick={toggleCat}
              >
                Talents
              </button>

              {/* Dropdown Menu */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  cat ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col gap-4 border-l-4 border-primary px-4">
                  <li>
                    <button
                      onClick={() => {
                        openCategory("college");
                      }}
                      className="text-white hover:text-primary w-full text-left"
                    >
                      College Athletes
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        openCategory("highschool");
                      }}
                      className="text-white hover:text-primary w-full text-left"
                    >
                      High School Athletes
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        openCategory("pro");
                      }}
                      className="text-white hover:text-primary w-full text-left"
                    >
                      Pro Athletes
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/blogs"
                className={` duration-300 ease-in-out group hover:text-primary ${
                  isActive("/blogs") ? "text-primary" : "text-white"
                }`}
              >
                Blog
                <div
                  className={`w-[16px] rounded-sm h-1 bg-primary transition-opacity duration-300 ease-in-out ${
                    isActive("/blogs") ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                ></div>
              </Link>
            </li>
          </ul>

          <div className=" my-6">
            <div className="">
              {/* <Button name="Contact Us" /> */}
              <Link
                to={"/contact-us"}
                className="bg-primary hover:bg-primary/90 duration-300 ease-in-out text-dark py-4 px-6 w-fit rounded-lg font-semibold capitalize flex flex-col sm:flex-row"
              >
                Contact Us
              </Link>
            </div>

            <div className="">
              {usertoken ? (
                status === 1 ? (
                  <div className="">
                    <button
                      onClick={() => {
                        openUser(usertoken);
                      }}
                      className="text-primary hover:text-primary/75 mt-6"
                    >
                      Profile
                    </button>
                  </div>
                ) : (
                  <PaystackButton
                    {...config}
                    text="Subscribe"
                    onSuccess={handleSuccess}
                    onClose={handleClose}
                    className="paystack-button text-white"
                  />
                )
              ) : (
                <div className="mt-6">
                  <Link
                    to={"/auth/login"}
                    className="text-primary hover:text-primary/75"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
