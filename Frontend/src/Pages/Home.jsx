import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    receiveUpdates: false
  });
  const navigate = useNavigate();

  const getReviews = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/testimonials/get-testimonials`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Close the modal after submission
    toggleModal();
    // Optionally show a success message or redirect
  };

  const nextSlide = () => {
    const isMobile = window.innerWidth < 768;
    const itemsToShow = isMobile ? 1 : 3;
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= reviews.length ? 0 : prevIndex + itemsToShow
    );
  };

  const prevSlide = () => {
    const isMobile = window.innerWidth < 768;
    const itemsToShow = isMobile ? 1 : 3;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, reviews.length - itemsToShow)
        : Math.max(0, prevIndex - itemsToShow)
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-yellow-400 text-lg">
        {index < rating ? "★" : "☆"}
      </span>
    ));
  };

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const itemsToShow = isMobile ? 1 : 3;
  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <div className="overflow-x-hidden">
      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Get a Free Estimate</h3>
              <button 
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Requested *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                >
                  <option value="">Select a service</option>
                  <option value="Tree Trimming & Pruning">Tree Trimming & Pruning</option>
                  <option value="Structural Pruning">Structural Pruning</option>
                  <option value="Tree Removal">Tree Removal</option>
                  <option value="Land Clearing">Land Clearing</option>
                  <option value="Storm Clean Up">Storm Clean Up</option>
                  <option value="Commercial Tree Services">Commercial Tree Services</option>
                </select>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="receiveUpdates"
                    name="receiveUpdates"
                    type="checkbox"
                    checked={formData.receiveUpdates}
                    onChange={handleInputChange}
                    className="focus:ring-lime-500 h-4 w-4 text-lime-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="receiveUpdates" className="font-medium text-gray-700">
                    I confirm that I want to receive helpful info and discounted offers from this company
                    using info I provide. I can opt out anytime from Kens Tree Service communications.
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                >
                  Submit Info
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen min-h-[500px]">
        <div className="absolute inset-0 [background-image:linear-gradient(180deg,_rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.69)_100%),url(/hero-img.jpg)] bg-cover bg-center">
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
              LICENSED. TRAINED. INSURED.
            </h1>
            <div className="flex justify-center mb-5">
              <img
                src="/divider-l.png"
                alt="divider"
                className="w-32 md:w-auto"
              />
            </div>
            <p className="text-lg md:text-xl mb-6">
              Making the cut since 1997, we offer 5-star tree services for
              residential <br className="hidden sm:block" />
              and commercial properties of any size.
            </p>
            <button 
              onClick={toggleModal}
              className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-6 mb-10 md:mb-20 rounded-3xl transition duration-300"
            >
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>

      {/* Rest of your existing components... */}
      {/* Services Section */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-white bg-[#B0B694]">
        {/* ... existing services section content ... */}
      </div>

      {/* Our Services Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* ... existing services content ... */}
      </div>

      {/* Boxes Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* ... existing boxes content ... */}
      </div>

      {/* Request Section */}
      <div className="relative">
        <div className="absolute inset-0 [background-image:linear-gradient(180deg,rgba(21,58,38,0.94)_1%,rgba(21,58,38,0.9)_100%),url(/tree-bg.jpg)] bg-cover bg-center">
        </div>
        <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-lg md:text-xl lg:text-2xl font-extrabold mb-6">
              The Safety of Our Customers' Families, Homes, Businesses, and
              Assets Is Our Number One Priority.
            </blockquote>
            <h4 className="text-lg md:text-sm font-semibold px-4 text-[#B0B694] mb-4">
              CONTACT US FOR MORE INFORMATION
            </h4>
            <a
              href="tel:812-457-3433"
              className="font-extrabold text-3xl sm:text-4xl md:text-5xl block mb-6"
            >
              812-457-3433
            </a>
            <div className="mt-6 md:mt-12">
              <button 
                onClick={toggleModal}
                className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-6 rounded-3xl transition duration-300"
              >
                REQUEST A FREE ESTIMATE
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ... rest of your existing components ... */}
      {/* About Us Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* ... existing about us content ... */}
      </div>

      {/* Testimonial Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#e2e5d2]">
        {/* ... existing testimonial content ... */}
      </div>

      {/* Choice Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* ... existing choice section content ... */}
      </div>

      {/* Service Areas and Map */}
      <div className="relative">
        {/* ... existing service areas content ... */}
      </div>

      {/* Photo Gallery Section */}
      <div className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* ... existing gallery content ... */}
      </div>

      {/* Contact Section */}
      <div className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* ... existing contact content ... */}
      </div>
    </div>
  );
};

export default Home;