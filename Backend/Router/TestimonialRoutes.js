import express from 'express'
import { addTestimonials, getEstimates, getTestimonials, submitEstimate, } from '../Controller/TestimonialController.js';
import cors from 'cors';



const router = express.Router()

router.post('/create-Testimonials', cors(),addTestimonials)
router.get('/get-testimonials', getTestimonials)
router.post('/submit-estimate', submitEstimate)
router.get('/get-estimates', getEstimates);



// router.post('/', testimonialController.submitTestimonial);
// router.get('/', testimonialController.getApprovedTestimonials);
// router.get('/service/:service', testimonialController.getTestimonialsByService);

// // Admin routes
// router.get('/all', testimonialController.getAllTestimonials);
// router.patch('/approve/:id', testimonialController.approveTestimonial);
// router.delete('/:id', testimonialController.deleteTestimonial);


export default router




