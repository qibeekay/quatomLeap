import React, { FormEvent, useEffect, useState } from "react";
import AdminNav from "../externalComponents/AdminNav";
import QuillToolbar, { formats, modules } from "../../utils/QuillToolBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CreateBlog } from "../../api/blogs";
import { useNavigate } from "react-router-dom";

const Mainnav = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [usertoken, setUsertoken] = useState("");
  const [title, setTitle] = useState(""); // Title state
  const [excerpt, setExcerpt] = useState(""); // Excerpt state

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch mail from localStorage when the component mounts
    const userToken = localStorage.getItem("hopettt")?.trim();
    if (userToken) {
      const cleanedUserToken = userToken.replace(/"/g, "");
      setUsertoken(cleanedUserToken);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const mimeType = selectedFile.type;
      if (mimeType.startsWith("image/") || mimeType.startsWith("video/")) {
        setFile(selectedFile);
        setMediaType(mimeType.startsWith("image/") ? "image" : "video");
      } else {
        alert("Please upload a valid image or video file.");
      }
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    // Generate excerpt from the first 5 words of the title, replacing spaces with hyphens
    const titleWords = newTitle.split(" ");
    const firstFiveWords = titleWords.slice(0, 5).join("-");
    setExcerpt(firstFiveWords); // Set the excerpt with hyphens
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setIsLoading(true);
    try {
      // Create a FormData object
      const formData = new FormData();
      formData.append("usertoken", usertoken);
      formData.append("media_url", file);
      formData.append("media_type", mediaType);
      formData.append("title", title);
      formData.append("content", value);
      formData.append("category_id", category.toString());
      formData.append("excerpts", excerpt);

      // Submit FormData to the backend
      const res = await CreateBlog(formData);
      if (res) {
        setTimeout(() => {
          navigate("/admin/blogs");
        }, 1000);
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#f9f9f9] py-4 px-[3rem] w-[calc(100%-260px)] absolute right-0 min-h-screen">
      <AdminNav />
      <div>
        <h1 className="text-[24px] text-[#211B1B] font-semibold text-center">
          Create a Blog Post
        </h1>
        <p className="text-center">
          Please submit your guest blog posts by using the field below.
        </p>

        <div className="w-full mt-10">
          <form action="">
            <div className="max-w-[576px] mx-auto flex flex-col gap-4">
              {/* title */}
              <div>
                <label htmlFor="">Blog Title</label>
                <input
                  type="text"
                  className="w-full border border-[#D0D5DD] p-[16px] rounded-md outline-[#FA9874] mt-1"
                  placeholder="Enter Title"
                  value={title}
                  onChange={handleTitleChange} // Handle title change
                />
              </div>

              {/* category */}
              <div className="mt-4">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  className="w-full border border-[#D0D5DD] p-[16px] rounded-md outline-[#FA9874] mt-1 bg-white"
                  value={category}
                  onChange={(e) => setCategory(Number(e.target.value))}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="1">Sports</option>
                  <option value="2">Community Outreach</option>
                </select>
              </div>

              {/* blog excerpt */}
              <div>
                <label htmlFor="">Blog Excerpts</label>
                <input
                  type="text"
                  className="w-full border border-[#D0D5DD] p-[16px] rounded-md outline-[#FA9874] mt-1"
                  placeholder="Enter Excerpts"
                  value={excerpt} // Pre-filled with first five words of the title
                  onChange={(e) => setExcerpt(e.target.value)} // Allow manual editing
                />
              </div>

              {/* body */}
              <div>
                <label htmlFor="">Blog Content</label>
                <div className="">
                  <QuillToolbar toolbarId={"t1"} />
                  <ReactQuill
                    className="border border-[#D0D5DD] outline-[#FA9874] bg-white !h-[200px]"
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules("t1")}
                    formats={formats}
                    placeholder="Enter text here..."
                  />
                </div>
              </div>

              {/* file upload */}
              <div className="mt-4">
                <label htmlFor="">Featured Image/Video</label>
                <input
                  type="file"
                  className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-primary file:text-white rounded"
                  onChange={handleFileChange}
                />
              </div>

              {/* upload button */}
              <div className="mt-4">
                <button
                  type="button"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                  onClick={handleUpload}
                >
                  {isLoading ? "Loading..." : "Upload & Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mainnav;
