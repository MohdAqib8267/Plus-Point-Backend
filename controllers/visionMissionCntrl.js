import asyncHandler from 'express-async-handler';

import {prisma} from "../config/prismaConfig.js";


export const getVisionMisson=asyncHandler(async(req,res)=>{
    try {
        const op=await prisma.missionVision.findMany();
        res.send(op);
    } catch (error) {
        res.send(error);  
    }      
  
})