import express from 'express'
import { addTestimonials, getEstimates, getTestimonials, submitEstimate, } from '../Controller/TestimonialController.js';

const router = express.Router()

router.post('/create-testimonials', cors(), addTestimonials)
router.get('/get-testimonials', getTestimonials)
router.post('/submit-estimate', submitEstimate)
router.get('/get-estimates', getEstimates);

export default router