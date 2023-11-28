import express from 'express';

import { getVisionMisson } from '../controllers/visionMissionCntrl.js';


const router=express.Router();


router.get("/ourVision",getVisionMisson);

export {router as ourVision}  