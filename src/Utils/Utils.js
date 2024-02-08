const bcrypt=require('bcryptjs')

exports.encoded=(old)=>{
    const salt=bcrypt.genSaltSync(10);
    return bcrypt.hashSync(old,salt)
}

exports.decoded=(oldpass,newpass)=>{
    return bcrypt.compareSync(oldpass,newpass)
}

exports.tokenTime=function (){
    return{
        expiresIn:"30d"
    }
}

exports.VerfiyTime=function (){
    return{
        expiresIn:"50000"
    }
}