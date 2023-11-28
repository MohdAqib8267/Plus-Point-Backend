import express from 'express';


import { getMedia } from '../controllers/mediaCntrl.js';

const router=express.Router();

router.get("/media",getMedia);



export {router as mediaRoute}