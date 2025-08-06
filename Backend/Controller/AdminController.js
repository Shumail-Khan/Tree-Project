import User from "../Model/AdminModel.js";
import Blog from "../Model/BlogModel.js";
import Category from "../Model/CategoryModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // res.cookie('Tree-Project', token, {
        //     httpOnly: true,
        //     secure: false, // Set to true if using HTTPS
        //     sameSite: 'None',
        //     maxAge: 1000 * 60 * 60, // 1 hour
        // });

        return res.status(200).json({
            message: 'Login successful', user:
            {
                id: user.id,
                username: user.username,
                token,
                email: user.email
            }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};




export const adminLogout = (req, res) => {
    try {
        res.clearCookie('Tree-Project', {
            httpOnly: true,
            secure: false,
            sameSite: 'None',
        });
        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error in adminLogout:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const category = await Category.findOne({ blogs: blog._id });
        if (category) {
            category.blogs.pull(blog._id);
            await category.save();
        }
        return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}



export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        await Blog.findByIdAndUpdate(id, { title, description })
        return res.status(200).json({ message: 'Blog updated successfully' });
    } catch (error) {
        console.error('Error updating blog:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}




export const getAdmin = async (req, res) => {
    try {

        const admin = await User.find({ username: "admin1"  }).select("-password -__v");
        if (!admin || admin.length === 0) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        // Assuming you want to return the first admin found
        // If you expect multiple admins, you might want to adjust this logic
        const foundAdmin = admin[0];
        if (!foundAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        return res.status(200).json(foundAdmin);
    } catch (error) {
        console.error('Error fetching admin:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


export const updateProfile = async (req, res) => {
    try {
        const { username, email } = req.body;
        
        // Find the user (assuming you're using Mongoose)
        const user = await User.findOne({ username: "admin1" }); // Changed from find() to findOne()
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if they're provided
        if (username) user.username = username;
        if (email) user.email = email;

        await user.save();
        return res.status(200).json({ 
            message: 'Profile updated successfully', 
            user: {
                username: user.username,
                email: user.email
                // Don't send sensitive data like password
            } 
        });
    } catch (error) {
        console.error('Error updating profile:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


// export const changePassword = async (req, res) => {
//     try {
//         const { newPassword, confirmPassword } = req.body;
//         if (newPassword !== confirmPassword) {
//             return res.status(400).json({ message: 'Passwords do not match' });
//         }
//         const oldPassword = (await User.find({ username: "admin" })).password;

//         const user = await User.find({ username: "admin" });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const isMatch = await bcrypt.compare(oldPassword, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Old password is incorrect' });
//         }

//         const hashedNewPassword = await bcrypt.hash(newPassword, 10);
//         user.password = hashedNewPassword;
//         await user.save();

//         return res.status(200).json({ message: 'Password changed successfully' });
//     } catch (error) {
//         console.error('Error changing password:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// }


export const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        // Validation
        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'New passwords do not match' });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        // Find user (better to use ID from authenticated session)
        const user = await User.findOne({ username: "admin1" });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }

        // Hash and save new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        return res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}