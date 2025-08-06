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
            
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-white bg-[#B0B694]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Emergency Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/24_7.png"
                alt="24_7"
                className="h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              24/7 Emergency Tree Service
            </h3>
            <p className="text-sm md:text-base">
              We understand that tree emergencies don't always occur during
              regular business hours. That is why we offer 24/7 emergency tree
              services to help protect your property and ensure the safety of
              your family.
            </p>
          </div>

          {/* Licensed and Insured */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="licensed-and-insured.png"
                alt="licensed-and-insured"
                className="h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Licensed and Insured</h3>
            <p className="text-sm md:text-base">
              We are proud of our team of arborists who offer professional tree
              care services for residential and commercial properties. Our
              arborists are licensed and insured to provide the highest quality
              of service for your tree care needs. With our team of arborists,
              you can rest assured that your trees will receive the best
              possible care.
            </p>
          </div>

          {/* Superior Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/superior-service.png"
                alt="superior-service"
                className="h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Superior Service</h3>
            <p className="text-sm md:text-base">
              We strive to offer superior service and satisfaction for all our
              customers. We take the time to get to know you to provide
              personalized service and meet your individual needs. Our team is
              passionate about providing high-quality services that will leave
              you feeling satisfied with the results.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm md:text-md font-bold text-gray-900">
            OUR SERVICES
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            We Offer Fast, Professional, and Reliable Tree Services
          </h3>
          <div className="flex justify-center mb-3">
            <img
              loading="lazy"
              decoding="async"
              src="/divider.png"
              alt="divider"
              title="divider"
              className="h-3 md:h-4"
            />
          </div>
          <div className="text-lg md:text-xl font-semibold mb-6">
            <p>Exceeding Our Client's Expectations</p>
          </div>
          <div className="flex justify-center">
            <img
              loading="lazy"
              decoding="async"
              src="/badges.jpg"
              alt="badges"
              title="badges"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-12">
          {/* First Row with 3 Boxes */}
          <div className="p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/tree-trimming-and-pruning.jpg"
              alt="Tree Trimming & Pruning"
              title='tree-trimming-pruning"'
              className="w-full h-48 md:h-56 object-cover rounded-t-lg"
            />
            <h1 className="text-lg md:text-xl font-bold mt-4 text-center">
              Tree Trimming & Pruning
            </h1>
            <p className="px-2 md:px-3 text-sm md:text-base text-center">
              Our certified arborists offer professional tree trimming and
              pruning services to improve the health, safety, and aesthetic
              appeal of your trees. We use the latest techniques to ensure
              proper growth and optimal tree health
            </p>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded hover:cursor-pointer text-white font-bold py-2 px-4 rounded-3xl text-sm md:text-base"
                onClick={() => navigate("/services/tree-trimming-pruning/")}>
                DISCOVER MORE
              </button>
            </div>
          </div>

          <div className="p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/structural-pruning.jpg"
              alt="Structural Pruning"
              title="structural-pruning"
              className="w-full h-48 md:h-56 object-cover rounded-t-lg"
            />
            <h1 className="text-lg md:text-xl font-bold mt-4 text-center">
              Structural Pruning
            </h1>
            <p className="px-2 md:px-3 text-sm md:text-base text-center">
              Structural pruning involves cutting back branches to improve the
              overall structure of a tree and help it maintain its balance. This
              will reduce the risk of potential damage caused by strong winds or
              storms, as well as prevent limbs from interfering with utility
              wires or buildings.
            </p>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded hover:cursor-pointer text-white font-bold py-2 px-4 rounded-3xl text-sm md:text-base"
                onClick={() => navigate("/services/structural-pruning/")}>
                DISCOVER MORE
              </button>
            </div>
          </div>

          <div className="p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/tree-removal.jpg"
              alt="Tree Removal"
              title="tree-removal"
              className="w-full h-48 md:h-56 object-cover rounded-t-lg"
            />
            <h1 className="text-lg md:text-xl font-bold mt-4 text-center">
              Tree Removal
            </h1>
            <p className="px-2 md:px-3 text-sm md:text-base text-center">
              Tree removal is a dangerous task that should be left to
              professionals. Our experienced arborists use the latest safety
              equipment and techniques to perform tree removals safely and
              efficiently.
            </p>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded hover:cursor-pointer text-white font-bold py-2 px-4 rounded-3xl text-sm md:text-base"
                onClick={() => navigate("/services/tree-removal/")}>
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>

        {/* Second Row with 4 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12">
          <div className="p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/land-clearing.jpg"
              alt="Land Clearing"
              title="land-clearing"
              className="w-full h-48 md:h-56 object-cover rounded-t-lg"
            />
            <h1 className="text-lg md:text-xl font-bold mt-4 text-center">
              Land Clearing
            </h1>
            <p className="px-2 md:px-3 text-sm md:text-base text-center">
              Our land clearing services are designed for residential,
              commercial, and industrial properties. We will remove trees,
              stumps, brush, and other debris to free up space for development
              or construction projects.
            </p>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded hover:cursor-pointer text-white font-bold py-2 px-4 rounded-3xl text-sm md:text-base"
                onClick={() => navigate("/services/land-clearing/")}>
                DISCOVER MORE
              </button>
            </div>
          </div>

          <div className="p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/storm-cleanup.jpg"
              alt="Storm Clean Up"
              title="storm-cleanup"
              className="w-full h-48 md:h-56 object-cover rounded-t-lg"
            />
            <h1 className="text-lg md:text-xl font-bold mt-4 text-center">
              Storm Clean Up
            </h1>
            <p className="px-2 md:px-3 text-sm md:text-base text-center">
              Our team is available 24/7 to respond to storm damage clean up. We
              have the experience and equipment to handle even the most
              difficult jobs quickly and safely.
            </p>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded hover:cursor-pointer text-white font-bold py-2 px-4 rounded-3xl text-sm md:text-base"
                onClick={() => navigate("/services/storm-clean-up/")}>
                DISCOVER MORE
              </button>
            </div>
          </div>

          <div className="p-4 md:p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/commercial-tree-services.jpg"
              alt="Commercial Tree Services"
              title="commercial-tree-services"
              className="w-full h-48 md:h-56 object-cover rounded-t-lg"
            />
            <h1 className="text-lg md:text-xl font-bold mt-4 text-center">
              Commercial Tree Services
            </h1>
            <p className="px-2 md:px-3 text-sm md:text-base text-center">
              We offer a variety of tree services for businesses including
              pruning, removal, stump grinding, and more. Our experienced
              arborists will work with you to ensure the safety and health of
              your trees while also protecting your bottom line.
            </p>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded hover:cursor-pointer text-white font-bold py-2 px-4 rounded-3xl text-sm md:text-base"
                onClick={() => navigate("/services/commercial-tree-services/")}>
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Request Section */}
      <div className="relative">
        {/* Background image with green tint overlay */}
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
              
            </div>
          </div>
        </section>
      </div>

      {/* About Us Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Header section */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-green-700 text-sm md:text-md font-bold tracking-wider uppercase mb-2 md:mb-4">
                About Us
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Arborists From American Tree Experts' Services are All Highly
                <br className="hidden md:block" />
                Trained Professionals.
              </h2>
            </div>

            {/* Decorative divider */}
            <div className="flex justify-center mb-6 md:mb-8">
              <img
                loading="lazy"
                decoding="async"
                src="/divider.png"
                alt="divider"
                title="divider"
                className="h-3 md:h-4"
              />
            </div>

            {/* Main image */}
            <div className="mb-8 md:mb-10">
              <img
                loading="lazy"
                decoding="async"
                src="/about-img.jpg"
                alt="American Tree Experts Land"
                title="American Tree Experts Land"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content paragraphs */}
            <div className="max-w-4xl mx-auto mb-6 md:mb-8">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                At American Tree Experts, our team is committed to providing
                excellent customer service, and we are always here to answer any
                questions you may have. We take pride in our work and your
                satisfaction is our top priority. We understand that every
                situation is unique and requires individual attention to detail.
                We will take the time to understand your needs and create a plan
                of action that is both cost-effective and provides you with a
                safe, attractive result.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our experienced staff of Arborists brings expertise and
                professionalism to our services that are unmatched in the
                industry. From your initial call to the completion of your job,
                we strive for customer satisfaction every step of the way. At
                American Tree Experts, we take great pride in our work and look
                forward to serving you soon.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                className="bg-lime-600 hover:bg-lime-700 hover:rounded hover:cursor-pointer text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transition duration-300 tracking-wide text-sm md:text-base"
                onClick={() => navigate('/about-us')}>
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#e2e5d2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Header section */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-green-700 text-sm md:text-md font-bold tracking-wider uppercase mb-2 md:mb-4">
                Testimonials
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight text-center">
                Checkout What Our Satisfied <br className="hidden md:block" />
                Customers Have to Say About Us
              </h2>
            </div>

            {/* Decorative divider */}
            <div className="flex justify-center mb-6 md:mb-8">
              <img
                loading="lazy"
                decoding="async"
                src="/divider.png"
                alt="divider"
                title="divider"
                className="h-3 md:h-4"
              />
            </div>

            {/* Content paragraphs */}
            <div className="max-w-4xl mx-auto mb-6 md:mb-8">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Our customers trust us to get the job done right, every time.
                Hear what they have to say
              </p>
            </div>
            <div className="bg-gray-100 p-4 md:p-8 relative">
              <div className="max-w-6xl mx-auto">
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-1 md:p-2 shadow-lg z-10 transition-all"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-1 md:p-2 shadow-lg z-10 transition-all"
                  disabled={currentIndex + itemsToShow >= reviews.length}
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
                </button>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {visibleReviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      {/* Review Content */}
                      <div className="p-4 md:p-6">
                        {/* Stars */}
                        <div className="flex mb-2 md:mb-3">
                          {renderStars(review.rating)}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                          {review.content}
                        </p>

                        {/* Google Logo */}
                        <div className="flex justify-end mb-3 md:mb-4">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg
                              viewBox="0 0 24 24"
                              className="w-4 h-4 md:w-5 md:h-5"
                            >
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Customer Info */}
                      <div className="bg-green-700 px-4 md:px-6 py-3 md:py-4 flex items-center">
                        <div
                          className={`w-8 h-8 md:w-12 md:h-12 ${review.color} rounded-full flex items-center justify-center mr-2 md:mr-4`}
                        >
                          {review.hasProfileImage ? (
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center">
                              <span className="text-green-700 font-bold text-xs md:text-lg">
                                {review.initial}
                              </span>
                            </div>
                          ) : (
                            <span className="text-white font-bold text-xs md:text-lg">
                              {review.initial}
                            </span>
                          )}
                        </div>
                        <span className="text-white font-semibold text-xs md:text-sm tracking-wide">
                          {review.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                  {Array.from(
                    { length: Math.ceil(reviews.length / itemsToShow) },
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index * itemsToShow)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${Math.floor(currentIndex / itemsToShow) === index
                          ? "bg-gray-600"
                          : "bg-gray-300 hover:bg-gray-400"
                          }`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choice Section */}
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Header section */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-green-700 text-sm md:text-md font-bold tracking-wider uppercase mb-2 md:mb-4">
                Why Choose Us
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                We Always Deliver On Our Promise Of Safe,
                <br className="hidden md:block" />
                Reliable, & Professional Tree Services
              </h2>
            </div>
            {/* Decorative divider */}
            <div className="flex justify-center mb-6 md:mb-8">
              <img
                loading="lazy"
                decoding="async"
                src="/divider.png"
                alt="divider"
                title="divider"
                className="h-3 md:h-4"
              />
            </div>
            <div className="max-w-4xl mx-auto mb-6 md:mb-8">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Our tree services are a cut above the rest so count on us to
                consistently deliver safe, dependable, and expert assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mb-8 md:mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="max-w-xl mx-auto">
            <div className="mb-3 md:mb-5 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/high-quality-services.png"
                alt="high-quality-services"
                className="h-12 md:h-16"
              />
            </div>
            <div className="">
              <h4 className="pb-2 md:pb-3 text-lg md:text-xl font-semibold text-center text-gray-800">
                High Quality Services
              </h4>
              <p className="text-center text-gray-600 font-semibold text-xs md:text-sm leading-relaxed">
                We strive to provide the highest quality services in the
                industry. Our experienced arborists are trained in their field,
                so you can trust that your trees are being taken care of by
                professionals.
              </p>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="mb-3 md:mb-5 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/24-hours-emergency.png"
                alt="24-hours-emergency"
                className="h-12 md:h-16"
              />
            </div>
            <div className="">
              <h4 className="pb-2 md:pb-3 text-lg md:text-xl font-semibold text-center text-gray-800">
                24 Hours Emergency
              </h4>
              <p className="text-center text-gray-600 font-semibold text-xs md:text-sm leading-relaxed">
                In an emergency, timing is everything. We offer 24/7 emergency
                services to ensure that your trees are taken care of as quickly
                and safely as possible.
              </p>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="mb-3 md:mb-5 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/wxpert-technical-support.png"
                alt="expert-technical-support"
                className="h-12 md:h-16"
              />
            </div>
            <div className="">
              <h4 className="pb-2 md:pb-3 text-lg md:text-xl font-semibold text-center text-gray-800">
                Expert Technical Support
              </h4>
              <p className="text-center text-gray-600 font-semibold text-xs md:text-sm leading-relaxed">
                Our experts can provide advice and assistance on the best course
                of action for any tree-related issue you may be experiencing.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="max-w-xl mx-auto">
            <div className="mb-3 md:mb-5 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/friendly-customer-service.png"
                alt="friendly-customer-service"
                className="h-12 md:h-16"
              />
            </div>
            <div className="">
              <h4 className="pb-2 md:pb-3 text-lg md:text-xl font-semibold text-center text-gray-800">
                Friendly Customer Service
              </h4>
              <p className="text-center text-gray-600 font-semibold text-xs md:text-sm leading-relaxed">
                We pride ourselves on providing excellent customer service. Our
                team is always available to answer any questions you may have
                and provide assistance throughout the process.
              </p>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="mb-3 md:mb-5 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/on-time-service.png"
                alt="on-time-service"
                className="h-12 md:h-16"
              />
            </div>
            <div className="">
              <h4 className="pb-2 md:pb-3 text-lg md:text-xl font-semibold text-center text-gray-800">
                On Time Service
              </h4>
              <p className="text-center text-gray-600 font-semibold text-xs md:text-sm leading-relaxed">
                We understand that time is money, so we guarantee prompt service
                for all jobs. Our team will work tirelessly to finish the job
                quickly and efficiently without compromising quality.
              </p>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="mb-3 md:mb-5 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/satisfaction-guaranteed.png"
                alt="satisfaction-guaranteed"
                className="h-12 md:h-16"
              />
            </div>
            <div className="">
              <h4 className="pb-2 md:pb-3 text-lg md:text-xl font-semibold text-center text-gray-800">
                Satisfaction Guaranteed
              </h4>
              <p className="text-center text-gray-600 font-semibold text-xs md:text-sm leading-relaxed">
                Your satisfaction is our top priority. We take great pride in
                our work, and you can trust that we will always provide the best
                service possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas and Map */}
      <div className="relative">
        {/* Background with map image and overlay */}
        <div className="absolute inset-0 [background-image:linear-gradient(180deg,rgba(21,58,38,0.92)_0%,rgba(21,58,38,0.89)_100%),url(/tree-bg.jpg)] bg-cover bg-center">
        </div>

        {/* Content container */}
        <div className="relative">
          <div className="w-full flex flex-col lg:flex-row">
            {/* Service Areas Content - Left Side */}
            <div className="w-full lg:w-1/2 flex flex-col px-5 lg:ml-10 py-10 lg:py-0">
              <div className="pt-5 mb-3">
                <h3 className="text-white text-md font-bold">Service Areas</h3>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
                  As a Locally Owned Company,
                  <br />
                  We Offer Honest Work,
                  <br />
                  At Highly Competitive Rates!
                  <br />
                </h4>
              </div>
              <div className="mb-5">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/divider-l.png"
                  alt="divider"
                  title="divider-l"
                />
              </div>
              <div>
                <p className="text-white">
                  At American Tree Experts, We Bring Expertise and
                  Professionalism to Your Neighborhood. We proudly serve the
                  following areas:
                </p>
              </div>

              {/* Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col mt-10">
                  <div className="ml-5">
                    <div className="mb-3 flex">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="/loc.png"
                          alt="location pin"
                          title="Home 22"
                        />
                      </div>
                      <div className="pl-3">
                        <h4 className="pb-2 font-semibold text-white">
                          Evansville IN
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="ml-5">
                    <div className="mb-3 flex">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="/loc.png"
                          alt="location pin"
                          title="Home 22"
                        />
                      </div>
                      <div className="pl-3">
                        <h4 className="pb-2 font-semibold text-white">
                          Newburgh, IN
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="ml-5">
                    <div className="mb-3 flex">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="/loc.png"
                          alt="location pin"
                          title="Home 22"
                        />
                      </div>
                      <div className="pl-3">
                        <h4 className="pb-2 font-semibold text-white">
                          Boonville, IN
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-10">
                  <div className="ml-5">
                    <div className="mb-3 flex">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="/loc.png"
                          alt="location pin"
                          title="Home 22"
                        />
                      </div>
                      <div className="pl-3">
                        <h4 className="pb-2 font-semibold text-white">
                          Henderson, KY
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="ml-5">
                    <div className="mb-3 flex">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          src="/loc.png"
                          alt="location pin"
                          title="Home 22"
                        />
                      </div>
                      <div className="pl-3">
                        <h4 className="pb-2 font-semibold text-white">
                          Warrick County
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map - Right Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-5 lg:p-10">
              <div className="w-full h-96 lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.2020490645464!2d-87.4793165!3d38.0656754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886e2ad3f420ed75%3A0xd5397d7cfad2e97d!2sAmerican%20Tree%20Experts%20%26%20Landscaping!5e0!3m2!1sen!2sus!4v1754077737958!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Header section */}
            <div className="mb-8">
              <h3 className="text-green-700 text-md font-bold tracking-wider uppercase mb-4">
                Photo Gallery
              </h3>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                Checkout Some Of Our Latest Projects
              </h2>
            </div>
            {/* Decorative divider */}
            <div className="flex justify-center mb-8">
              <img
                loading="lazy"
                decoding="async"
                src="/divider.png"
                alt="divider"
                title="divider"
                className="h-4"
              />
            </div>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-base leading-relaxed mb-6">
                Explore Our Work: Creating a Safer, More Attractive Environment
                Through Expert Tree Services.
              </p>
            </div>
            <div className="mx-5 sm:mx-20">
              <img
                loading="lazy"
                decoding="async"
                src="/latest-projects.jpg"
                alt="latest projects"
                title="latest-projects"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image on left - moves to top on mobile */}
            <div className="w-full lg:w-1/2">
              <div className="shadow-xl shadow-black rounded-2xl w-full h-full">
                <img
                  className="rounded-2xl w-full h-full"
                  loading="lazy"
                  decoding="async"
                  src="/Tree-Services.jpg"
                  alt="contact us for tree services"
                  title="contact-us-img"
                />
              </div>
            </div>

            {/* Contact info on right - moves to bottom on mobile */}
            <div className="w-full lg:w-1/2 mt-0 lg:mt-10 mb-3">
              {/* Heading Section */}
              <h3 className="text-green-900 text-sm font-extrabold tracking-wider uppercase mb-4">
                Location
              </h3>

              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                Our Team Of Licensed and Insured{" "}
                <br className="hidden md:block" />
                Tree Care Specialists Work <br className="hidden md:block" />
                Professionally and Efficiently{" "}
                <br className="hidden md:block" />
                to Ensure Quality Work.
              </h2>

              {/* Star Divider */}
              <div className="py-5">
                <img src="/divider.png" alt="divider" className="h-4" />
              </div>

              {/* Contact Boxes */}
              <div className="flex flex-col gap-3">
                {/* Address */}
                <a
                  href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225225.6190363607!2d-82.749315!3d28.1114504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28d77d54fea53%3A0xb5b559b2b13495d4!2sKen&#39;s%20Tree%20Service%2C%20Inc!5e0!3m2!1sen!2s!4v1753439811937!5m2!1sen!2s"
                  className="flex items-center bg-[#b0b694] rounded-sm overflow-hidden"
                >
                  <div className="bg-green-900 w-12 h-12 flex items-center justify-center">
                    <img
                      src="/loc-w.png"
                      alt="Location Icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-white text-[15px] font-bold ml-3">
                    Evansville, IN
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+812-457-3433"
                  className="flex items-center bg-[#b0b694] rounded-sm overflow-hidden"
                >
                  <div className="bg-green-900 w-12 h-12 flex items-center justify-center">
                    <img
                      src="/phone-w.png"
                      alt="Phone Icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-white text-[15px] font-bold ml-3">
                    812-457-3433
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:Thetreexperts@gmail.com"
                  className="flex items-center bg-[#b0b694] rounded-sm overflow-hidden"
                >
                  <div className="bg-green-900 w-12 h-12 flex items-center justify-center">
                    <img
                      src="/email-w.png"
                      alt="Email Icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-white text-[15px] font-bold ml-3">
                    Thetreexperts@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;