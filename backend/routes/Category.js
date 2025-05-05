const express = require('express');
const router = express.Router();
const Category = require('../models/Category');


//Get all categories

router.get('/',async (req,res) => {
    try{
        const categories = await Category.find();
        res.json(categories);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

//get a single category by id

router.get('/:id', async (req,res) => {
    try{
        const categories = await Category.findById(req.params.id);
        if(!categories){
            return res.status(404).json({message:'categories not found'})
        }
        res.json(categories);
    }catch (error) {
        res.status(500).json({message:error.message})
    }
})

//create a new category

router.post('/', async(req,res)=> {
    const categories = new Category({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
    })

    try{
        const newCategory = await categories.save();
        res.status(201).json(newCategory);
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

//update an exisiting category

router.put('/:id' , async(req,res) => {
    try{
        const categories = await Category.findById(req.params.id);
        if(!categories){
            return res.status(404).json({message:'categories not found'})
        }
        categories.name = req.body.name || categories.name;
        categories.slug = req.body.slug || categories.slug;
        categories.description = req.body.description || categories.description;
        categories.updatedAt = Date.now();

        const updatedcategory = await categories.save();
        res.json(updatedcategory);
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

//Delete a post 

router.delete('/:id',async(req,res) => {
    try{
        const categories = await Category.findById(req.params.id);
        if(!categories){
            return res.status(404).json({message:'categories not found'})
        }
        await Category.findByIdAndDelete(categories._id); // ✅ await the deletion
        res.json({message:"categories Deleted"})
    }catch(error){
        res.status(500).json({message:'Post not found'})
    }
})

module.exports = router;