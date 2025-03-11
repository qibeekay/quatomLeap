import FormDataType from "../../../utils/DeclareType";

interface Props {
  profile: FormDataType | null;
}
const AthleteBasicInfo = ({ profile }: Props) => {
  const removeTrailingZeroes = (num: number | null) => {
    if (typeof num === "number" && !isNaN(num)) {
      return parseFloat(num.toFixed(2));
    }
    return num; // return null or other fallback if num is null
  };
  return (
    <div className="w-full bg-[#E8E8E8]">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-16 md:gap-y-[6rem] w-fit mx-auto">
          {/* position */}
          <div className="shadow-md min-h-[92px] xs:w-[280px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Position</p>
            <p className="text-dark font-medium capitalize">
              {profile?.position}
            </p>
          </div>

          {/* class */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">
              School / Class
            </p>
            <p className="text-dark font-medium capitalize">
              {profile?.school_class}
            </p>
          </div>

          {/* dob */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Date Of Birth</p>
            <p className="text-dark font-medium capitalize">{profile?.dob}</p>
          </div>

          {/* contact */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Contact</p>
            <p className="text-dark font-medium capitalize">
              {profile?.contact_info}
            </p>
          </div>

          {/* height */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Height</p>
            <p className="text-dark font-medium capitalize">
              {removeTrailingZeroes(profile?.height || 0)}
            </p>
          </div>

          {/* weight */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Weight</p>
            <p className="text-dark font-medium capitalize">
              {profile?.weight}lbs
            </p>
          </div>

          {/* body type */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Body Type</p>
            <p className="text-dark font-medium capitalize">
              {profile?.body_type}
            </p>
          </div>

          {/* speed */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Speed</p>
            <p className="text-dark font-medium capitalize">
              {profile?.speed} mph
            </p>
          </div>

          {/* agility */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Agility</p>
            <p className="text-dark font-medium capitalize">
              {profile?.agility}/10
            </p>
          </div>

          {/* strength */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Coordination</p>
            <p className="text-dark font-medium capitalize">
              {profile?.coordination}/10
            </p>
          </div>

          {/* coordination */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Strength</p>
            <p className="text-dark font-medium capitalize">
              {profile?.strength}/10
            </p>
          </div>

          {/* stamina */}
          <div className="shadow-md min-h-[92px] md:w-[283px] flex items-center flex-col bg-white rounded-md justify-center">
            <p className="text-[25px] font-semibold text-dark">Stamina</p>
            <p className="text-dark font-medium capitalize">
              {profile?.stamina}/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteBasicInfo;
