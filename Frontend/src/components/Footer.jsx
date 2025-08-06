import { useState } from 'react';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Footer = () => {
    const backendLink = useSelector((state) => state.prod.link);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceRequested: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        // Reset form status when modal is closed
        if (!isModalOpen) {
            setSubmitStatus(null);
            setFormErrors({});
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                serviceRequested: '',
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate required fields
        const errors = {};
        if (!formData.fullName.trim()) errors.fullName = "Full name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) errors.phone = "Phone is required";
        if (!formData.serviceRequested) errors.serviceRequested = "Service is required";
        
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            setSubmitStatus('submitting');
            const response = await axios.post(`${backendLink}/api/testimonials/submit-estimate`, {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                serviceRequested: formData.serviceRequested
            });

            if (response.data.success) {
                setSubmitStatus('success');
                // Auto-close after 3 seconds
                setTimeout(() => {
                    toggleModal();
                }, 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus('error');
        }
    };

    return (
        <footer className="w-full">
            {/* CTA Section */}
            <div className="relative">
                <div className="absolute inset-0 [background-image:linear-gradient(180deg,rgba(27,71,48,0.87)_0%,rgba(27,71,48,0.93)_99%),url('/cta2.jpg')] bg-cover bg-center">
                </div>

                <div className="relative z-10 py-12 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                        {/* ... existing CTA content ... */}
                        <div className="mb-6 md:mb-8 max-w-3xl">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white px-2">
                                We Provide Residential and Commercial Tree Services in Evansville, IN & The Surrounding Areas
                            </h3>
                            <h4 className="text-xs sm:text-sm font-semibold mt-2 mb-3 text-gray-300">
                                CONTACT US FOR MORE INFORMATION
                            </h4>
                            <a href='tel:812-457-3433' className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white hover:text-green-300 transition-colors">
                                812-457-3433
                            </a>
                        </div>
                        <div>
                            <button 
                                onClick={toggleModal}
                                className="bg-green-600 hover:bg-green-700 hover:rounded-2xl text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300"
                            >
                                REQUEST A FREE ESTIMATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estimate Request Modal */}
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
                        
                        {submitStatus === 'success' ? (
                            <div className="text-center py-8">
                                <div className="text-green-500 text-5xl mb-4">✓</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                <p className="text-gray-600">Your estimate request has been submitted successfully.</p>
                                <p className="text-gray-600">We'll contact you shortly.</p>
                            </div>
                        ) : (
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
                                        className={`w-full border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                                    />
                                    {formErrors.fullName && <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>}
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
                                        className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                                    />
                                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
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
                                        className={`w-full border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                                    />
                                    {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                                </div>

                                <div>
                                    <label htmlFor="serviceRequested" className="block text-sm font-medium text-gray-700 mb-1">
                                        Service Requested *
                                    </label>
                                    <select
                                        id="serviceRequested"
                                        name="serviceRequested"
                                        required
                                        value={formData.serviceRequested}
                                        onChange={handleInputChange}
                                        className={`w-full border ${formErrors.serviceRequested ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="TREE REMOVAL">Tree Removal</option>
                                        <option value="TREE TRIMMING & PRUNING">Tree Trimming & Pruning</option>
                                        <option value="STRUCTURAL PRUNING">Structural Pruning</option>
                                        <option value="LAND CLEARING">Land Clearing</option>
                                        <option value="STORM CLEAN UP">Storm Clean Up</option>
                                        <option value="COMMERCIAL TREE SERVICES">Commercial Tree Services</option>
                                    </select>
                                    {formErrors.serviceRequested && <p className="mt-1 text-sm text-red-600">{formErrors.serviceRequested}</p>}
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                        There was an error submitting your request. Please try again.
                                    </div>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={submitStatus === 'submitting'}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}

             <div className="bg-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Company Info Section */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="mb-4 md:mb-6">
                                <img
                                    src="/logo.jpg"
                                    alt="American Tree Experts Land Logo"
                                    className="h-20 md:h-25 w-auto mb-3 rounded-full"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-4 md:mb-6 text-gray-700 text-sm leading-relaxed">
                                Are trees on your property dying, falling down, or causing you concern? 
                                We are ready to hear from you! If you have dying trees, ugly stumps, 
                                or just need your landscape cleaned up from fallen debris, reach out today.
                            </div>
                            <div className="flex space-x-3">
                                <a
                                    href="https://www.facebook.com/kenstrees"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Follow on Facebook"
                                    className="text-gray-600 hover:text-green-600 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF size={16} />
                                </a>
                                <a
                                    href="https://search.google.com/local/writereview?placeid=ChIJU-pP1XeNwogR1JU0sbJZtbU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Follow on Google"
                                    className="text-gray-600 hover:text-green-600 transition-colors"
                                    aria-label="Google"
                                >
                                    <FaGoogle size={16} />
                                </a>
                                <a
                                    href="https://www.instagram.com/kenstreeserviceinc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Follow on Instagram"
                                    className="text-gray-600 hover:text-green-600 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="sm:col-span-1">
                            <div className="mb-2 md:mb-3">
                                <h3 className="font-bold text-base md:text-lg text-gray-800">SERVICES</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-12 md:w-16 mb-3 md:mb-4"></div>
                            <ul className="space-y-1 md:space-y-2 text-xs sm:text-sm list-disc list-inside">
                                <li>
                                    <Link to="/services/tree-removal" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Tree Removal
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/tree-trimming-pruning/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Tree Trimming & Pruning
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/structural-pruning/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Structural Pruning
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/land-clearing/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Land Clearing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/storm-clean-up/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Storm Clean Up
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/commercial-tree-services/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Commercial Tree Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Service Areas Section */}
                        <div className="sm:col-span-1">
                            <div className="mb-2 md:mb-3">
                                <h3 className="font-bold text-base md:text-lg text-gray-800">SERVICE AREAS</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-12 md:w-16 mb-3 md:mb-4"></div>
                            <ul className="space-y-1 md:space-y-2 text-xs sm:text-sm list-disc list-inside">
                                <li>
                                    <Link to="/service-areas/tree-service-evansville-in" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Evansville, IN
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-areas/tree-service-new-port-richey-fl" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Newburgh, IN
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service-areas/tree-service-boonville-in/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Boonville, IN
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service-areas/tree-service-henderson-ky/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Henderson, KY
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service-areas/tree-service-warrick-county/" className="text-gray-700 hover:text-green-600 transition-colors">
                                        Warrick County
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us Section */}
                        <div className="sm:col-span-1">
                            <div className="mb-2 md:mb-3">
                                <h3 className="font-bold text-base md:text-lg text-gray-800">CONTACT US</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-12 md:w-16 mb-3 md:mb-4"></div>
                            <div className="space-y-1 md:space-y-2 text-xs sm:text-sm text-gray-700">
                                <p>Evansville, IN</p>
                                <p>
                                    <a href="mailto:Thetreexperts@gmail.com" className="hover:text-green-600 transition-colors">
                                        Thetreexperts@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:812-457-3433" className="hover:text-green-600 transition-colors">
                                        812-457-3433
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Location Section */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="mb-2 md:mb-3">
                                <h3 className="font-bold text-base md:text-lg text-gray-800">LOCATION</h3>
                            </div>
                            <div className="border-t-2 border-gray-300 w-12 md:w-16 mb-3 md:mb-4"></div>
                            <div className="w-full h-40 sm:h-48">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.2020490645464!2d-87.4793165!3d38.0656754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886e2ad3f420ed75%3A0xd5397d7cfad2e97d!2sAmerican%20Tree%20Experts%20%26%20Landscaping!5e0!3m2!1sen!2sus!4v1754077737958!5m2!1sen!2sus"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded"
                                    // title="Ken's Tree Service Location"
                                    title="American Tree Experts & Landscaping Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-[#B0B694] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">

                        {/* Left Section - Copyright and Links */}
                        <div className="text-xs sm:text-sm space-y-1 md:space-y-2 text-center md:text-left">
                            <div>
                                <p>© 2025 <span className="font-medium">American Tree Experts, Land LLC</span>. All Rights Reserved.</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1">
                                <Link to="/" className="text-white hover:text-green-400 transition-colors">
                                    Home
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/blog" className="text-white hover:text-green-400 transition-colors">
                                    Blog
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/privacy-policy" className="text-white hover:text-green-400 transition-colors">
                                    Privacy Policy
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/sitemap" className="text-white hover:text-green-400 transition-colors">
                                    Sitemap
                                </Link>
                                <span className="text-white mx-1">|</span>
                                <Link to="/contact-us" className="text-white hover:text-green-400 transition-colors">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Center Section - Payment Methods */}
                        <div className="flex-shrink-0 order-first md:order-none">
                            <img
                                src="/ss-pm.png"
                                alt="Accepted payment methods - Mastercard, Visa, American Express, Discover, and more"
                                className="h-8 sm:h-10 md:h-12 w-auto"
                                loading="lazy"
                            />
                        </div>

                        {/* Right Section - Powered by Tree Service Digital */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <a
                                href="https://treeservicedigital.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                                aria-label="Tree Service Digital"
                            >
                                <img
                                    src="/treeservicedigital-logo.png"
                                    alt="Tree Service Digital"
                                    className="h-8 sm:h-10 w-auto"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rest of your existing footer content... */}
            {/* ... keep all other footer sections exactly the same ... */}
        </footer>
    );
};

export default Footer;