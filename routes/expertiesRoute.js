import express from 'express';
import { getExperties, materialUse } from '../controllers/expertiesCntrl.js';

const router=express.Router();

router.get("/experties",getExperties);
router.get("/experties/whatweuse",materialUse);


export {router as expertiesRoute}    