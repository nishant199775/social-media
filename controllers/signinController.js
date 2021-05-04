const users=require('../models/users')
module.exports.signin=function(req,res,next){
    return res.render('signin',{title:'signin'});
}
// used in manual authentication
module.exports.session=function(req,res,next)
{
    
     users.findOne({Email:req.body.email},(err,user)=>
     {
         if(err){ 
             console.log(err) 
            return res.redirect('back')
        }
        
        
        
        if(user)
        {
            console.log('user found')
            if(user.Password!=req.body.password)
            {
                console.log('password does not match')
                return res.redirect('back')
            }
            else{
               res.cookie('user_id',user.id);
                return res.redirect('/users/profile')
            }
            
        }
        else{
            console.log("email not found");
            return res.redirect('back')

        }
        
     })
}
//used by passport authentication
module.exports.createSession=(req,res)=>{
    return res.redirect('/users/profile');
  }