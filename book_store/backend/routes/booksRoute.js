import { Book } from "../models/bookModels.js";
import express, { response } from "express";

const router = express.Router();

//route to add a book in db
router.post('/',async(req,res)=>{
    try {
       // a validation
       if(!req.body.title || !req.body.author || !req.body.publishYear){
           return res.status(400).send({
               message:"send all required fields: title, author, publishYear"
           })
       }

       const newBook = {
           title: req.body.title,
           author: req.body.author,
           publishYear: req.body.publishYear
       };

       const book = await Book.create(newBook);

       return res.status(201).send({book});

       } catch (error) {
           console.log(error.message);
           res.status(500).send({message:error.message});
       }
})
       
//route to fetch all books from db
router.get('/',async(request,response)=>{
   try {
       
       const books = await Book.find({})
       response.status(200).json({
           count:books.length,
           data:books
       })

   } catch (error) {
       console.log(error.message)
       response.status(500).send({message: error.message});
   }
})

//route to fetch a single book from db by id
router.get('/:id', async(request,response)=>{
      try {

       const {id}= request.params;
       const book = await Book.findById(id);
       response.status(200).json(book);

      } catch (error) {
        console.log(error.message)
        response.status(500).send({error:error.message});
      }
})

//route to find by id and update
router.put('/:id',async(req,res)=>{
   try {
       if(!req.body.title || !req.body.author || !req.body.publishYear){
           res.status(400).send({message: "send all required fields: title,author,publishYear"})
       }

       const {id} = req.params;
       const result = await Book.findByIdAndUpdate(id,req.body);

       if(!result){
          return  res.status(404).json({message :'Book not found'});
       }
        res.status(200).send({message:'book updated successfully',data:result});

   } catch (error) {
       console.log(error.message)
       res.status(500).send({error:error.message});
   }
})

//route to find by id and delete
router.delete('/:id',async(request,response)=>{
     try {
        const {id} = request.params
        const result = await Book.findByIdAndDelete(id);
        if(!result){
           return response.status(404).json({message : "Book not Found"});
        }
        return response.status(200).send({message:"book is successfully deleted"})  
     } catch (error) {
        response.status(500).send({message : error.message});
     }
})

export default router;