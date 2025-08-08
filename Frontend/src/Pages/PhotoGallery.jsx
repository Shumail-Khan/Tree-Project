import { useState, useEffect } from 'react';
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useSelector } from 'react-redux';

const ITEMS_PER_PAGE = 12;

const PhotoGallery = () => {
    const pictures = [
        { src: '/public/tree-1.jpeg' },
        { src: '/public/tree-2.jpeg' },
        { src: '/public/tree-3.jpeg' },
        { src: '/public/tree-4.jpeg' },
        { src: '/public/tree-5.jpeg' },
        { src: '/public/tree-6.jpeg' },
        { src: '/public/tree-7.jpeg' },
        { src: '/public/tree-8.jpeg' },
        { src: '/public/photo-gal3.jpeg' },
        { src: '/public/photo-gal4.jpeg' },
        { src: '/public/photo-gal5.jpeg' },
        { src: '/public/photo-gal6.jpeg' },
        { src: '/public/photo-gal7.jpeg' },
        { src: '/public/photo-gal8.jpeg' }
    ];
   
    const backendLink = useSelector((state) => state.prod.link);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getItemsPerPage = () => {
        if (windowWidth < 640) return 4;
        if (windowWidth < 768) return 6;
        if (windowWidth < 1024) return 8;
        return ITEMS_PER_PAGE;
    };

    const itemsPerPage = getItemsPerPage();
    const totalPages = Math.ceil(pictures.length / itemsPerPage);

    const currentImages = pictures.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const openLightbox = (index) => {
        const actualIndex = (currentPage - 1) * itemsPerPage + index;
        setCurrentImageIndex(actualIndex);
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
            newIndex = (currentImageIndex - 1 + pictures.length) % pictures.length;
        } else {
            newIndex = (currentImageIndex + 1) % pictures.length;
        }
        setCurrentImageIndex(newIndex);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') navigate('prev');
            else if (e.key === 'ArrowRight') navigate('next');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImageIndex]);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 focus:outline-none"
                        aria-label="Close lightbox"
                    >
                        <FaTimes />
                    </button>

                    <button
                        onClick={() => navigate('prev')}
                        className="absolute left-4 text-white text-3xl hover:text-gray-300 md:left-8"
                        aria-label="Previous image"
                    >
                        <FaChevronLeft size={windowWidth < 768 ? 30 : 40} />
                    </button>

                    <div className="max-w-4xl w-full mx-4 md:mx-16 text-center">
                        <img
                            src={pictures[currentImageIndex]?.src}
                            alt={pictures[currentImageIndex]?.title || "Gallery Image"}
                            className="max-h-[80vh] w-full object-contain"
                            loading="lazy"
                        />
                        <div className="text-white mt-2 text-sm md:text-base">
                            {pictures[currentImageIndex]?.title}
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('next')}
                        className="absolute right-4 text-white text-3xl hover:text-gray-300 md:right-8"
                        aria-label="Next image"
                    >
                        <FaChevronRight size={windowWidth < 768 ? 30 : 40} />
                    </button>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative w-full mb-8 md:mb-12">
                <div className="h-48 sm:h-64 md:h-80 w-full">
                    <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
                            Photo Gallery
                        </h1>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <div className="w-full py-6 md:py-10 px-4 sm:px-6">
                <div className="w-full max-w-6xl mx-auto py-6 md:py-10">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pb-10 md:pb-20 ">
                        {currentImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer transition-transform hover:scale-[1.02]"
                                onClick={() => openLightbox(index)}
                                tabIndex="0"
                                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                                aria-label={`View image ${index + 1}`}
                            >
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={image.src}
                                    alt={`Photo Gallery Image ${index + 1}`}
                                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover   group-hover:opacity-80 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-[#afb236] bg-opacity-50 rounded-full p-2 sm:p-3">
                                        <FaPlus className="text-white text-xl sm:text-2xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-6 flex justify-center sm:justify-end">
                            <div className="flex border border-[#444] divide-x divide-[#444] text-xs sm:text-sm">
                                {currentPage > 1 && (
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        className="px-3 sm:px-4 py-2 bg-[#222] text-white hover:bg-white hover:text-black"
                                    >
                                        Prev
                                    </button>
                                )}
                                {[...Array(totalPages).keys()].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => goToPage(num + 1)}
                                        className={`px-3 sm:px-4 py-2 ${currentPage === num + 1
                                            ? "bg-[#222] text-[#afb236] font-semibold"
                                            : "bg-[#222] text-white hover:text-black"
                                            }`}
                                    >
                                        {num + 1}
                                    </button>
                                ))}
                                {currentPage < totalPages && (
                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        className="px-3 sm:px-4 py-2 bg-[#222] text-white hover:bg-white hover:text-black"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;