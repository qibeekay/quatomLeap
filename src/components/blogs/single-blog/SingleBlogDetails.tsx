import React, { useEffect, useState } from "react";
import { GetSingleBlog } from "../../../api/blogs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BiSolidMessage } from "react-icons/bi";
import { decode } from "html-entities";
import DOMPurify from "dompurify";
import Navbar from "../../externalComponents/Navbar";

interface Blogs {
  category_name: string;
  author: string;
  id: number;
  category_id: number;
  author_id: number;
  title: string;
  content: string;
  media_url: string;
  media_type: string;
  create_time: string;
}
const SingleBlogDetails = () => {
  const [blog, setBlog] = useState<Blogs | null>(null);
  const { excerpts } = useParams<{ excerpts: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await GetSingleBlog(`${excerpts}`);
      setBlog(res);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      </div>
    );
  }

  // if (!blog) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <p>Blog not found.</p>
  //     </div>
  //   );
  // }
  return (
    <div className="font-poppins">
      <div className="relative ">
        <header className="w-full bg-[#c46b12] text-white">
          <div>
            {/* nav */}
            <Navbar />

            <div className=" max-w-6xl mx-auto px-4 pt-[5rem] ms:pt-[7rem] pb-[17rem] min-h-screen flex flex-col items-center justify-center">
              {/* header */}
              <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl ms:w-[75%] leading-[2.5rem]">
                {[blog?.title]}
              </h1>

              {/* details of author */}
              <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between mt-7">
                {/* author */}
                <div className="">
                  {/* text */}
                  <div>
                    {/* name */}
                    <p className="sm:text-lg">
                      By <span className="font-semibold">{blog?.author}</span>
                    </p>
                    {/* date */}
                    <p className="sm:text-lg">{blog?.create_time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="relative">
          <div>
            {/* image */}
            <div className="absolute -top-[14rem] left-[50%] -translate-x-[50%] z-1 w-[95%] ms:w-[80%]">
              <div className="w-full h-[35rem]">
                {blog?.media_type === "video" ? (
                  <video className="w-full h-full object-cover" controls>
                    <source src={blog?.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={blog?.media_url}
                    alt={blog?.title || "Blog media"}
                  />
                )}
              </div>
            </div>

            {/* paragraph */}
            <div className="pt-[25rem] w-[95%] sm:w-[80%] md:w-[65%] mx-auto grid md:text-xl font-semibold text-left pb-[7rem]">
              <div className="prose prose-blue prose-xl prose-headings:underline prose-headings:text-[2rem] sm:prose-headings:text-[3rem]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(decode(blog?.content || "")), // Decode HTML entities
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
