const fs = require('fs')
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.js`,'utf-8'));
exports.getAllUsers = (req,res)=>{
    res.status(200).json({
        status: 'success',
        count: users.length,
        data:{
            users
        }
    })
}
exports.getUser = (req,res)=>{
const {id} = req.params
const user =  users.find(user => user.id.toString() === id)
if(user){
  res.status(200).json({
      status: 'success',
      data:{
          user
      }
  })
}else{
  res.status(400).json({
      status: 'fail',
      message: 'no user found'
  })
}
}
exports.createUser = (req,res)=>{
const user = req.body
console.log(req.body)
users.push(user)
res.status(200).json({
    status:'success',
    message: `${user.name} added to database`,
    data:{
        user
    }
})
}
exports.updateUser = (req,res)=>{
res.send(200).json({
    message: 'updated data goes here'
})

}
exports.deleteUser = (req,res)=>{
res.status(204).json({
    message: 'content successfully deleted'
})
}