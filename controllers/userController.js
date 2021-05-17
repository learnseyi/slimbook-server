// const fs = require('fs')
// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.js`,'utf-8'));
const User = require('../models/userModel')
exports.getAllUsers = async (req,res)=>{
   try{
    const users = await User.find();
    res.status(200).json({
        status: 'success',
        count: users.length,
        data:{
            users
        }
    })
   }catch(err){
        res.status(400).json({
            status:'failed',
            message:{
                err
            }
        })
   }
}
exports.getUser = async (req,res)=>{
try{
    const user = await User.findById(req.params.id)
  res.status(200).json({
      status: 'success',
      data:{
          user
      }
  })
}catch(err){
    res.status(400).json({
        status: 'fail',
        message: {
            report: 'no user found',
            err
        }
    })
  }
}

exports.createUser = async (req,res)=>{
try{
    const user = await  User.create(req.body)
    console.log(user)
    res.status(200).json({
    status:'success',
    message: `${user.name} added to database`,
    data:{
        user
    }
})
}catch(err){
    res.status(400).json({
        status: 'failed',
        message:{
            err
        }
    })
}
}
exports.updateUser = async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true,
            useFindAndModify: false
          })
        res.status(200).json({
            status: 'success',
            data:{
                user
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: 'unable to update'
        })
    }

}
exports.deleteUser = async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
res.status(204).json({
    message: 'content successfully deleted'
})
}