const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const routes = require("./routes/ToDoRoutes")

const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("Hi")
// })

mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("MongoDB connected"))
.catch((err) =>console.log(err))

app.use("/api",routes);

app.listen(PORT, ()=> console.log(`Listening at ${PORT}...`))