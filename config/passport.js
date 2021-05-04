const passport=require('passport');
const users=require('../models/users')
const localStrategy=require('passport-local').Strategy;
passport.use(new localStrategy({
    usernameField:'Email'
},{
    function(Email,Password,done)
    {
        //find a user 
        users.findOne({Email:Email},(err,user)=>
        {
            if(err)
            {
                console.log(err);
                return done(err);
            }
            if(!user||user.Password!=Password)
            {
                return done(null,false)
            }
            return done(null,user);
        })
    }
}))

//serialize user or adding cookie

passport.serializeUser(function(user,done)
{
    return done(null,user.id)
})

//deserialize user or sending details using the id in cookie
passport.deserializeUser(function(id,done)
{
   users.findById(id,(err,user)=>
   {
       if(err)
       {
        console.log(err);
           return done(err);
       }
       return done(null,user);

   })
})
module.exports=passport;