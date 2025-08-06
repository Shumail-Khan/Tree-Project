// models/Testimonial.js
import mongoose from "mongoose";

const estimateSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { 
        type: String, 
        required: true,
        enum: [
            "TREE REMOVAL", 
            "TREE TRIMMING & PRUNING", 
            "STRUCTURAL PRUNING", 
            "LAND CLEARING", 
            "STORM CLEAN UP", 
            "COMMERCIAL TREE SERVICES"
        ]
    },
    
});

const RequestEstimate = mongoose.model('RequestEstimate', estimateSchema);
export default RequestEstimate;