const mongoose=require('mongoose')

//connection string
mongoose.connect('mongodb://localhost:27017/eventmanagement',{useNewUrlParser:true})

//model creation
const User=mongoose.model('User',{
    email:String,
    name:String,
    dob:String,
    usercode:String,
    password:String
})
const Event=mongoose.model('Event',{
    usercode:String,
    name:String,
    date:String
})
const Delete=mongoose.model('Delete',{
    usercode:String,
    name:String,
    date:String
})

module.exports={User,Event,Delete}
