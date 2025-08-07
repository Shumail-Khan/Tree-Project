import express from 'express'
import { addTestimonials, getEstimates, getTestimonials, submitEstimate, } from '../Controller/TestimonialController.js';
import cors from 'cors';

const router = express.Router()

router.options('/create-testimonials', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(200);
});
router.post('/create-testimonials', cors(), addTestimonials)
router.get('/get-testimonials', getTestimonials)
router.post('/submit-estimate', submitEstimate)
router.get('/get-estimates', getEstimates);

export default router