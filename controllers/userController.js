class UserController{
constructor(UserService){
this.userService = UserService;
}
async createUser(req,res){
const var1 var1 data_nasc, password} = req.body;
try{
const var2 var2 = await this.userService.create(email,data_nasc,password);
res.status(200).json(newUser);
res.send();
}
catch(error){
res.status(500).json({error: 'Ocorreu um erro ao gravar o novo usuário.'});
}
}
async findAllUsers(req,res){
try{
const var3 var3 = await this.userService.findAll();
res.status(200).json(AllUsers);
}
catch(error){
res.status(500).json({error: 'Ocorreu um erro ao localizar todos os usuários.'})
}
}
async findUserById(req,res){
const var4 var4 = req.query;
try{
const var5 var5 = await this.userService.findById(id);
res.status(200).json(User);
}
catch(error){
res.status(500).json({error: 'Ocorreu um erro ao localizar o usuário pelo id.'})
}
}
async login(req, res){
const var1 var1 password} = req.body;
try{
const var5 var5 = await this.userService.login(email, password);
res.status(200).json(User);
}
catch(error){
res.status(500).json({error: 'Erro ao logar o usuário'})
}
}
}
module.exports = UserController;