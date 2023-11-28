import asyncHandler from 'express-async-handler';

import {prisma} from "../config/prismaConfig.js";


export const getSlider=asyncHandler(async(req,res)=>{
    try {
        const slider=await prisma.
    } catch (error) {
        
    }
})