import { Link } from "react-router-dom";
import img from "../../assets/img1.png";
import img1 from "../../assets/arrow.png";

const Blog = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
        <div className="flex flex-col gap-[60px]">
          <div>
            <p className="header-1">Trending New Articles</p>
            <p className="header-2">Latest Quantum leap sports Insight</p>
          </div>

          <div className="">
            <Link to={""} className="text-primary text-lg">
              View All Post
            </Link>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="border border-[#9C9A9A] rounded-2xl overflow-hidden">
                {/* image */}
                <div className="w-full">
                  <div className="w-full h-[260px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt=""
                    />
                  </div>
                </div>

                {/* text */}
                <div className="flex flex-col gap-6 p-6">
                  {/* cateory */}
                  <div className="flex items-center gap-4">
                    {/* cate */}
                    <p className=" p-2 bg-primary/20 rounded-lg text-sm font-medium">
                      Updates
                    </p>

                    {/* time to read */}
                    <p className="text-[#524E4E] text-sm">5 min to read</p>

                    {/* created time */}
                    <p className="text-[#524E4E] text-sm">Sep 4, 2024</p>
                  </div>

                  {/* news */}
                  <div>
                    {/* header */}
                    <p className="text-xl font-bold">
                      Blog title heading will go here
                    </p>

                    {/* paragraph */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>

                  {/* read more */}
                  <div className="">
                    <Link
                      to={""}
                      className="flex items-center gap-2 text-primary"
                    >
                      Read more
                      <div>
                        <img src={img1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border border-[#9C9A9A] rounded-2xl overflow-hidden">
                {/* image */}
                <div className="w-full">
                  <div className="w-full h-[260px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt=""
                    />
                  </div>
                </div>

                {/* text */}
                <div className="flex flex-col gap-6 p-6">
                  {/* cateory */}
                  <div className="flex items-center gap-4">
                    {/* cate */}
                    <p className=" p-2 bg-primary/20 rounded-lg text-sm font-medium">
                      Updates
                    </p>

                    {/* time to read */}
                    <p className="text-[#524E4E] text-sm">5 min to read</p>

                    {/* created time */}
                    <p className="text-[#524E4E] text-sm">Sep 4, 2024</p>
                  </div>

                  {/* news */}
                  <div>
                    {/* header */}
                    <p>Blog title heading will go here</p>

                    {/* paragraph */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>

                  {/* read more */}
                  <div className="">
                    <Link
                      to={""}
                      className="flex items-center gap-2 text-primary"
                    >
                      Read more
                      <div>
                        <img src={img1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border border-[#9C9A9A] rounded-2xl overflow-hidden">
                {/* image */}
                <div className="w-full">
                  <div className="w-full h-[260px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt=""
                    />
                  </div>
                </div>

                {/* text */}
                <div className="flex flex-col gap-6 p-6">
                  {/* cateory */}
                  <div className="flex items-center gap-4">
                    {/* cate */}
                    <p className=" p-2 bg-primary/20 rounded-lg text-sm font-medium">
                      Updates
                    </p>

                    {/* time to read */}
                    <p className="text-[#524E4E] text-sm">5 min to read</p>

                    {/* created time */}
                    <p className="text-[#524E4E] text-sm">Sep 4, 2024</p>
                  </div>

                  {/* news */}
                  <div>
                    {/* header */}
                    <p>Blog title heading will go here</p>

                    {/* paragraph */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>

                  {/* read more */}
                  <div className="">
                    <Link
                      to={""}
                      className="flex items-center gap-2 text-primary"
                    >
                      Read more
                      <div>
                        <img src={img1} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
