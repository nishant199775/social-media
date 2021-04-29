module.exports.header=function(req,res,next){
    return res.render('home',{title:'Home'});
}