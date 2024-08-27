import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required: true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export const Book = mongoose.model('books',bookSchema);
                                  // books will the name of collection in our database;
            //Book will be the object that will be used in our application while development