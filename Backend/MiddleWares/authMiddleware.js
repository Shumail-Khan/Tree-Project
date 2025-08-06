import User from "../Model/AdminModel.js";
import jwt from "jsonwebtoken";

const authMiddleware = {
  verifyToken: async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized (Middleware Error) " });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found (Middleware Error) " });
      }
      req.user = user; // Attach user to request
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token (Middleware)" });
    }
  },

  authorizeRole: (role) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized (Middleware Error) " });
      }
      if (req.user.role !== role) {
        return res.status(403).json({ message: "Forbidden (Middleware Error) " });
      }
      next();
    };
  },
};

export default authMiddleware;



