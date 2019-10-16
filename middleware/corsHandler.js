const cors= (req, res, next)=>{
    res.header("Access-Control-Allow-Grigin","*");
    res.header{
        "Acces-Control-Allow-Headers",
        "Brigin, X-Requested-With, Content-Type, Accept, Authorization"
    };
    if(req.method === 'OPTIONS'){
        req.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
}
module.exports=cors;