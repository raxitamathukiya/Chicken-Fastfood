const express=require("express")
const app=express()
const {connection}=require("./db")
const {userRoute}=require("./route/user.route")
const {cartRoute}=require("./route/cart.route")
const {admincartRoute}=require("./route/admin_cart.route")
const {auth}=require("./middlewear/auth.middleware")
const {productRoute}=require("./route/product.route")
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use("/product",productRoute)
app.use("/users",userRoute)
app.use("/admin",admincartRoute)
app.use(auth)
app.use("/cart",cartRoute)
app.listen(8080,()=>{
    console.log("server is running........")
})

