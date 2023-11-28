import express from 'express';

import { getHomeNews } from '../controllers/homeNewsCntrl.js';

const router=express.Router();

router.get("/homeNews",getHomeNews);



export {router as homeNewsRoute}  