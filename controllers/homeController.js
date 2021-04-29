module.exports.header=function(req,res,next){
    console.log("inside home");
    return res.send("<h4>home|header</h4>");
}