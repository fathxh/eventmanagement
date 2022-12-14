const express=require('express')
const auth=require('./auth')
const ev=require('./event')
const {User}=require('./db')
const cors=require('cors')


const app=express()

app.use(express.json())

app.use(cors({
  origin:"http://localhost:4200"
}))

const appMiddleware=(req,res,next)=>{
    console.log('app specific middleware');
    next()
}
app.use(appMiddleware)


app.post("/register",(req,res)=>{
  auth.register(req.body.email,req.body.usercode,req.body.name,req.body.dob,req.body.password)
  .then(user=>{
    if(user){
        res.status(user.statuscode).json(user)
    }
  })  
})
app.post("/login",(req,res)=>{
  auth.login(req.body.email,req.body.password)
  .then(user=>{
    if(user){
        res.status(user.statuscode).json(user)
    }
  })  
})
app.post("/addevent",(req,res)=>{
  ev.addevent(req.body.usercode,req.body.ename,req.body.edate)
  .then(user=>{
    if(user){
        res.status(user.statuscode).json(user)
    }
  })  
})
app.post("/delevent",(req,res)=>{
  ev.delevent(req.body.usercode,req.body.name,req.body.date)
  .then(user=>{
    if(user){
        res.status(user.statuscode).json(user)
    }
  })  
})
app.post("/remove",(req,res)=>{
  ev.remove(req.body.usercode,req.body.name)
  .then(user=>{
    if(user){
        res.status(user.statuscode).json(user)
    }
  })  
})
app.post("/showevent",(req,res)=>{
  ev.showevent(req.body.usercode)
  .then(user=>{
    if(user){
        res.status(user.statuscode).json(user)
    }
  })  
})
app.post("/showdelete",(req,res)=>{
  ev.showdelete(req.body.usercode)
  .then(user=>{
    if(user){
        res.status(user.statuscode).json(user)
    }
  })  
})



app.listen(3001,()=>{
    console.log("server stated in 3001");
})