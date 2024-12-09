import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/img1.png";
import img1 from "../../assets/arrow.png";
import { useEffect, useState } from "react";
import { GetAllBlogs } from "../../api/blogs";
import { decode } from "html-entities";
import DOMPurify from "dompurify";
import Loader from "../../utils/Loader";

interface Blogs {
  category_name: string;
  author: string;
  id: number;
  category_id: number;
  author_id: number;
  title: string;
  excerpts: string;
  content: string;
  media_url: string;
  media_type: string;
  create_time: string;
}

const BlogsCategory = () => {
  const [blogs, setBlogs] = useState<Blogs[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await GetAllBlogs();
      setBlogs(res);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const singleBlog = (excerpts: string) => {
    navigate(`/blogs/${encodeURIComponent(excerpts)}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-[1440px] px-4 mx-auto py-[80px]">
          <div className="flex flex-col gap-[60px]">
            <div>
              <p className="header-2">Trending New Articles</p>
            </div>

            <div className=" relative">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {isLoading ? (
                  <div className="absolute left-[50%] -translate-x-[50%]">
                    <Loader />
                  </div>
                ) : (
                  blogs?.map((blog) => (
                    <div
                      className="border border-[#9C9A9A] rounded-2xl overflow-hidden"
                      key={blog?.id}
                    >
                      {/* image */}
                      <div className="w-full">
                        <div className="w-full h-[260px] overflow-hidden">
                          {blog.media_type === "video" ? (
                            <video
                              className="w-full h-full object-cover"
                              controls
                            >
                              <source src={blog.media_url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              className="w-full h-full object-cover"
                              src={blog.media_url}
                              alt={blog.title || "Blog media"}
                            />
                          )}
                        </div>
                      </div>

                      {/* text */}
                      <div className="flex flex-col gap-6 p-6">
                        {/* cateory */}
                        <div className="flex items-center gap-4">
                          {/* cate */}
                          <p className=" p-2 bg-primary/20 rounded-lg text-sm font-medium">
                            {blog?.category_name}
                          </p>

                          {/* time to read */}
                          <p className="text-[#524E4E] text-sm">
                            5 min to read
                          </p>

                          {/* created time */}
                          <p className="text-[#524E4E] text-sm">
                            {blog?.create_time}
                          </p>
                        </div>

                        {/* news */}
                        <div>
                          {/* header */}
                          <p className="text-xl font-bold">{blog?.title}</p>

                          {/* paragraph */}
                          <div className="prose prose-headings:text-red-600 line-clamp-2">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                  decode(blog?.content || "")
                                ), // Decode HTML entities
                              }}
                            />
                          </div>
                        </div>

                        {/* read more */}
                        <div className="">
                          <button
                            onClick={() => {
                              singleBlog(blog?.excerpts);
                            }}
                            className="flex items-center gap-2 text-primary"
                          >
                            Read more
                            <div>
                              <img src={img1} alt="" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCategory;
