import express, { response } from "express";
import { PORT,mongoURI } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import router from "./routes/booksRoute.js";
import cors from 'cors'  // to install cors command is npm i cors

// to create react app using vite -> npm create vite@latest (in outer folder to create frontend folder)
// then in frontend folder give command npm i

const app = express();

app.use(express.json()); // middleware for parsing request body 
// else it will give -> { "message": "Cannot read properties of undefined (reading 'title')"   }
// this message will be seen after sending request from thunderclient

//middleware for handling CORS POLICY ( FOR REQUESTING OTHER DOMAIN);
//OPTION 1: ALLOW ALL ORIGINS WITH  DEFAULT OF CORS(*)
app.use(cors());
//OPTION 2: ALLOW CUSTOM ORIGINS
// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))
  
app.listen(PORT,()=>{
    console.log("App is listening at port : "+PORT);
})

mongoose.connect(mongoURI)
        .then(()=>{
            console.log("app is conncected to database");
        })
        .catch(()=>{
            console.log("error");
        })


app.get('/',(request,response)=>{
    response.send('<h1>this is working</h1>');
})

app.use('/books',router)