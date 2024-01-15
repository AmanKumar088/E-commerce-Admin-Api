const bcrypt=require('bcryptjs')

exports.encoded=(old)=>{
    const salt=bcrypt.genSaltSync(10);
    return bcrypt.hashSync(old,salt)
}

exports.decoded=(oldpass,newpass)=>{
    return bcrypt.compareSync(oldpass,newpass)
}