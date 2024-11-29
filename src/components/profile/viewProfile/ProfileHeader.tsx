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
      <div className="w-full min-h-[670px] relative flex items-end justify-center">
        <div className="grid md:grid-cols-2 gap-y-10 items-center justify-center h-full">
          <div className=" md:hidden">
            <p className="header-2 xs:text-[45px]">Adams Smith</p>
          </div>
          {/* image */}
          <div>
            <div className="w-[350px] lg:w-[563px] h-[406px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src={image}
                alt=""
              />
            </div>
          </div>

          {/* text */}
          <div className="hidden md:block">
            <p className="header-2 md:text-[61px]">{name}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
