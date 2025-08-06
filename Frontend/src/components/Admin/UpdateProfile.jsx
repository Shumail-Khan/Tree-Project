import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FiUser, FiMail, FiSave, FiLoader } from "react-icons/fi";

const UpdateProfile = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });
  const [loading, setLoading] = useState({
    fetch: true,
    submit: false
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const fetchProfileData = async () => {
    try {
      setLoading(prev => ({ ...prev, fetch: true }));
      setError(null);
      const response = await axios.get(`${backendLink}/api/admin/admin-profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('admin-token')}`
        }
      });
      setProfileData(response.data);
      setFormData({
        username: response.data.username,
        email: response.data.email
      });
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
      setError("Failed to load profile data. Please try again later.");
    } finally {
      setLoading(prev => ({ ...prev, fetch: false }));
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [backendLink]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validateForm()) return;

    try {
      setLoading(prev => ({ ...prev, submit: true }));

      const response = await axios.put(
        `${backendLink}/api/admin/update-profile`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('admin-token')}`

          }
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        fetchProfileData(); // Refresh profile data
        setTimeout(() => setSuccess(false), 3000); // Auto-hide success message
      }
    } catch (error) {
      console.error("Update failed:", error);
      const errorMessage = error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to update profile. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(prev => ({ ...prev, submit: false }));
    }
  };

  if (loading.fetch && !profileData) {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
        <div className="flex flex-col items-center justify-center space-y-4">
          <FiLoader className="animate-spin text-3xl text-blue-500" />
          <h1 className="text-xl font-semibold text-gray-700">Loading profile...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Update Profile</h1>
        <p className="text-gray-600 mt-1">Manage your account information</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">Profile updated successfully!</p>
            </div>
          </div>
        </div>
      )}

      {profileData ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${validationErrors.username ? "border-red-300" : "border-gray-300"
                  }`}
                required
              />
            </div>
            {validationErrors.username && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${validationErrors.email ? "border-red-300" : "border-gray-300"
                  }`}
                required
              />
            </div>
            {validationErrors.email && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading.submit}
              className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading.submit ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {loading.submit ? (
                <>
                  <FiLoader className="animate-spin mr-2 h-4 w-4" />
                  Updating...
                </>
              ) : (
                <>
                  <FiSave className="mr-2 h-4 w-4" />
                  Update Profile
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No profile data available</p>
          <button
            onClick={fetchProfileData}
            className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;