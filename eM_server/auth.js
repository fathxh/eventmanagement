const db=require('./db')
// const jwt=require('jsonwebtoken')

const register=(email,usercode,name,dob,password)=>{
    return db.User.findOne({email})
    .then(user=>{
        if(user){
            return{
                statuscode:404,
                status:false,
                message:"user already exist,check your email"
            }
        }else{


            return db.User.findOne({usercode})
            .then(user=>{
                if(user){
                    return{
                        statuscode:404,
                        status:false,
                        message:"usercode already exist"
                    }
                }else{
            const newUser=new db.User({
                email,
                name,
                dob,
                usercode,
                password
            })
            newUser.save()
            return{
                statuscode:200,
                status:true,
                message:"registered successfully"
            }



        }})

        }
    })

}

const login=(email,password)=>{
    return db.User.findOne({email,password})
    .then(user=>{
        if(user){
            cur_name=user.name
            cur_usercode=user.usercode
            //token
            // token=jwt.sign({
            //     currentusercode:cur_usercode
            // },'secretkey@987')

            return{
                statuscode:203,
                status:true,
                message:"login success",
                name:cur_name,
                usercode:cur_usercode,
                email:user.email

            }
        }else{
            return{
                status:false,
                statuscode:404,
                message:"Account not found"
            }
        }
    })
}

module.exports={register,login}