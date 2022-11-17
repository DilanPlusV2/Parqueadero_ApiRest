const jwt = require('jsonwebtoken');

function checkAuth(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.DatosUsuario = decodedToken;
        next();
    }catch(e){
        return res.status(401).json({
            'message': "Token Expirado o Inválido",
            'error':e
        });
    }
}
module.exports={
    checkAuth:checkAuth
}