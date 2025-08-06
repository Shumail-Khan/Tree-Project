import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {
    FaFacebookF,
    FaPhoneVolume,
    FaEnvelope,
    FaInstagram,
    FaLocationDot,
    FaGoogle,
    FaAngleDown,
    FaAngleUp,
    FaXmark,
    FaBars
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
    const backendLink = useSelector((state) => state.prod.link);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showEstimateForm, setShowEstimateForm] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceRequested: '',
        receiveInfo: false
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (menu) => {
        if (!isMobile) {
            setActiveDropdown(menu);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (menu) => {
        if (isMobile) {
            setActiveDropdown(activeDropdown === menu ? null : menu);
        }
    };

    const toggleEstimateForm = () => {
        setShowEstimateForm(!showEstimateForm);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`${backendLink}/api/testimonials/submit-estimate`, formData);
            console.log("Form submitted successfully:", response.data);
            if (response.status === 201) {
                alert('Estimate submitted successfully! We will contact you soon.');
            }

        }catch(err){
            console.error("Error submitting form:", err);
        }
        setShowEstimateForm(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            serviceRequested: '',
            receiveInfo: false
        });
    };

    const servicesItems = [
        { name: "TREE REMOVAL", path: "/services/tree-removal/" },
        { name: "TREE TRIMMING & PRUNING", path: "/services/tree-trimming-pruning/" },
        { name: "STRUCTURAL PRUNING", path: "/services/structural-pruning/" },
        { name: "LAND CLEARING", path: "/services/land-clearing/" },
        { name: "STORM CLEAN UP", path: "/services/storm-clean-up/" },
        { name: "COMMERCIAL TREE SERVICES", path: "/services/commercial-tree-services/" }
    ];

    const serviceAreasItems = [
        { name: "EVANSVILLE, IN ", path: "/service-areas/tree-service-evansville-in/" },
        { name: "NEWBURGH, IN", path: "/service-areas/tree-service-newburgh-in/" },
        { name: "BOONVILLE, IN", path: "/service-areas/tree-service-boonville-in/" },
        { name: "HENDERSON, KY", path: "/service-areas/tree-service-henderson-ky/" },
        { name: "WARRICK COUNTY", path: "/service-areas/tree-service-warrick-county/" }
    ];

    const aboutUsItems = [
        { name: "TESTIMONIALS", path: "/testimonials" }
    ];

    return (
        <header className="bg-white relative">
            {/* Top contact/social bar */}
            <div className='mx-4 lg:mx-10 py-2 lg:py-4 items-center flex justify-between text-xs lg:text-sm'>
                <div className='flex space-x-2 lg:space-x-4'>
                    <a
                        href="https://www.facebook.com/kenstrees"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Facebook"
                        className="hover:text-green-600 transition-colors duration-200"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://search.google.com/local/writereview?placeid=ChIJU-pP1XeNwogR1JU0sbJZtbU"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Google"
                        className="hover:text-green-600 transition-colors duration-200"
                    >
                        <FaGoogle />
                    </a>
                    <a
                        href="https://www.instagram.com/kenstreeserviceinc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow on Instagram"
                        className="hover:text-green-600 transition-colors duration-200"
                    >
                        <FaInstagram />
                    </a>
                </div>
                <div className='hidden md:flex space-x-2 lg:space-x-6'>
                    <a
                        href="https://www.google.com/maps/place/Ken's+Tree+Service/@28.1114504,-82.749315,11z/data=!4m2!3m1!1s0x0:0xb5b559b2b13495d4?sa=X&hl=en-US&gl=us&ved=2ahUKEwi607afwKf9AhUcg2oFHfvYCqoQ_BJ6BAh5EAg"
                        className="flex items-center space-x-1 hover:text-green-600 transition-colors duration-200"
                    >
                        <FaLocationDot className="text-green-600" />
                        <p>Evansville, IN</p>
                    </a>

                    <a
                        href="mailto:Thetreexperts@gmail.com"
                        className="flex items-center space-x-1 hover:text-green-600 transition-colors duration-200"
                    >
                        <FaEnvelope className="text-green-600" />
                        <p>Thetreexperts@gmail.com</p>
                    </a>
                </div>
            </div>

            {/* Main header with logo and phone */}
            <div className='flex justify-between items-center border-t-3 border-b border-gray-200 px-4 lg:px-10 py-4 lg:py-8'>
                <div className="flex items-center">
                    <a href="/">
                        <img 
                            src="/logo.jpg" 
                            alt="American Tree Experts Land Logo" 
                            className="h-20 scale-100 lg:h-25 w-fit object-contain rounded-full shadow-lg shadow-black" 
                        />
                    </a>
                </div>

                <div className="flex items-center space-x-2 lg:space-x-6">
                    <div className="hidden md:flex items-center space-x-2">
                        <FaPhoneVolume className="text-green-600 text-lg lg:text-xl" />
                        <div>
                            <a href="tel:812-457-3433" className="hover:text-green-600 transition-colors duration-200">
                                <p className="text-xs lg:text-sm">CALL FOR MORE INFORMATION</p>
                                <p className="text-sm lg:text-lg font-bold">812-457-3433</p>
                            </a>
                        </div>
                    </div>
                    <button
                        onClick={toggleEstimateForm}
                        className="bg-[#afb236] hover:bg-[#908927] text-white px-3 py-2 lg:px-6 lg:py-3 rounded-3xl font-bold transition-colors duration-200 text-xs lg:text-base"
                    >
                        {isMobile ? 'FREE ESTIMATE' : 'REQUEST A FREE ESTIMATE'}
                    </button>
                    <button 
                        onClick={toggleMobileMenu}
                        className="lg:hidden text-gray-700 ml-2"
                    >
                        <FaBars className="text-xl" />
                    </button>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="bg-[#245B3C] relative hidden lg:block">
                <ul className="flex w-full justify-center space-x-4 lg:space-x-8 text-white font-medium">
                    <li className="hover:bg-[#afb236] px-2 lg:px-4">
                        <Link to="/" className="flex items-center py-2">HOME</Link>
                    </li>

                    <li className="relative group">
                        <div className="flex items-center">
                            <Link
                                to="/about-us"
                                className="flex items-center py-2 hover:bg-[#afb236] px-2 lg:px-4"
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}
                            >
                                ABOUT US
                                {activeDropdown === 'about' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                            </Link>
                        </div>
                        {activeDropdown === 'about' && (
                            <ul
                                className="absolute left-0 mt-0 w-48 bg-[#245B3C] text-white shadow-lg z-50 py-5 border-t-[#90A995] border-t-2"
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {aboutUsItems.map((item, index) => (
                                    <li key={index} className="">
                                        <Link 
                                            to={item.path} 
                                            className="hover:bg-[#afb236] transition-colors duration-200 block px-4 py-1"
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <div className="flex items-center">
                            <Link
                                to="/services"
                                className="flex items-center py-2 hover:bg-[#afb236] px-2 lg:px-4"
                                onMouseEnter={() => handleMouseEnter('services')}
                                onMouseLeave={handleMouseLeave}
                            >
                                SERVICES
                                {activeDropdown === 'services' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                            </Link>
                        </div>
                        {activeDropdown === 'services' && (
                            <ul
                                className="absolute left-0 mt-0 w-64 bg-[#245B3C] text-white shadow-lg z-50 py-5 border-t-[#90A995] border-t-2"
                                onMouseEnter={() => handleMouseEnter('services')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {servicesItems.map((item, index) => (
                                    <li key={index} className="">
                                        <Link 
                                            to={item.path} 
                                            className="hover:bg-[#afb236] transition-colors duration-200 block px-4 py-1"
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <div className="flex items-center">
                            <Link
                                to="/service-areas"
                                className="flex items-center py-2 hover:bg-[#afb236] px-2 lg:px-4"
                                onMouseEnter={() => handleMouseEnter('areas')}
                                onMouseLeave={handleMouseLeave}
                            >
                                SERVICE AREAS
                                {activeDropdown === 'areas' ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                            </Link>
                        </div>
                        {activeDropdown === 'areas' && (
                            <ul
                                className="absolute left-0 mt-0 w-64 bg-[#245B3C] text-white shadow-lg z-50 py-5 border-t-[#90A995] border-t-2"
                                onMouseEnter={() => handleMouseEnter('areas')}
                                onMouseLeave={handleMouseLeave}
                            >
                                {serviceAreasItems.map((item, index) => (
                                    <li key={index} className="">
                                        <Link 
                                            to={item.path} 
                                            className="hover:bg-[#afb236] transition-colors duration-200 block px-4 py-1"
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className="hover:bg-[#afb236] px-2 lg:px-4">
                        <Link to="/photo-gallery" className="flex items-center py-2">PHOTO GALLERY</Link>
                    </li>
                    <li className="hover:bg-[#afb236] px-2 lg:px-4">
                        <Link to="/contact-us" className="flex items-center py-2">CONTACT US</Link>
                    </li>
                    <li className="hover:bg-[#afb236] px-2 lg:px-4">
                        <Link to="/blog" className="flex items-center py-2">BLOG</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="bg-[#245B3C] lg:hidden">
                    <ul className="flex flex-col text-white font-medium">
                        <li className="hover:bg-[#afb236] border-b border-[#90A995]">
                            <Link 
                                to="/" 
                                className="flex items-center py-3 px-4"
                                onClick={toggleMobileMenu}
                            >
                                HOME
                            </Link>
                        </li>

                        <li className="border-b border-[#90A995]">
                            <div 
                                className="flex items-center justify-between py-3 px-4 hover:bg-[#afb236] cursor-pointer"
                                onClick={() => toggleDropdown('about')}
                            >
                                <span>ABOUT US</span>
                                {activeDropdown === 'about' ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            {activeDropdown === 'about' && (
                                <ul className="bg-[#1a4a2d]">
                                    {aboutUsItems.map((item, index) => (
                                        <li key={index} className="border-t border-[#90A995]">
                                            <Link 
                                                to={item.path} 
                                                className="hover:bg-[#afb236] transition-colors duration-200 block py-2 px-8"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="border-b border-[#90A995]">
                            <div 
                                className="flex items-center justify-between py-3 px-4 hover:bg-[#afb236] cursor-pointer"
                                onClick={() => toggleDropdown('services')}
                            >
                                <span>SERVICES</span>
                                {activeDropdown === 'services' ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            {activeDropdown === 'services' && (
                                <ul className="bg-[#1a4a2d]">
                                    {servicesItems.map((item, index) => (
                                        <li key={index} className="border-t border-[#90A995]">
                                            <Link 
                                                to={item.path} 
                                                className="hover:bg-[#afb236] transition-colors duration-200 block py-2 px-8"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="border-b border-[#90A995]">
                            <div 
                                className="flex items-center justify-between py-3 px-4 hover:bg-[#afb236] cursor-pointer"
                                onClick={() => toggleDropdown('areas')}
                            >
                                <span>SERVICE AREAS</span>
                                {activeDropdown === 'areas' ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                            {activeDropdown === 'areas' && (
                                <ul className="bg-[#1a4a2d]">
                                    {serviceAreasItems.map((item, index) => (
                                        <li key={index} className="border-t border-[#90A995]">
                                            <Link 
                                                to={item.path} 
                                                className="hover:bg-[#afb236] transition-colors duration-200 block py-2 px-8"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="hover:bg-[#afb236] border-b border-[#90A995]">
                            <Link 
                                to="/photo-gallery" 
                                className="flex items-center py-3 px-4"
                                onClick={toggleMobileMenu}
                            >
                                PHOTO GALLERY
                            </Link>
                        </li>
                        <li className="hover:bg-[#afb236] border-b border-[#90A995]">
                            <Link 
                                to="/contact-us" 
                                className="flex items-center py-3 px-4"
                                onClick={toggleMobileMenu}
                            >
                                CONTACT US
                            </Link>
                        </li>
                        <li className="hover:bg-[#afb236] border-b border-[#90A995]">
                            <Link 
                                to="/blog" 
                                className="flex items-center py-3 px-4"
                                onClick={toggleMobileMenu}
                            >
                                BLOG
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Estimate Request Modal */}
            {showEstimateForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={toggleEstimateForm}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FaXmark className="text-xl" />
                        </button>

                        <div className="p-6 md:p-8">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                                Get a Free Estimate
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 md:mb-4">
                                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1 md:mb-2">
                                        Full Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div className="mb-3 md:mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1 md:mb-2">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div className="mb-3 md:mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1 md:mb-2">
                                        Phone*
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div className="mb-3 md:mb-4">
                                    <label htmlFor="serviceRequested" className="block text-gray-700 font-medium mb-1 md:mb-2">
                                        Service Requested*
                                    </label>
                                    <select
                                        id="serviceRequested"
                                        name="serviceRequested"
                                        value={formData.serviceRequested}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="">Select a service</option>
                                        {servicesItems.map((service, index) => (
                                            <option key={index} value={service.name}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4 md:mb-6 flex items-start">
                                    <input
                                        type="checkbox"
                                        id="receiveInfo"
                                        name="receiveInfo"
                                        checked={formData.receiveInfo}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                                    />
                                    <label htmlFor="receiveInfo" className="ml-2 block text-gray-700 text-sm md:text-base">
                                        I confirm that I want to receive helpful info and discounted offers from this company
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 rounded-md transition-colors duration-200"
                                >
                                    Submit Info
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;