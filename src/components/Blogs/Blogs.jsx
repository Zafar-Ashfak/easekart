import React from "react";
import Heading from "../Shared/Heading";
import Image1 from "../../assets/blogs/blog-1.jpg";
import Image2 from "../../assets/blogs/blog-2.jpg";
import Image3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae dekeniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2025 by Md Ashfak Alam",
    image: Image1,
    aosDelay: "0",
  },

  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae dekeniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2025 by Md Aftab Alam",
    image: Image2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae dekeniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2025 by Hitesh Chaudhary",
    image: Image3,
    aosDelay: "400",
  },
];
function Blog() {
  return (
    <div className="my-12 ">
      <div className="container">
        {/* Header Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} _ />

        {/* Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.title} className="bg-white dark:bg-gray-900">
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt="Blog Image"
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
