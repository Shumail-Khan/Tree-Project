import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "CYNTHIA CONCIATU",
      initial: "C",
      color: "bg-purple-600",
      rating: 5,
      text: "Ken's Tree Service came by yesterday to prune my grand live oak. The Arborist is familiar with HOA and and County pruning requirements and planned the project accordingly. Job done... read more"
    },
    {
      id: 2,
      name: "MICHELLE LAMMERS",
      initial: "M",
      color: "bg-orange-600",
      rating: 5,
      text: "Another great experience with Ken's Tree Service. We had a limb that failed and it took out our fence panel. Vince came out the next day to give us an... read more"
    },
    {
      id: 3,
      name: "CASSANDRA ARMSTRONG",
      initial: "C",
      color: "bg-teal-600",
      rating: 5,
      text: "The entire experience with Ken's was simple, fast, and effective. Vincent shared his experience and knowledge with us to ensure we understood the job at hand. The day-of crew and... read more",
      hasProfileImage: true
    },
    {
      id: 4,
      name: "DAVID KING",
      initial: "D",
      color: "bg-blue-600",
      rating: 5,
      text: "Ken's tree service did a fantastic job. They were punctual and efficient."
    },
    {
      id: 5,
      name: "BRANDY NORDMARK",
      initial: "B",
      color: "bg-blue-700",
      rating: 5,
      text: "They were quick to give me an estimate, completed the work right away. I needed this for an insurance issue and they were mindful of the insurance companies requests... read more"
    },
    {
      id: 6,
      name: "ERIC JOHNSON",
      initial: "E",
      color: "bg-gray-500",
      rating: 5,
      text: "Professional and prompt with service. I will be using Ken's Tree service again."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, reviews.length - 3) : Math.max(0, prevIndex - 3)
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-yellow-400 text-lg">★</span>
    ));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className=''>
      {/* Hero Section */}
      <div className="relative p-15">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-img.jpg"
            alt="Truck background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-700 bg-opacity-50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-6xl">
            <p className="text-5xl font-extrabold mb-5">LICENSED. TRAINED. INSURED.</p>
            <div className='flex justify-center mb-5'><img src="/divider-l.png" alt="" /></div>
            <p className="text-xl mb-6">
              Making the cut since 1997, we offer 5-star tree services for residential <br />
              and commercial properties of any size.
            </p>
            <button className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-6 mb-20 rounded-3xl transition duration-300">
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-white bg-[#B0B694]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Emergency Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img loading="lazy" decoding="async" src="/24_7.png" alt="24_7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Emergency Tree Service</h3>
            <p className="text-center">
              We understand that tree emergencies don't always occur during regular business hours.
              That is why we offer 24/7 emergency tree services to help protect your property
              and ensure the safety of your family.
            </p>
          </div>

          {/* Licensed and Insured */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img loading="lazy" decoding="async" src="licensed-and-insured.png" alt="licensed-and-insured" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Licensed and Insured</h3>
            <p className="text-center">
              We are proud of our team of arborists who offer professional tree care services for residential and commercial properties. Our arborists are licensed and insured to provide the highest quality of service for your tree care needs. With our team of arborists, you can rest assured that your trees will receive the best possible care.
            </p>
          </div>

          {/* Superior Service */}
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold mb-4 flex justify-center">
              <img loading="lazy" decoding="async" src="/superior-service.png" alt="superior-service" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Superior Service</h3>
            <p className="text-center">
              We strive to offer superior service and satisfaction for all our customers. We take the time to get to know you to provide personalized service and meet your individual needs. Our team is passionate about providing high-quality services that will leave you feeling satisfied with the results.
            </p>
          </div>
        </div>
      </div>
      <div><img loading="lazy" decoding="async" src="/ZigZag.png" alt="" className='w-full' /></div>

      {/* Our Services Section */}
      <div className="py-25 mx-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-md font-bold text-gray-900">OUR SERVICES</h2>
          <p className="text-3xl font-bold mb-3">
            We Offer Fast, Professional, and Reliable
            Tree Services
          </p>
          <div className='flex justify-center mb-3'>
            <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" />
          </div>
          <div className='text-xl font-semibold mb-6'>
            <p>Exceeding Our Client's Expectations</p>
          </div>
          <div className='flex justify-center'>
            <img loading="lazy" decoding="async" src="/badges.jpg" alt="badges" title="badges" />
          </div>
        </div>
      </div>

      {/* Boxes Section */}
      <div className='mx-15 sm:mx-6'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 lg:px-8">
          {/* First Row with 3 Boxes */}
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/tree-trimming-and-pruning.jpg" alt="Tree Trimming & Pruning" title='tree-trimming-pruning"' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Tree Trimming & Pruning</h1>
            <p className='px-3 text-center'>Our certified arborists offer professional tree trimming and pruning services to improve the health, safety, and aesthetic appeal of your trees. We use the latest techniques to ensure proper growth and optimal tree health</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/structural-pruning.jpg" alt="Structural Pruning" title="structural-pruning" className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Structural Pruning</h1>
            <p className='px-3 text-center'>Structural pruning involves cutting back branches to improve the overall structure of a tree and help it maintain its balance. This will reduce the risk of potential damage caused by strong winds or storms, as well as prevent limbs from interfering with utility wires or buildings.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/tree-removal.jpg" alt="Tree Removal" title='tree-removal' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Tree Removal</h1>
            <p className='px-3 text-center'>Tree removal is a dangerous task that should be left to professionals. Our experienced arborists use the latest safety equipment and techniques to perform tree removals safely and efficiently.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>
        </div>

        {/* Second Row with 4 Boxes */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 lg:px-8'>
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/land-clearing.jpg" alt="Land Clearing" title='land-clearing' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Land Clearing</h1>
            <p className='px-3 text-center'>Our land clearing services are designed for residential, commercial, and industrial properties. We will remove trees, stumps, brush, and other debris to free up space for development or construction projects.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/storm-cleanup.jpg" alt="Storm Clean Up" title='storm-cleanup' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Storm Clean Up</h1>
            <p className='px-3 text-center'>Our team is available 24/7 to respond to storm damage clean up. We have the experience and equipment to handle even the most difficult jobs quickly and safely.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/deep-root-fertilization.jpg" alt="Deep Root Fertilization" title='deep-root-fertilization' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Deep Root Fertilization</h1>
            <p className='px-3 text-center'>Deep root fertilization is an important part of maintaining healthy trees. Our certified arborists can inject nutrients directly into the roots of your trees to improve their health and vigor.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img src="/commercial-tree-services.jpg" alt="Commercial Tree Services" title='commercial-tree-services' className="w-full h-fit object-cover rounded-t-lg" />
            <h1 className="text-xl font-bold mt-4 text-center">Commercial Tree Services</h1>
            <p className='px-3 text-center'>We offer a variety of tree services for businesses including pruning, removal, stump grinding, and more. Our experienced arborists will work with you to ensure the safety and health of your trees while also protecting your bottom line.</p>
            <div className='flex justify-center'>
              <button className="mt-4 bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-2 px-4 rounded-3xl">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Request Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/tree-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply"></div>
        </div>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-extrabold">
              The Safety of Our Customers' Families, Homes, Businesses, and Assets Is Our Number One Priority.
            </blockquote>
            <h4 className="text-sm md:text-sm font-semibold px-4 text-gray-300">
              CONTACT US FOR MORE INFORMATION
            </h4>
            <a href="tel:+17279345804" className='font-extrabold text-5xl'>(727) 934-5804</a>
            <div className="mt-12">
              <button className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-6 mb-20 rounded-3xl transition duration-300">
                REQUEST A FREE ESTIMATE
              </button>
            </div>
          </div>
        </section>

        {/* Zigzag pattern at the bottom */}
        <div className="relative w-full h-8 bg-white">
          <div className="absolute inset-0 bg-[url('/tree-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply"></div>
          </div>
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id="zigzag-mask">
                <rect width="100%" height="100%" fill="black" />
                <polygon
                  points="0,40 30,0 60,40 90,0 120,40 150,0 180,40 210,0 240,40 270,0 300,40 330,0 360,40 390,0 420,40 450,0 480,40 510,0 540,40 570,0 600,40 630,0 660,40 690,0 720,40 750,0 780,40 810,0 840,40 870,0 900,40 930,0 960,40 990,0 1020,40 1050,0 1080,40 1110,0 1140,40 1170,0 1200,40 1200,40 0,40"
                  fill="white"
                />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="white" mask="url(#zigzag-mask)" />
          </svg>
        </div>
      </div>

      {/* About Us Section */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            {/* Header section */}
            <div className='mb-8'>
              <h3 className='text-green-700 text-md font-bold tracking-wider uppercase mb-4'>About Us</h3>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 leading-tight'>
                Arborists From Ken's Tree Service are All Highly<br />
                Trained Professionals.
              </h2>
            </div>

            {/* Decorative divider */}
            <div className='flex justify-center mb-8'>
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" className='h-4' />
            </div>

            {/* Main image */}
            <div className='mb-10'>
              <img
                loading="lazy"
                decoding="async"
                src="/about-img.jpg"
                alt="KEN'S TREE SERVICES"
                title="KEN'S TREE SERVICES"
                className='w-full rounded-lg shadow-lg'
              />
            </div>

            {/* Content paragraphs */}
            <div className='max-w-4xl mx-auto mb-8'>
              <p className='text-gray-600 text-base leading-relaxed mb-6'>
                At Ken's Tree Service, our team is committed to providing excellent customer service, and we are always here to answer any questions you may have. We take pride in our work and your satisfaction is our top priority. We understand that every situation is unique and requires individual attention to detail. We will take the time to understand your needs and create a plan of action that is both cost-effective and provides you with a safe, attractive result.
              </p>
              <p className='text-gray-600 text-base leading-relaxed'>
                Our experienced staff of Arborists brings expertise and professionalism to our services that are unmatched in the industry. From your initial call to the completion of your job, we strive for customer satisfaction every step of the way. At Ken's Tree Service, we take great pride in our work and look forward to serving you soon.
              </p>
            </div>

            {/* CTA Button */}
            <div className='flex justify-center'>
              <button className="bg-lime-600 hover:bg-lime-700 hover:rounded text-white font-bold py-3 px-8 rounded-full transition duration-300 tracking-wide">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className='py-20 px-4 sm:px-6 lg:px-8 bg-[#e2e5d2]'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            {/* Header section */}
            <div className='mb-8'>
              <h3 className='text-green-700 text-md font-bold tracking-wider uppercase mb-4'>Testimonials</h3>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center'>
                Checkout What Our Satisfied <br />
                Customers Have to Say About Us
              </h2>
            </div>

            {/* Decorative divider */}
            <div className='flex justify-center mb-8'>
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" className='h-4' />
            </div>

            {/* Content paragraphs */}
            <div className='max-w-4xl mx-auto mb-8'>
              <p className='text-gray-600 text-base leading-relaxed mb-6'>
                Our customers trust us to get the job done right, every time. Hear what they have to say
              </p>
            </div>
            <div className="bg-gray-100 p-8 relative">
              <div className="max-w-6xl mx-auto">
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-lg z-10 transition-all"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-lg z-10 transition-all"
                  disabled={currentIndex + 3 >= reviews.length}
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {visibleReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      {/* Review Content */}
                      <div className="p-6">
                        {/* Stars */}
                        <div className="flex mb-3">
                          {renderStars(review.rating)}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {review.text}
                        </p>

                        {/* Google Logo */}
                        <div className="flex justify-end mb-4">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg viewBox="0 0 24 24" className="w-5 h-5">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Customer Info */}
                      <div className="bg-green-700 px-6 py-4 flex items-center">
                        <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center mr-4`}>
                          {review.hasProfileImage ? (
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                              <span className="text-green-700 font-bold text-lg">{review.initial}</span>
                            </div>
                          ) : (
                            <span className="text-white font-bold text-lg">{review.initial}</span>
                          )}
                        </div>
                        <span className="text-white font-semibold text-sm tracking-wide">
                          {review.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index * 3)}
                      className={`w-3 h-3 rounded-full transition-all ${Math.floor(currentIndex / 3) === index
                        ? 'bg-gray-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Choice Section */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            {/* Header section */}
            <div className='mb-8'>
              <h3 className='text-green-700 text-md font-bold tracking-wider uppercase mb-4'>Why Choose Us</h3>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 leading-tight'>
                We Always Deliver On Our Promise Of Safe,<br />
                Reliable, & Professional Tree Services
              </h2>
            </div>
            {/* Decorative divider */}
            <div className='flex justify-center mb-8'>
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" className='h-4' />
            </div>
            <div className='max-w-4xl mx-auto mb-8'>
              <p className='text-gray-600 text-base leading-relaxed mb-6'>
                Our tree services are a cut above the rest so count on us to consistently deliver safe, dependable, and expert assistance.
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-8xl mb-10 mx-auto flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:gap-12'>
          <div className='flex-1 max-w-xl mx-auto'>
            <div className='mb-5 flex justify-center'>
              <img loading="lazy" decoding="async" src="/high-quality-services.png" alt="high-quality-services" />
            </div>
            <div className=''>
              <h4 className='pb-3 text-xl font-semibold text-center text-gray-800'>High Quality Services</h4>
              <p className='text-center text-gray-600 font-semibold text-sm leading-relaxed'>We strive to provide the highest quality services in the industry. Our experienced arborists are trained in their field, so you can trust that your trees are being taken care of by professionals.</p>
            </div>
          </div>
          <div className='flex-1 max-w-xl mx-auto'>
            <div className='mb-5 flex justify-center'>
              <img loading="lazy" decoding="async" src="/24-hours-emergency.png" alt="24-hours-emergency" />
            </div>
            <div className=''>
              <h4 className='pb-3 text-xl font-semibold text-center text-gray-800'>24 Hours Emergency</h4>
              <p className='text-center text-gray-600 font-semibold text-sm leading-relaxed'>In an emergency, timing is everything. We offer 24/7 emergency services to ensure that your trees are taken care of as quickly and safely as possible.</p>
            </div>
          </div>
          <div className='flex-1 max-w-xl mx-auto'>
            <div className='mb-5 flex justify-center'>
              <img loading="lazy" decoding="async" src="/wxpert-technical-support.png" alt="expert-technical-support" />
            </div>
            <div className=''>
              <h4 className='pb-3 text-xl font-semibold text-center text-gray-800'>Expert Technical Support</h4>
              <p className='text-center text-gray-600 font-semibold text-sm leading-relaxed'>Our experts can provide advice and assistance on the best course of action for any tree-related issue you may be experiencing.</p>
            </div>
          </div>
        </div>

        <div className='max-w-8xl mx-auto flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:gap-12'>
          <div className='flex-1 max-w-xl mx-auto'>
            <div className='mb-5 flex justify-center'>
              <img loading="lazy" decoding="async" src="/friendly-customer-service.png" alt="friendly-customer-service" />
            </div>
            <div className=''>
              <h4 className='pb-3 text-xl font-semibold text-center text-gray-800'>Friendly Customer Service</h4>
              <p className='text-center text-gray-600 font-semibold text-sm leading-relaxed'>We pride ourselves on providing excellent customer service. Our team is always available to answer any questions you may have and provide assistance throughout the process.</p>
            </div>
          </div>
          <div className='flex-1 max-w-xl mx-auto'>
            <div className='mb-5 flex justify-center'>
              <img loading="lazy" decoding="async" src="/on-time-service.png" alt="on-time-service" />
            </div>
            <div className=''>
              <h4 className='pb-3 text-xl font-semibold text-center text-gray-800'>On Time Service</h4>
              <p className='text-center text-gray-600 font-semibold text-sm leading-relaxed'>We understand that time is money, so we guarantee prompt service for all jobs. Our team will work tirelessly to finish the job quickly and efficiently without compromising quality.</p>
            </div>
          </div>
          <div className='flex-1 max-w-xl mx-auto'>
            <div className='mb-5 flex justify-center'>
              <img loading="lazy" decoding="async" src="/satisfaction-guaranteed.png" alt="satisfaction-guaranteed" />
            </div>
            <div className=''>
              <h4 className='pb-3 text-xl font-semibold text-center text-gray-800'>Satisfaction Guaranteed</h4>
              <p className='text-center text-gray-600 font-semibold text-sm leading-relaxed'>Your satisfaction is our top priority. We take great pride in our work, and you can trust that we will always provide the best service possible.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas and Map */}
      <div className="relative">
        <div className="absolute inset-0 bg-fixed bg-[url('/map-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply"></div>
        </div>
        <div className='relative'>
          <div className='w-full flex'>
            <div className='w-1/2 flex flex-col ml-10'>
              <div className='pt-5 mb-3'>
                <h3 className='text-white text-md font-bold'>Service Areas</h3>
                <h4 className='text-3xl md:text-4xl font-bold mb-3 text-white'>
                  As a Locally Owned Company,<br />
                  We Offer Honest Work,<br />
                  At Highly Competitive Rates!<br />
                </h4>
              </div>
              <div className='mb-5'>
                <img loading="lazy" decoding="async" src="/divider-l.png" alt="divider" title="divider-l" />
              </div>
              <div>
                <p className='text-white'>At Ken's Tree Service, We Bring Expertise and Professionalism to Your Neighborhood. We proudly serve the following <br />areas:</p>
              </div>

              {/* Locations */}
              <div className='grid grid-cols-2'>
                <div className='flex flex-col mt-10'>
                  <div className='ml-5'>
                    <div className='mb-3 flex'>
                      <div>
                        <img loading="lazy" decoding="async" src="/loc.png" alt="location pin" title="Home 22" />
                      </div>
                      <div className='pl-3'>
                        <h4 className='pb-2 font-semibold text-white'>Tarpon Springs FL</h4>
                      </div>
                    </div>
                  </div>

                  <div className='ml-5'>
                    <div className='mb-3 flex'>
                      <div>
                        <img loading="lazy" decoding="async" src="/loc.png" alt="location pin" title="Home 22" />
                      </div>
                      <div className='pl-3'>
                        <h4 className='pb-2 font-semibold text-white'>Palm Harbor FL</h4>
                      </div>
                    </div>
                  </div>

                  <div className='ml-5'>
                    <div className='mb-3 flex'>
                      <div>
                        <img loading="lazy" decoding="async" src="/loc.png" alt="location pin" title="Home 22" />
                      </div>
                      <div className='pl-3'>
                        <h4 className='pb-2 font-semibold text-white'>Dunedin FL</h4>
                      </div>
                    </div>
                  </div>

                  <div className='ml-5'>
                    <div className='mb-3 flex'>
                      <div>
                        <img loading="lazy" decoding="async" src="/loc.png" alt="location pin" title="Home 22" />
                      </div>
                      <div className='pl-3'>
                        <h4 className='pb-2 font-semibold text-white'>Safety Harbor FL</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col mt-10'>
                  <div className='ml-5'>
                    <div className='mb-3 flex'>
                      <div>
                        <img loading="lazy" decoding="async" src="/loc.png" alt="location pin" title="Home 22" />
                      </div>
                      <div className='pl-3'>
                        <h4 className='pb-2 font-semibold text-white'>Clearwater FL</h4>
                      </div>
                    </div>
                  </div>

                  <div className='ml-5'>
                    <div className='mb-3 flex'>
                      <div>
                        <img loading="lazy" decoding="async" src="/loc.png" alt="location pin" title="Home 22" />
                      </div>
                      <div className='pl-3'>
                        <h4 className='pb-2 font-semibold text-white'>Oldsmar FL</h4>
                      </div>
                    </div>
                  </div>

                  <div className='ml-5'>
                    <div className='mb-3 flex'>
                      <div>
                        <img loading="lazy" decoding="async" src="/loc.png" alt="location pin" title="Home 22" />
                      </div>
                      <div className='pl-3'>
                        <h4 className='pb-2 font-semibold text-white'>New Port Richey FL</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-1/2 flex items-center justify-center">
              <div className="w-full max-w-5xl h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225160.11281292414!2d-82.686871!3d28.142629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28d77d54fea53%3A0xb5b559b2b13495d4!2sKen&#39;s%20Tree%20Service%2C%20Inc!5e0!3m2!1sen!2sus!4v1753428384528!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 border-0 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center'>
            {/* Header section */}
            <div className='mb-8'>
              <h3 className='text-green-700 text-md font-bold tracking-wider uppercase mb-4'>Photo Gallery</h3>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 leading-tight'>
                Checkout Some Of Our Latest Projects
              </h2>
            </div>
            {/* Decorative divider */}
            <div className='flex justify-center mb-8'>
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" title="divider" className='h-4' />
            </div>
            <div className='max-w-4xl mx-auto mb-8'>
              <p className=' text-base leading-relaxed mb-6'>
                Explore Our Work: Creating a Safer, More Attractive Environment Through Expert Tree Services.
              </p>
            </div>
            <div className='mx-20'>
              <img loading="lazy" decoding="async" src="/latest-projects.jpg" alt="latest projects" title="latest-projects" />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='py-10 mx-30 flex'>
          <div className='mr-30'>
              <div className='shadow-xl shadow-black w-full h-full'>
                <img className='rounded-2xl' loading="lazy" decoding="async" src="/contact-us-img.jpg" alt="contact us" title="contact-us-img" />
              </div>
          </div>


          <div className="mt-10 mb-3">
            {/* Heading Section */}
            <h3 className="text-green-900 text-sm font-extrabold tracking-wider uppercase mb-4">
              Location
            </h3>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Our Team Of Licensed and Insured <br />
              Tree Care Specialists Work <br />
              Professionally and Efficiently <br />
              to Ensure Quality Work.
            </h2>

            {/* Star Divider */}
            <div className="py-5">
              <img
                src="/divider.png"
                alt="divider"
                className="h-4"
              />
            </div>

            {/* Contact Boxes */}
            <div className="flex flex-col gap-3">

              {/* Address */}
              <a
                href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225225.6190363607!2d-82.749315!3d28.1114504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28d77d54fea53%3A0xb5b559b2b13495d4!2sKen&#39;s%20Tree%20Service%2C%20Inc!5e0!3m2!1sen!2s!4v1753439811937!5m2!1sen!2s"
                className="flex items-center bg-[#b0b694] rounded-sm overflow-hidden"
              >
                <div className="bg-green-900 w-12 h-12 flex items-center justify-center">
                  <img src="/loc-w.png" alt="Location Icon" className="w-5 h-5" />
                </div>
                <span className="text-white text-[15px] font-bold ml-3">
                  Tarpon Springs, Florida 34688
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+17279345804"
                className="flex items-center bg-[#b0b694] rounded-sm overflow-hidden"
              >
                <div className="bg-green-900 w-12 h-12 flex items-center justify-center">
                  <img src="/phone-w.png" alt="Phone Icon" className="w-5 h-5" />
                </div>
                <span className="text-white text-[15px] font-bold ml-3">
                  (727) 934–5804
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:support@kens-tree-service.com"
                className="flex items-center bg-[#b0b694] rounded-sm overflow-hidden"
              >
                <div className="bg-green-900 w-12 h-12 flex items-center justify-center">
                  <img src="/email-w.png" alt="Email Icon" className="w-5 h-5" />
                </div>
                <span className="text-white text-[15px] font-bold ml-3">
                  support@kens-tree-service.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;