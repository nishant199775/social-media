
const users=require('../models/users')

module.exports.signup=function(req,res,next){
    return res.render('signup',{title:'signup'});
}

module.exports.create=function(req,res,next)
{
    if(req.body.password!=req.body.confirmPassword)
    {
        return res.redirect('back');
    }
    users.findOne({Email:req.body.email},(err,user)=>{
        if(err) 
        {
            console.log("email already exist") 
            return res.redirect('back');
        }
        if(!user)
        {
            users.create({Name:req.body.name,Email:req.body.email,Password:req.body.password},
                (err,user)=>
                {
                    if(err) {console.log(err) 
                    return res.redirect('back')}

                    console.log("successfully signedUp")
                    res.redirect('/signin')


                })
        }

    })
    
}