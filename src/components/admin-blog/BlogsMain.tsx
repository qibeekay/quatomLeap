import React, { useEffect, useState } from "react";
import AdminNav from "../externalComponents/AdminNav";
import img from "../../assets/dots-v.png";
import { Link } from "react-router-dom";
import { GetAllBlogs } from "../../api/blogs";

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

const BlogsMain = () => {
  const [blogs, setBlogs] = useState<Blogs[] | null>(null);

  const getBlogs = async () => {
    const res = await GetAllBlogs();
    setBlogs(res);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="bg-[#f9f9f9] py-4 px-[3rem] w-[calc(100%-260px)] absolute right-0">
      <AdminNav />
      <div>
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-[24px] text-[#211B1B] font-semibold">
              Blog posts
            </h1>
            <p>Here is a list of all published blog pots</p>
          </div>

          <div>
            <Link
              to={"/admin/blogs/create"}
              className="font-medium text-primary"
            >
              Create new blog
            </Link>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-[#F0F2F5] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Blog Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Author and Email Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date Created
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {blogs?.map((blog) => (
                  <tr className="border-b" key={blog?.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <p className="truncated-title">{blog?.title}</p>
                    </th>
                    <td className="px-6 py-4">
                      <p>{blog?.author}</p>
                    </td>
                    <td className="px-6 py-4">{blog?.create_time}</td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center border border-[#E4E7EC] w-[32px] aspect-square rounded-lg">
                        <div>
                          <img src={img} alt="" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsMain;
