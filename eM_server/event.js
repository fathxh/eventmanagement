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
                date
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

const showevent=(usercode)=>{
    return db.Event.find({usercode})
    .then(user=>{
        if(user){
            return{
                statuscode:202,
                status:true,
                data:user
            }
        }
})
}
const showdelete=(usercode)=>{
    return db.Delete.find({usercode})
    .then(user=>{
        if(user){
            return{
                statuscode:202,
                status:true,
                data:user
            }
        }
})
}

const delevent=(usercode,ename,date)=>{
    
    const newDelete=new db.Delete({
        usercode,
        name:ename,
        date
    })
    newDelete.save()
    return db.Event.deleteOne({usercode,name:ename})
    .then(user=>{
        if(user){

            

            return{
                statuscode:203,
                status:true,
                message:"Event Deleted successfully"
            }
        }

    })
}
const remove=(usercode,ename)=>{
    
    return db.Delete.deleteOne({usercode,name:ename})
    .then(user=>{
        if(user){

            

            return{
                statuscode:203,
                status:true,
                message:"Event Deleted successfully"
            }
        }

    })
}

module.exports={addevent,delevent,showevent,showdelete,remove}