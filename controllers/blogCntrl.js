import asyncHandler from 'express-async-handler';
import {prisma} from "../config/prismaConfig.js";


export const getBlog=asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try {
        const blog=await prisma.blogs.findUnique({
            where:{
                id:id,
            },
            include: {
                comments: true, // Include the associated comments
              },
        })
        res.send(blog);
    } catch (error) {
        res.send(error.message);
    }
})

export const getAllBlogs=asyncHandler(async(req,res)=>{
    try {
        const blg=await prisma.blogs.findMany()
        res.send(blg);
       
    } catch (error) {
        res.send(error.message);
    }
    
})