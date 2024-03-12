import React from "react";
import blogPhoto from "./assets/illustration-article.svg";
import author from "./assets/image-avatar.webp";
const BlogComponent = () => {
  return (
    <div
      id="blog"
      className="flex flex-col gap-4 w-[327px] md:w-[384px] h-[522px] bg-[#fff] m-auto  px-6  md:py-2  border-2 border-solid border-[#000] rounded-[20px]"
    >
      <img
        className="block w-[279px] h-[200px] md:w-[336px] rounded-[10px] mt-3"
        src={blogPhoto}
        alt="blog-photo"
      />
      <div
        id="tag-text"
        className="bg-[#F6D050] w-[82px] h-[29px] text-center font-bold text-sm flex justify-center items-center"
      >
        Learning
      </div>
      <p className="text-[16px] ">Published 21 Dec 2023</p>
      <h1 id="hover-text" className="font-bold text-[20px] hover:#F6D050">
        HTML & CSS foundations
      </h1>
      <p className="text-[16px] text-[#808080]">
        These Languages are the backbone of every website,defining
        structure,content and presentation
      </p>
      <div className="flex items-center w-[129px] h-[32px] gap-2">
        <img
          className="block w-[32px] h-[32px] rounded-lg"
          src={author}
          alt="authorImage"
        />
        <p className="text-sm font-bold">Greg Hooper</p>
      </div>
    </div>
  );
};

export default BlogComponent;
