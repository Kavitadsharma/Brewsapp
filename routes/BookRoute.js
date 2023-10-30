const express=require("express")
const BookRoute=express.Router()
const {BookModel}=require("../model/BookModel")

BookRoute.get("/",(req,res)=>{
    res.status(200).send("welcome to our Book Store")
})
BookRoute.post("/add",async(req,res)=>{
    const payload=req.body;
    
    try{
        const book=new BookModel(payload)
        await book.save()
        res.status(200).send({message:"Book created"})
    }catch(err){
       
res.status(400).send({message:"error"})
    }
})
BookRoute.get("/book",async(req,res)=>{
    try{
        const book= await BookModel.find()
        res.status(200).send({message:book})
    }catch(err){
        res.status(400).send({message:err})
    }
})
BookRoute.get("/book/:id", async (req, res) => {
    const bookId = req.params.id;
  
    try {
      const book = await BookModel.findById(bookId);
  
      if (book) {
        res.status(200).send({ message: "Book found", book });
      } else {
        res.status(404).send({ message: "Book not found" });
      }
    } catch (err) {
      res.status(400).send({ message: err });
    }
  });
  
BookRoute.delete("/delete/:id",async(req,res)=>{
    const bookId=req.params.id
    try{
      await BookModel.findByIdAndDelete({_id:bookId})
        res.status(200).send({message:"Book Delete"})
    }catch(err){
        res.status(400).send({message:err})
    }
})
BookRoute.patch("/update/:id", async (req, res) => {
    const bookId = req.params.id;
    const { title, author, summary } = req.body;
  
    try {
      const updatedBook = await BookModel.findByIdAndUpdate(
        bookId,
        { title, author, summary },
        { new: true } 
      );
  
      if (updatedBook) {
        res.status(200).send({ message: "Book updated", updatedBook });
      } else {
        res.status(404).send({ message: "Book not found" });
      }
    } catch (err) {
      res.status(400).send({ message: err });
    }
  });
  













module.exports={BookRoute}