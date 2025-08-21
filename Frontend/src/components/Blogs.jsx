import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaPhone, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Blogs = () => {
  const navigate = useNavigate();
  const backendLink = useSelector((state) => state.prod.link);
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
      // console.log("Blog posts fetched:", response.data.blog);
      setBlogPosts(response.data.blog);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const getRecentPosts = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
      setRecentPosts(response.data.blog);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
      setRecentPosts([]);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/category/get-category`);
      setCategories(response.data.category);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    getBlogPosts();
    getCategory();
    getRecentPosts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600"
              >
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <IoIosArrowForward className="text-gray-400 mx-1" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  Blog
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Blog Posts</h1>

            {loading ? (
              <div className="space-y-12">
                {[...Array(3)].map((_, index) => (
                  <article key={index} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                    <Skeleton height={300} className="rounded-lg mb-4" />
                    <Skeleton height={30} width="80%" className="mb-2" />
                    <Skeleton height={20} width="40%" className="mb-4" />
                    <Skeleton count={3} />
                  </article>
                ))}
              </div>
            ) : blogPosts.length > 0 ? (
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div 
                      className="overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                      <img
                        src={`${backendLink}/${post.image}`}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FaCalendarAlt className="mr-2" />
                        <span>
                          {post.dated.split('T')[0] || new Date(post.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h2
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="text-2xl font-bold text-gray-800 mb-3 cursor-pointer hover:text-green-600 transition-colors"
                      >
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.description.slice(0, 200)}...
                      </p>
                      <button
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center"
                      >
                        Read more
                        <IoIosArrowForward className="ml-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800">No blog posts found</h2>
                <p className="text-gray-600 mt-2">There are currently no blog posts available.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Contact Card */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-60 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-800">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-3 mb-4">
                      <FaMapMarkerAlt className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Contact Us Today</h3>
                    <p className="text-green-100 mb-4">We're here to answer your questions</p>
                    <a
                      href="tel:812-457-3433"
                      className="flex items-center justify-center text-2xl font-bold text-white hover:text-gray-200 transition-colors"
                    >
                      <FaPhone className="mr-3" />
                      812-457-3433
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-600 px-5 py-3">
                <h3 className="text-lg font-bold text-white">Recent Posts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {recentPosts.slice(0, 5).map((post) => (
                    <li key={post._id}>
                      <div
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="flex items-start px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        <FaArrowRight className="mt-1 mr-2 text-green-600 flex-shrink-0" />
                        <span className="font-medium">{post.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
 
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-600 px-5 py-3">
                <h3 className="text-lg font-bold text-white">Categories</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category._id}>
                      <Link
                        to={`/category/${category.slug}`}
                        className={`flex items-center px-3 py-2 rounded-md transition ${
                          window.location.pathname === `/category/${category.slug}`
                            ? "bg-green-50 text-green-700"
                            : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                      >
                        <IoIosArrowForward className="mr-2 text-green-600 flex-shrink-0" />
                        <span className="font-medium">{category.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;