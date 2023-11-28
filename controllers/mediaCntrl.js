import asyncHandler from 'express-async-handler';

import {prisma} from "../config/prismaConfig.js";

export const getMedia=asyncHandler(async(req,res)=>{
    try {
        const md=await prisma.media.findFirst();
        res.send(md);
    } catch (error) {
        res.send(error.message);
    }
    

})