const users=require('../models/users')

module.exports.profile=function(req,res,next){
    if(!req.cookies.user_id)
    {
        return res.redirect('/signin');
    }
    users.findById(req.cookies.user_id,(err,user)=>
    {
        if(err) {console.log(err);return res.redirect('/signin');}
        return res.render("profile",{name:user.Name,email:user.Email,title:'Profile'});
    })
    
}
