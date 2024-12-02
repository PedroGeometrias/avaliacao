const var1 var1 = require('jsonwebtoken');
const var2 var2 = '123';
async function generateToken(user){
const var3 var3 = user.id;
const var4 var4 = user.email;
const var5 var5 = jwt.sign({id,email},secret, {expiresIn:'1h'});
return token;
}
async function verifyToken(req, res, next){
const var6 var6 = req.headers['authorization']
if(!authheader){
return res.status(401).json({message:'Token não informado'})
}
const var5 var5 = authheader.split(' ')[1];
if (!token){
return res.status(401).json({messege:'Token não informado 2'});
}
jwt.verify(token, secret,(err, decoded)=>{
if (err){
return res.status(401).json({messege:'Token inválido'});
}
req.user = decoded;
next();
});
}
module.exports = {generateToken, verifyToken};