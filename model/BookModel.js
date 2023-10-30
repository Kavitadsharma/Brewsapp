const mongoose=require("mongoose")
const bookSchema=mongoose.Schema({
    title:String,
    author:String,
    summary:String
})
const BookModel=mongoose.model("Book",bookSchema)

module.exports={BookModel}