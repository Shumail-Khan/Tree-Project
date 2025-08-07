import { useState, useEffect } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const services = [
  { name: "Evansville", path: "/service-areas/tree-service-evansville-in/" },
  { name: "Newburgh", path: "/service-areas/tree-service-newburgh-in/" },
  { name: "Oldsmar", path: "/service-areas/tree-service-boonville-in/" },
  { name: "Henderson", path: "/service-areas/tree-service-henderson-ky/" },
  { name: "Warrick County", path: "/service-areas/tree-service-warrick-county/" },
];

const Evansville = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { src: "/4.jpg", alt: "Tree Removal Evansville IN", title: "Tree Services, Evansville, IN  1" },
    { src: "/5.jpg", alt: "Tree Services Evansville IN", title: "Tree Services, Evansville, IN  2" }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentImageIndex + 1) % images.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="">
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          <button
            onClick={() => navigate('prev')}
            className="absolute left-2 sm:left-4 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <FaChevronLeft size={isMobile ? 30 : 40} />
          </button>

          <div className="max-w-4xl w-full mx-4 sm:mx-8 lg:mx-16">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>

          <button
            onClick={() => navigate('next')}
            className="absolute right-2 sm:right-4 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <FaChevronRight size={isMobile ? 30 : 40} />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full mb-8 sm:mb-12">
        <div className="h-48 sm:h-60 md:h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 uppercase">
              TREE SERVICE Evansville, IN 
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="w-full px-4 sm:px-6 lg:w-10/12 lg:mx-auto mb-12 lg:mb-20">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Your Trusted Tree Service Company in Evansville, IN 
            </h1>

            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6">
              American Tree Experts Land has been a proud family tree care business for over two decades and counting! We are arborists, so you can trust us to provide excellent tree care services that will keep your trees looking healthy and beautiful. Additionally, our membership in ISA & TCIA demonstrates the commitment we have to provide reliable service. Get in touch with us today at 812-457-3433 to receive a free estimate.
            </p>

            <p className="text-gray-600 mb-6 sm:mb-8">
              Trees are essential to the environment and can be a great source of beauty, shade, and oxygen. Properly caring for trees is essential in preventing potential hazards from occurring due to overgrowth or damaged branches. This is why professional tree care services are necessary to protect your property's value and safety.
            </p>

            <p className="mb-6 sm:mb-8">
              American Tree Experts Land has been providing quality tree care services to the Evansville, IN  area for over 22 years. Our team of experts are members of the International Society of Arboriculture and Tree Care Industry Association, so you can trust that your trees will receive excellent care. We offer a range of services, such as:
            </p>

            {/* Image Gallery */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-2 mb-8 sm:mb-12">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-1 relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    fetchpriority="high"
                    decoding="async"
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover shadow-[#333] group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#afb236] bg-opacity-50 rounded-full p-2 sm:p-3">
                      <FaPlus className="text-white text-xl sm:text-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 text-gray-800 border-b pb-2">
                Tree Services in Evansville, IN 
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Tree Trimming & Pruning</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Tree pruning and trimming are essential practices to keep trees healthy and looking good. Our arborists will assess your tree's condition and carefully prune branches to shape or train them for optimal growth. We use ANSI A300 industry standards to ensure safe and beautiful results.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Structural Pruning</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Structural pruning is the process of removing or reducing the length of branches competing with the leader and shaping the tree for optimal growth. We understand how to properly perform this service, ensuring that your trees stay healthy and look their best.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Tree Removal</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Tree removal can be a tricky process requiring specialized techniques and equipment. Our certified arborists have the training and experience to remove trees safely without damaging your property.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Land Clearing</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Whether for construction or landscaping, our land clearing services efficiently remove trees, stumps, and brush with minimal environmental impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Storm Clean Up</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    After severe weather, our team quickly and safely removes storm debris. We help restore your property while following all safety protocols.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Commercial Tree Services</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    From routine maintenance to emergency services, we provide comprehensive tree care for commercial properties with minimal business disruption.
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 bg-blue-50 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Trust American Tree Experts Land for Professional Tree Care Services</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  At American Tree Experts Land, our professional arborists have been providing top-notch services in Evansville, IN  for over two decades. With unmatched expertise and a passion for delivering outstanding results every single time, we are the team to call when you require quality tree care services. 
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  We understand that your trees are a valuable investment and pride ourselves in providing reliable and cost-effective services. Don't hesitate to contact us at
                  {" "}
                  <a href="tel:812-457-3433" className="text-[#245b3c] font-medium hover:underline">
                    812-457-3433
                  </a>{" "}
                  to learn more about how we can help keep your property looking its best.
                </p>
              </div>

              <div className="w-full h-64 sm:h-80 md:h-96 mt-6 sm:mt-8 overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100613.45388092705!2d-87.69936316810865!3d37.996484913892644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871d5133156772d%3A0xb52e4939112ac99d!2sEvansville%2C%20IN!5e0!3m2!1sen!2sus!4v1753881151623!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Evansville, IN Location Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="pt-6 lg:pt-10 lg:w-1/3 lg:pl-4 space-y-6">
            <div className="bg-white shadow-md sm:shadow-lg shadow-[#0000004d] overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 md:h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]">
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h1 className="text-sm sm:text-base md:text-lg font-bold text-white text-center">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-457-3433" className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 hover:underline">
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-sm sm:text-base flex items-center font-bold bg-[#1e4d32] w-full text-white mb-3 px-4 py-2">
                <FaMapMarkerAlt className="mr-2 text-green-600" />
                Service Areas
              </h3>
              <ul className="space-y-1 px-2 pb-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-3 py-2 rounded transition text-sm sm:text-base ${window.location.pathname === service.path
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evansville;