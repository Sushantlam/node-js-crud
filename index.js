const express= require("express")
const {connectMongoDB}= require("./connect")
const app= express()
const router= require("./routes/user")
const dotenv= require("dotenv")
const cors= require("cors")
dotenv.config()



app.use(cors())

//middleware
app.use(express.json())
//Connection of MongoDb

connectMongoDB(process.env.URL).then(()=>{
    console.log("Mongodb connnected")
    app.listen(process.env.PORT || 5000 , (err)=>{
        if(err) console.log(err);
        console.log("Running at", process.env.PORT);
    })
}).catch((e)=>{
    console.log(e)
})

//routes

app.use("/", router)


