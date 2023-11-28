import express from 'express';
import { getOurTeam } from '../controllers/ourTeamCntrl.js';


const router=express.Router();


router.get("/ourteam",getOurTeam);

export {router as ourTeamRoute}  