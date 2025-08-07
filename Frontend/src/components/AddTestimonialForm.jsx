import React, { useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const AddTestimonialForm = ({ onTestimonialSubmit }) => {
  const backendLink = useSelector((state) => state.prod.link);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try { 
      const response = await axios.post(
        `${backendLink}/api/testimonials/create-testimonials`,
        formData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
      );
      onTestimonialSubmit(response.data); // Update parent component
      setFormData({ name: "", rating: 5, content: "" }); // Reset form
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit testimonial");
    } finally {
      setSubmitting(false);
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   setError("");

  //   try {
  //     // Create a FormData object and append fields
  //     const data = new FormData();
  //     data.append("name", formData.name);
  //     data.append("rating", formData.rating);
  //     data.append("content", formData.content);

  //     const response = await axios.post(
  //       `${backendLink}/api/testimonials/create-testimonials`,
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data"
  //         }
  //       }
  //     );
  //     onTestimonialSubmit(response.data); // Update parent component
  //     setFormData({ name: "", rating: 5, content: "" }); // Reset form
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Failed to submit testimonial");
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Rating Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRatingChange(star)}
                className="focus:outline-none"
              >
                <FaStar
                  className={`text-2xl ${star <= formData.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Review Field */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 mb-2">
            Your Review
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition ${submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default AddTestimonialForm;