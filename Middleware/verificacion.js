const jwt = require("jsonwebtoken");
require("dotenv").config();



const authJWT = (req, res, next) => {

    try{
    const token = req.headers.authorization;
    
    if(token){
        const verify = jwt.verify(token, process.env.KEY);
        req.data = verify
        next()

    }else{
        res.status(400).send("No se encuentra el Token");

    }
    

} catch (error){
    console.log ("error :>> ", error);
    res.status(500).send("token invalido");


}
};
module.exports = authJWT;