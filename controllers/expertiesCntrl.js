import asyncHandler from 'express-async-handler';

import {prisma} from "../config/prismaConfig.js";

export const getExperties=asyncHandler(async(req,res)=>{
   const exp=await prisma.experties.findMany({
    orderBy:{  
        createdAt:"desc",
    }
   })  
   res.send(exp);
  

})

export const materialUse = asyncHandler(async (req, res) => {
    const mat = await prisma.whatWeUse.findMany({
        orderBy:{  
            updatedAt:"asc"
        }
    });     
    res.send(mat);     
  });