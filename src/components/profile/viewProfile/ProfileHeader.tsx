import { Navbar } from "../../../components";
import img from "../../../assets/male.jpg";
import FormDataType from "../../../utils/DeclareType";

interface Props {
  image: string | undefined;
  name: string | undefined;
}

const ProfileHeader = ({ name, image }: Props) => {
  return (
    <header>
      <Navbar />
      <div className="w-full min-h-[670px] relative flex items-end justify-center px-[4rem]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className=" md:hidden">
            <p className="header-2 xs:text-[35px]">{name}</p>
          </div>
          {/* image */}
          <div className="w-full flex items-center justify-center">
            <div className="w-[250px] xs:w-[350px] lg:w-[563px] h-[406px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src={image}
                alt=""
              />
            </div>
          </div>

          {/* text */}
          <div className="hidden md:flex">
            <p className="header-2 leading-[1.2] lg:text-[61px] text-center">
              {name}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
