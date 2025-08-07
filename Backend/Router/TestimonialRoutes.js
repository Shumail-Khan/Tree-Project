import express from 'express'
import { addTestimonials, getEstimates, getTestimonials, submitEstimate, } from '../Controller/TestimonialController.js';
import { upload } from '../MiddleWares/Multer.js';

const router = express.Router()

router.post('/create-testimonials', upload.none(), addTestimonials)
router.get('/get-testimonials', getTestimonials)
router.post('/submit-estimate', submitEstimate)
router.get('/get-estimates', getEstimates);

export default router