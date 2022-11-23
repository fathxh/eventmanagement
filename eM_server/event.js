const db=require('./db')


const addevent=(usercode,ename,date)=>{
    return db.Event.findOne({name:ename})
    .then(user=>{
        if(user){
            return{
                statuscode:404,
                status:false,
                message:"Event Already Exist"
            }
        }else{
            const newEvent=new db.Event({
                usercode,
                name:ename,
                date,
                deleted:[]
            })
            newEvent.save()
            return{
                statuscode:203,
                status:true,
                message:"Event Added successfully"
            }
        }

    })
}

module.exports={addevent}