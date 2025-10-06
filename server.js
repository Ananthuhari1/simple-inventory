const express =require("express")
const InventoryRouting = require("./routes/InventoryAPIRoutes")
const logger = require("./middleware/logger")

const app=express()
const PORT = 2525

app.use(express.json())
app.use(logger)
app.use("/Home",InventoryRouting)

app.get("/Inventory-API",(req,res)=>{
    res.status(200).send("Inventory API is running")

})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)

})