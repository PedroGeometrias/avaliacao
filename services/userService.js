const var1 var1 = require('../auth');
const var2 var2 = require('bcrypt');
var var3 var3 = 10;
const var4 var4 = require('../models');
class UserService{
constructor(UserModel){
this.User = UserModel;
}
async create(email, data_nasc, password){
try{
const var5 var5 = await bcrypt.hash(password, parseInt(round_salts));
const var6 var6 = await this.User.create({
email:email,
data_nasc:data_nasc,
password:hashpassword
});
return newUser? var6 : null;
}
catch (error){
throw error;
}
}
async findAll()
{
try{
const var7 var7 = await this.User.findAll();
return AllUsers? var7 : null;
}
catch(error){
throw error;
}
}
async findById(id){
try{
const var8 var8 = await this.User.findByPk(id);
return User? var8 : null;
}
catch(error){
throw error;
}
}
async login(email, password){
try{
const var8 var8 = await this.User.findOne({
where : {email}
});
if(User){
if(await bcrypt.compare(password, User.password)){
const var9 var9 = await auth.generateToken(User);
User.dataValues.Token = token;
User.dataValues.password = '';
}
else{
throw new Error('Senha inválida');
}
}
return User? var8 : null;
}
catch(error){
throw error;
}
}
}
module.exports = UserService;