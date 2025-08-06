import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import {
  FiLogOut,
  FiPlus,
  FiEdit2,
  FiTag,
  FiList,
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiBook,
  FiLayers,
  FiSettings
} from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';

const AdminDashboard = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalCategories: 0,
    pendingJobs: 0,
    completedJobs: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${backendLink}/api/dashboard/`);
        setStats({
          totalBlogs: response.data.blogCount,
          totalCategories: response.data.categoryCount,
          pendingJobs: response.data.pendingCount,
          completedJobs: response.data.completedCount
        });
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [backendLink]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your content and activities</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center mt-4 md:mt-0 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <FiLogOut className="mr-2" />
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Blogs"
          value={stats.totalBlogs}
          icon={<FiBook className="text-2xl" />}
          link="/admin-dashboard/edit-blogs"
          loading={loading}
          color="blue"
        />
        <StatCard
          title="Categories"
          value={stats.totalCategories}
          icon={<FiLayers className="text-2xl" />}
          link="/admin-dashboard/add-category"
          loading={loading}
          color="purple"
        />
        <StatCard
          title="Pending Jobs"
          value={stats.pendingJobs}
          icon={<FiClock className="text-2xl" />}
          link="/admin-dashboard/job-requests"
          loading={loading}
          color="orange"
        />
        <StatCard
          title="Completed Jobs"
          value={stats.completedJobs}
          icon={<FiCheckCircle className="text-2xl" />}
          link="/admin-dashboard/job-requests"
          loading={loading}
          color="green"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickAction
              icon={<FiPlus className="text-xl" />}
              title="Add New Blog"
              link="/admin-dashboard/add-blog"
              description="Create a new blog post"
            />
            <QuickAction
              icon={<FiTag className="text-xl" />}
              title="Add Category"
              link="/admin-dashboard/add-category"
              description="Create new content category"
            />
            <QuickAction
              icon={<FiList className="text-xl" />}
              title="Job Requests"
              link="/admin-dashboard/job-requests"
              description="View service requests"
            />
            <QuickAction
              icon={<FiEdit2 className="text-xl" />}
              title="Edit Blogs"
              link="/admin-dashboard/edit-blogs"
              description="Manage existing content"
            />
             <QuickAction
              icon={<FiEdit2 className="text-xl mr-2" />}
              title="Admin Profile"
              link="/admin-dashboard/admin-profile"
              description="Manage existing content"
            />
            <QuickAction
              icon={<FiEdit2 className="text-xl mr-2" />}
              title="Request Testimonials"
              link="/admin-dashboard/request-testimonials"
              description="Manage existing content"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon, link, loading, color = 'blue' }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-100'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-100'
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-100'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-100'
    }
  };

  return (
    <Link to={link}>
      <div className={`${colorClasses[color].bg} p-6 rounded-lg border ${colorClasses[color].border} hover:shadow-md transition-all`}>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            {loading ? (
              <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
            ) : (
              <p className={`text-3xl font-bold ${colorClasses[color].text}`}>{value}</p>
            )}
          </div>
          <div className={`p-3 rounded-full ${colorClasses[color].bg} ${colorClasses[color].text}`}>
            {icon}
          </div>
        </div>
      </div>
    </Link>
  );
};

// Reusable Quick Action Component
const QuickAction = ({ icon, title, link, description }) => {
  return (
    <Link to={link}>
      <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
        <div className={`p-3 rounded-full bg-blue-50 text-blue-600 mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};

// Reusable Activity Item Component
const ActivityItem = ({ icon, title, time, action }) => {
  return (
    <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="p-2 rounded-full bg-gray-100 mr-4">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{time}</p>
      </div>
      <button className="text-sm text-blue-600 hover:text-blue-800">
        {action}
      </button>
    </div>
  );
};

export default AdminDashboard;