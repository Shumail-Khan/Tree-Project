import { useLocation } from "react-router-dom";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning/" },
  { name: "Structural Pruning", path: "/services/structural-pruning/" },
  { name: "Land Clearing", path: "/services/land-clearing/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services/",},
];

const TreeRemoval = () => {
  const location = useLocation();
 
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full mb-8 md:mb-12">
        <div className="h-48 sm:h-64 md:h-80 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 uppercase">
              Tree Removal
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-full px-4 sm:w-11/12 sm:px-6 lg:w-10/12 lg:px-8 mx-auto pt-6 sm:pt-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 sm:mb-6">
              Professional Tree Services in Evansville, IN
            </h2>

            <p className="text-base sm:text-lg font-bold text-gray-700 mb-4 sm:mb-6">
              For high-quality tree removal services in the Evansville, IN
              area, look no further than American Tree Experts Land. Our experienced
              arborists use the latest tree removal techniques to ensure your
              property is safe and secure. Call us at{" "}
              <a href="tel:812-457-3433" className="text-green-800 hover:text-black transition-colors duration-300">
                812-457-3433
              </a>{" "}
              for a free estimate today.
            </p>

            <div className="space-y-4 mb-6 sm:mb-8 font-semibold text-gray-700 text-sm sm:text-base">
              <p>
                Tree removal can be a tricky process and requires an experienced
                eye to do it correctly. Multiple variables such as the size,
                location, health, and soil condition of the tree should all be
                taken into account when removing it safely. Our arborists are
                experienced in the latest tree removal techniques and understand
                how to properly assess each situation.
              </p>

              <p>
                For the past 17 years, American Tree Experts Land has been proudly
                serving Evansville and delivering remarkable tree service for
                residential and commercial properties. Our team of professionals
                has the essential skill set to tackle projects large and small
                with care and precision.
              </p>

              <p>
                We realize that every project is unique which is why we take time
                to review details with each client before commencing any action -
                guaranteeing your safety as well as a great service experience.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              Experienced in Tree Removal Service in Evansville, IN
            </h2>

            <div className="space-y-4 mb-6 sm:mb-8 text-gray-700 text-sm sm:text-base">
              <p>
                When it comes to tree removal in Evansville, IN, it's
                important to call a professional arborist. Trees that are diseased
                or dead can cause damage to your property and also create unsafe
                conditions.
              </p>

              <p>
                Additionally, trees can interfere with power lines or be placed
                too close to foundations or other structures, leading to further
                safety concerns.
              </p>
            </div>

            {/* Two Column Section */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="md:w-1/2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  Signs you may need to call a professional tree service include:
                </h3>
                <ul className="text-sm sm:text-base list-inside list-disc pl-4 sm:pl-6 text-gray-700 space-y-2">
                  <li className="hover:text-green-700 hover:cursor-pointer transition-colors duration-200">Dead or dying branches</li>
                  <li className="hover:text-green-700 hover:cursor-pointer transition-colors duration-200">Visible signs of disease or infestation</li>
                  <li className="hover:text-green-700 hover:cursor-pointer transition-colors duration-200">Trees that are too close to buildings or power lines</li>
                  <li className="hover:text-green-700 hover:cursor-pointer transition-colors duration-200">Overhanging branches blocking roads or walkways</li>
                  <li className="hover:text-green-700 hover:cursor-pointer transition-colors duration-200">Storm damage to trees that need attention</li>
                </ul>
              </div>

              <div className="md:w-1/2 group overflow-hidden flex justify-center md:justify-end">
                <img
                  src="/2.jpg"
                  alt="Tree Removal"
                  className="w-full sm:w-4/5 md:w-3/5 h-60 object-bottom object-cover shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base">
              <p>
                If your property has trees that are unhealthy or weakened trees,
                it is critical that you remove them right away. Damaged and
                diseased trees present a significant safety hazard to your home
                and family. By calling an arborist from American Tree Experts Land for
                tree removal, you can be confident that the job will be done
                correctly and safely.
              </p>

              <p>
                Dead and dying trees can also be a major hazard to nearby
                structures, power lines, and roads. Similarly, if you're concerned
                about potential damage to your property, calling a professional
                tree service can help protect the investment you have in your
                home.
              </p>

              <p>
                For commercial properties, the timely removal of hazardous trees
                can help keep employees and visitors safe. Overgrown or dead trees
                can be hazardous to those walking around your property, so it's
                important to remove them promptly.
              </p>
              <div className="w-full h-64 sm:h-80 md:h-96 mt-6 sm:mt-8 overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100613.45388092705!2d-87.69936316810865!3d37.996484913892644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871d5133156772d%3A0xb52e4939112ac99d!2sEvansville%2C%20IN!5e0!3m2!1sen!2sus!4v1753881151623!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="pt-6 sm:pt-10 lg:w-1/3 lg-h-full space-y-4 sm:space-y-6">
            <div className="bg-white shadow-md sm:shadow-lg shadow-[#0000004d] overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 md:h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]">
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h1 className="text-sm sm:text-md md:text-lg font-bold text-white text-center">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-457-3433" className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-sm sm:text-md font-bold bg-[#1e4d32] w-full text-white mb-3 px-4 py-2">
                Our Services
              </h3>
              <ul className="space-y-1 sm:space-y-2 p-2 sm:p-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-2 sm:px-3 py-1 sm:py-1.5 rounded transition text-sm sm:text-base ${location.pathname === service.path
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

      {/* 24/7 Section - Full Width */}
      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-12 sm:py-16 md:py-20 mt-8 sm:mt-10">
        <div className="w-full px-4 sm:w-11/12 sm:px-6 lg:w-10/12 lg:px-8 mx-auto">
          <p className="text-center text-[#245B3C] text-sm sm:text-base md:text-lg font-bold uppercase">24/7 Availability</p>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
            Emergency Tree Removal Services in Evansville, IN
          </h1>
          <div className="flex justify-center my-4 sm:my-5">
            <img decoding="async" src="/divider.png" alt="divider" title="divider" className="h-4 sm:h-6" />
          </div>
          <p className="text-center max-w-full mx-auto text-sm sm:text-base">
            Emergencies can happen at any time, which is why American Tree Experts Land
            provides 24/7 emergency services. When a tree is damaged or destroyed
            and could create an imminent danger to your home, you can count on us
            to be there when you need us most. We understand the urgency of these
            situations and will respond quickly to remove the tree from your
            property.
          </p>
          <h1 className="text-center text-sm sm:text-base font-semibold mt-4 sm:mt-6">
            Situations that require emergency tree removal services include:
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6 sm:mt-10 pb-6 sm:pb-10">
            <div className="h-full bg-white border-2 border-[#B0B694] p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/electricity.PNG"
                alt="Lightning damage"
                className="rounded-full h-20 sm:h-24 w-20 sm:w-24 border-4 sm:border-6 border-black shadow-sm shadow-black mx-auto mt-2 sm:mt-4 object-cover"
              />
              <p className="text-center mt-3 sm:mt-5 font-bold text-sm sm:text-base">
                Trees that have been damaged by lightning
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/wind.PNG"
                alt="Wind damage"
                className="rounded-full h-20 sm:h-24 w-20 sm:w-24 border-4 sm:border-6 border-black shadow-sm shadow-black mx-auto mt-2 sm:mt-4 object-cover"
              />
              <p className="text-center mt-3 sm:mt-5 font-bold text-sm sm:text-base">
                Trees damaged by high winds or storms
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/plug.PNG"
                alt="Power line danger"
                className="rounded-full h-20 sm:h-24 w-20 sm:w-24 border-4 sm:border-6 border-black shadow-sm shadow-black mx-auto mt-2 sm:mt-4 object-cover"
              />
              <p className="text-center mt-3 sm:mt-5 font-bold text-sm sm:text-base">
                Trees threatening power lines or structures
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/star.PNG"
                alt="Emergency services"
                className="rounded-full h-20 sm:h-24 w-20 sm:w-24 border-4 sm:border-6 border-black shadow-sm shadow-black mx-auto mt-2 sm:mt-4 object-cover"
              />
              <p className="text-center mt-3 sm:mt-5 font-bold text-sm sm:text-base">
                Trees at immediate risk of falling
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with side margins */}
      <div className="w-full px-4 sm:w-11/12 sm:px-6 lg:w-10/12 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-12 sm:mt-16 mb-12 sm:mb-16">
          <div className="relative lg:w-5/12 group shadow-lg shadow-black">
            <div className="absolute w-full h-full top-3 sm:top-4 md:top-5 -left-3 sm:-left-4 md:-left-5 bg-[#afb593] z-0"></div>
            <img
              src="/3.jpg"
              alt="Professional tree removal"
              className="relative w-full h-full object-bottom object-cover transform group-hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>
          <div className="lg:w-full pt-10">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
              Professional Tree Removal Services with Experienced Arborists in Evansville, IN.
            </h1>
            <img loading="lazy" decoding="async" src="/divider-d.png" alt="divider" title="divider-d" className="mt-3 sm:mt-5 shadow-2xl" />
            <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-5 text-gray-700 text-sm sm:text-base">
              <p>
                Tree removal is a process that requires professional knowledge and experience. That's why it's important to always hire a reputable tree service company for the job. DIY tree removal may appear to be a cheaper option, but it can quickly become expensive and dangerous if things don't go as planned.
              </p>
              <p>
                Arborists and tree care experts have the skills and experience necessary to properly remove trees. They understand the unique needs of each tree, allowing them to safely and effectively remove it while minimizing the impact on surrounding vegetation.
              </p>
              <p>
                Certain trees may be too close to power lines, buildings, or other structures. Proximity to these hazards is just one of the many factors that professional tree care experts take into consideration. The rules and regulations for tree removal in Evansville, IN can also be complex and you need an arborist to ensure your safety.
              </p>
            </div>
            <h1 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-gray-800">
              Experience Peace of Mind with Tree Removal Services from American Tree Experts Land in Evansville, IN
            </h1>
            <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">
              <p>
                At American Tree Experts Land, we have years of experience dealing with all types of tree projects. Our arborists and tree care experts will safely and effectively remove your trees – large or small – with care and precision.
              </p>
              <p>
                Our quality tree care services, excellent customer service, and competitive rates make us the top choice for tree removal services in Evansville, IN. We are fully licensed, insured, and bonded for your peace of mind. We always strive to exceed our client's expectations while providing the highest level of customer service.
              </p>
              <p>
                Whether it is tree pruning, tree trimming, stump removal, or any other lawn services, you can trust American Tree Experts Land to take care of all your tree needs at a fair price. Call us at
                {" "}
                <a href="812-457-3433" className="text-[#245b3c] hover:cursor-pointer">
                  812-457-3433
                </a>{" "}
                for a free quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeRemoval;