import React from "react";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning/" },
  { name: "Structural Pruning", path: "/services/structural-pruning/" },
  { name: "Land Clearing", path: "/services/land-clearing/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services/" },
];

const CommercialTreeServices = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full mb-8 md:mb-12">
        <div className="h-64 md:h-80 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center uppercase">
              Commercial Tree Services
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-11/12 md:w-10/12 mx-auto pt-6 md:pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Side - Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
              Expert Tree Service by Certified Arborists in Evansville, IN
            </h1>

            <p className="text-sm md:text-md font-bold text-gray-700 mb-6">
              American Tree Experts Land provides professional commercial tree services to
              Evansville, IN, and surrounding areas. From pruning to complete
              removal with expert advice and care, our team of arborists works
              safely and efficiently to take your project from start to finish.
              Call us at
              {" "}
              <a href="tel:812-457-3433" className="text-[#245b3c] hover:underline">
                812-457-3433
              </a>{" "}
              to get started today.
            </p>

            <p className="text-gray-600 mb-6 md:mb-8">
              Trees are a valuable asset for any home or property, adding natural
              beauty, increasing air and water quality, and even boosting property
              value. However, it can be easy to overlook the responsibility of
              sufficient tree maintenance which can lead to sickness and damage.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8">
              That's why American Tree Experts Land is here to help. We specialize in
              commercial tree services, ensuring the trees on your property are
              well-maintained and assessed for safety risks. Whether you are
              looking to make a positive brand impression, boost curb appeal, or
              provide fresh air for employees and customers, commercial tree
              services are irreplaceable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex-1">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src="/2.jpg" 
                  alt="Commercial Tree Maintenance" 
                  className="w-full h-100 object-bottom object-cover rounded shadow-md"
                />
              </div>
              <div className="flex-1">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src="/6.jpg" 
                  alt="Commercial Tree Service" 
                  className="w-full h-100 rounded shadow-md"
                />
              </div>
            </div>
            
            <div className="mt-8 md:mt-12">
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                Partnering with Your HOA Community for Tree Maintenance and Safety
                Assessments
              </h1>
              <p className="mb-4 text-gray-600">
                At American Tree Experts Land, we understand the challenges associated
                with managing trees in homeowners' and business associations. We
                know that it can be difficult to determine the correct time for
                tree trimming and care, as well as how much should be invested in
                commercial tree services.
              </p>
              <p className="mb-4 text-gray-600">
                Most board members and business owners don't have the knowledge or
                expertise to make the best decision when it comes to tree care,
                which is why we are here for you. Our team of experts has the
                experience and dedication to help make sure that your trees remain
                healthy and look great for years to come.
              </p>
              <p className="mb-4 text-gray-600">
                We can also create a tailored tree maintenance budget for you that
                will provide lasting and cost-effective results. By carefully
                crafting an effective Homeowner's Association Tree Maintenance
                Plan, our team can keep your trees safe and healthy while
                delivering years of rewards to the inhabitants of your community.
              </p>

              <img 
                loading="lazy" 
                decoding="async" 
                className="my-6 md:my-10 w-full h-auto object-cover rounded shadow-md" 
                src="/Commercial_Tree_Maintenance3.jpg" 
                alt="Commercial Tree Maintenance" 
              />

              <div className="w-full h-64 sm:h-80 md:h-96 mt-6 md:mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100613.45388092705!2d-87.69936316810865!3d37.996484913892644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871d5133156772d%3A0xb52e4939112ac99d!2sEvansville%2C%20IN!5e0!3m2!1sen!2sus!4v1753881151623!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Evansville Location Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="pt-6 md:pt-10 lg:w-1/3 space-y-6">
            <div className="bg-white shadow-md shadow-[#0000004d] overflow-hidden rounded-lg transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-52 md:h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h1 className="text-md md:text-lg font-bold text-white text-center">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-457-3433" className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 hover:underline">
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-md font-bold bg-[#1e4d32] w-full text-white mb-4 px-5 py-2 rounded-t-lg">
                Our Services
              </h3>
              <ul className="space-y-2 p-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-3 py-2 rounded transition ${location.pathname === service.path
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

      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-12 md:py-20 mt-8 md:mt-10">
        <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-center text-[#245B3C] text-sm md:text-lg font-bold uppercase tracking-wider">
              Our Services
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Professional Commercial Tree Services in Evansville, IN, and
              Surrounding Areas
            </h1>
            <div className="flex justify-center my-4 md:my-5">
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" className="h-1 w-24 md:w-32" />
            </div>
            <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed text-sm md:text-base">
              When it comes to quality tree care services, there is no better
              choice than American Tree Experts Land. We are dedicated to providing
              excellent customer service with a focus on safety and quality
              results for all types of residential and commercial properties.
            </p>
          </div>

          {/* First row - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Tree Trimming and Pruning Services */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" width="502" height="276" src="/tree-trimming-and-pruning.jpg" alt="Tree trimming and pruning services" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center text-gray-800">
                  Tree Trimming and Pruning Services
                </h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-center text-sm md:text-base">
                  Tree pruning and trimming can be a daunting task, particularly
                  for larger commercial properties. We understand the importance
                  of proper trimming and pruning to maintain the desired shape.
                </p>
                <div className="mt-4 md:mt-6 text-center">
                  <a href="/services/tree-trimming-pruning/" className="inline-block my-4 md:my-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105 text-sm md:text-base">
                    Discover More
                  </a>
                </div>
              </div>
            </div>

            {/* Tree Health Assessments */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/1.1.jpg" alt="Tree health assessments" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center text-gray-800">
                  Tree Health Assessments
                </h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-center text-sm md:text-base">
                  Tree health assessments are essential for any commercial
                  property. They can help identify any potential risks or
                  problems and create a plan for how to best address them.
                </p>
                <div className="mt-4 md:mt-6 text-center">
                  <a href="/services/structural-pruning/" className="inline-block my-4 md:my-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105 text-sm md:text-base">
                    Discover More
                  </a>
                </div>
              </div>
            </div>

            {/* Tree Removal Services */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/tree-removal.jpg" alt="Tree removal services" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center text-gray-800">
                  Tree Removal Services
                </h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-center text-sm md:text-base">
                  The removal of dead or hazardous trees is a delicate process
                  that requires proper planning and execution. We have the skill
                  set to safely remove trees from any commercial property.
                </p>
                <div className="mt-4 md:mt-6 text-center">
                  <a href="/services/tree-removal/" className="inline-block my-4 md:my-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105 text-sm md:text-base">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second row - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Land Clearing */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/land-clearing.jpg" alt="Land clearing services" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center text-gray-800">
                  Land Clearing Services
                </h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-center text-sm md:text-base">
                  We can help with any land-clearing task, from small-scale to
                  larger commercial properties. Our team has the experience and
                  expertise to clear away any debris or vegetation.
                </p>
                <div className="mt-4 md:mt-6 text-center">
                  <a href="/services/land-clearing/" className="inline-block my-4 md:my-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105 text-sm md:text-base">
                    Discover More
                  </a>
                </div>
              </div>
            </div>

            {/* Storm Cleanup */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/storm-cleanup.jpg" alt="Storm cleanup services" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center text-gray-800">
                  Storm Cleanup Services
                </h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-center text-sm md:text-base">
                  Storms can cause significant damage to trees and vegetation.
                  We're equipped to handle any storm cleanup task with speed,
                  safety, and efficiency.
                </p>
                <div className="mt-4 md:mt-6 text-center">
                  <a href="/services/storm-clean-up/" className="inline-block my-4 md:my-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105 text-sm md:text-base">
                    Discover More
                  </a>
                </div>
              </div>
            </div>

            {/* Tree Plantation */}
            <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/tree-plantation.jpg" alt="Tree plantation services" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center text-gray-800">
                  Tree Plantation Services
                </h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-center text-sm md:text-base">
                  Looking to enhance your commercial property? We offer an
                  extensive selection of trees that will blend in perfectly with
                  their environment while delivering significant visual appeal.
                </p>
                <div className="mt-4 md:mt-6 text-center">
                  <a href="/services/commercial-tree-services/" className="inline-block my-4 md:my-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105 text-sm md:text-base">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 mt-12 md:mt-16 mb-12 md:mb-16">
          <div className="relative lg:w-7/12 group shadow-lg shadow-black">
            <div className="absolute w-full h-full top-3 md:top-4 -left-3 md:-left-4 bg-[#afb593] z-0"></div>
            <img 
              loading="lazy" 
              decoding="async" 
              src="/treeEmergency.jpeg"
              alt="Contact us for tree services" 
              className="relative w-full h-auto md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-10" 
            />
          </div>
          <div className="lg:w-full pb-5">
            <h1 className="text-[#245B3C] text-sm md:text-md font-bold uppercase tracking-wider">
              24/7 Availability
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1 md:mt-2">
              Emergency Tree Services in Evansville
            </h2>
            <img src="/divider.png" alt="Divider" className="my-3 md:my-5 h-1 w-20 md:w-24" />
            <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
              <p className="leading-relaxed">
                In the event of an emergency, timing is of the essence! Our team is available 24/7 to handle any emergency tree services. We understand the importance of acting quickly and efficiently to avoid further damage or disruption.
              </p>
              <p className="leading-relaxed">
                Any large tree project requires a team of professionals who know what they are doing, and we at American Tree Experts Land have the experience to provide quality tree care services that you can trust.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 md:mt-6">
                Expert Advice & Care from Pruning to Removal, from American Tree Experts' Commercial Tree Service
              </h3>
              <p className="leading-relaxed">
                For commercial clients in the Tampa Bay area and Northern Pinellas County seeking professional tree service, look no further than American Tree Experts Land. With over two decades of experience in the industry, our insured team is dedicated to providing you with quality services that exceed your expectations.
              </p>
              <p className="leading-relaxed">
                We follow ANSI A300 standards and utilize our years of experience to give you the best advice on how to care for your trees. Rest assured that when it comes to tree care, we are the experts you can trust.
              </p>
              <p className="leading-relaxed">
                Contact us today at
                {" "}
                <a href="tel:812-457-3433" className="text-[#245b3c] hover:underline font-medium">
                  812-457-3433
                </a>{" "}
                for a free estimate and to learn more about the services we offer. We look forward to hearing from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialTreeServices;