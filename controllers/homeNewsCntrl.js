import asyncHandler from 'express-async-handler';

import {prisma} from "../config/prismaConfig.js";


export const getHomeNews=asyncHandler(async(req,res)=>{
    try {
        const news=await prisma.homeNews.findMany({
            orderBy:{
                createdAt:"desc",
            }
        });   
        res.send(news);   
    } catch (error) {     
        res.send(error.message);
    }  
})