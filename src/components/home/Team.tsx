import coo from "../../assets/coo.jpg";
import okoli from "../../assets/okoli.jpg";
import brit from "../../assets/brit.jpg";
import chi from "../../assets/chi.jpg";
import paige from "../../assets/dane.jpg";
import divine from "../../assets/divine.jpg";
import coach from "../../assets/coach.jpg";
import yusuf from "../../assets/yusuf.jpg";
import okiki from "../../assets/okiki.jpg";
import { Link } from "react-router-dom";

const Team = () => {
  const teams = [
    {
      name: "Vivian Etuka",
      role: "COO/Manager",
      email: "vivian@qlsportsonline.com",
      img: coo,
    },
    {
      name: "Adebayo Abdullahi Bukola",
      role: "Director, International Sport Operations",
      email: "adebayo@qlsportsonline.com",
      img: coach,
    },
    {
      name: "Falana Divine",
      role: "Marketing and Media Strategist",
      email: "divine@qlsportsonline.com",
      img: divine,
    },
    {
      name: "Brittney-Shania Etuka",
      role: "Public Relation and Branding",
      email: "brittney@qlsportsonline.com",
      img: brit,
    },
    {
      name: "Yusuf Surajudeen",
      role: "Legal",
      email: "yusuf@qlsportsonline.com",
      img: yusuf,
    },
    {
      name: "Okoli Ndubuisi Joshua",
      role: "Scout",
      email: "joshua@qlsportsonline.com",
      img: okoli,
    },
    {
      name: "Mr Dane Paige",
      role: "International Liaison Officer",
      email: "paige@qlsportsonline.com",
      img: paige,
    },
    {
      name: "Chibuike Mokwe",
      role: "IT Specialist",
      email: "chibuike@qlsportsonline.com",
      img: chi,
    },
    {
      name: "Michael Okiki Afuwape",
      role: "Player Development Coach/ Scout",
      email: "michael@qlsportsonline.com",
      img: okiki,
    },
  ];
  return (
    <div className="w-full bg-[#303030]">
      <div className="max-w-[1440px] px-4 mx-auto py-[100px]">
        <div className="flex flex-col gap-[60px]">
          <div>
            <p className="header-2 text-white">Team And Management</p>
          </div>

          <div>
            <div className="grid items-center justify-center md:grid-cols-2 llg:grid-cols-3 gap-x-8 gap-y-14 sm:gap-y-8">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="shadow-lg py-[24px] px-[16px] bg-white rounded-lg"
                >
                  {/* image / rows */}
                  <div className="flex items-center gap-4">
                    {/* image */}
                    <div>
                      <div className="w-[100px] sm:w-[120px] aspect-square overflow-hidden rounded-full">
                        <img
                          className="h-full w-full object-cover"
                          src={team.img}
                          alt=""
                        />
                      </div>
                    </div>

                    {/* role */}
                    <div>
                      <p className="text-dark font-medium">{team.name}</p>
                      <p className=" text-primary text-sm font-medium">
                        {team.role}
                      </p>
                      {/* socials */}
                      <p>
                        <Link to={`mailto:${team.email}`}>{team.email}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
