import asyncHandler from 'express-async-handler';

import {prisma} from "../config/prismaConfig.js";

export const getOurTeam=asyncHandler(async(req,res)=>{
    const team=await prisma.ourTeam.findMany({
        orderBy:{
            createdAt:"asc", 
        }   
    });
    res.send(team);
})