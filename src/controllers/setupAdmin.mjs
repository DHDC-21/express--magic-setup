import User from "../models/User.mjs"

export default async function setupAdmin(req, res){
    const {
        inputEmail,
        inputUsername,
        inputPassword
    } = req.body

    // ? ATENÇÃO: É necessário criar as devidas validações e a criptografia das senhas

    try {
        const userAdmin = await User.create({
            email:inputEmail,
            username:inputUsername,
            password:inputPassword,
            isAdmin:true
        });
        console.log("Usuário administrador criado com sucesso!")
        console.log(userAdmin)
        return res.redirect("/")
    } catch (error) {
        return res.send("Erro ao criar o administrador")
    }
}