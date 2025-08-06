import Testimonials from "../Model/TestimonialModel.js";
import RequestEstimate from "../Model/RequestEstimateModel.js";

export const addTestimonials = async (req, res) => {
    try {
        const testimonial = new Testimonials({
            name: req.body.name,
            rating: req.body.rating,
            content: req.body.content
        });
        const newTestimonial = await testimonial.save();
        res.status(201).json(newTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonials.find().sort({ date: -1 });
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const submitEstimate = async (req, res) => {
    try {
        const { fullName, email, phone, serviceRequested } = req.body;

        const newEstimate = new RequestEstimate({
            customerName: fullName,
            email,
            phone,
            service: serviceRequested
        });

        await newEstimate.save();
        res.status(201).json({ 
            success: true,
            message: 'Estimate submitted successfully! We will contact you soon.' 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false,
            message: error.message 
        }); 
    }
};






// export const getApprovedTestimonials = async (req, res) => {
//     try {
//         const testimonials = await RequestTestimonial.find({ approved: true })
//         res.json(testimonials);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };



// i remove the approved so give me api just to get the testimonials
export const getEstimates = async (req, res) => {
    try {
        const estimates = await RequestEstimate.find()
        res.json(estimates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};