import express, { Router } from 'express';
import { getAllBlogs, getBlog } from '../controllers/blogCntrl.js';

const router=express.Router();

router.get('/',getAllBlogs);
router.get('/:id',getBlog);

export {router as blogRouter};  