import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiEdit, FiLock } from "react-icons/fi";

const AdminProfile = () => {
  const navigate = useNavigate();
  const backendLink = useSelector((state) => state.prod.link);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${backendLink}/api/admin/admin-profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('admin-token')}`
                }
            });
      setProfileData(response.data);
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
      setError("Failed to load profile data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [backendLink]);

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <button
          onClick={handleBack}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Go back"
        >
          <FiArrowLeft className="text-gray-600 text-xl" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Admin Profile</h1>
      </div>

      {loading && !profileData ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="p-4 mb-6 bg-red-50 rounded-lg">
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchProfileData}
            className="mt-2 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-500">Username</h3>
                <p className="text-lg font-semibold text-gray-800">
                  {profileData?.username || "N/A"}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="text-lg font-semibold text-gray-800">
                  {profileData?.email || "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/change-password')}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              <FiLock className="mr-2" />
              Change Password
            </button>
            <button
              onClick={() => navigate('/update-profile')}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              <FiEdit className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;