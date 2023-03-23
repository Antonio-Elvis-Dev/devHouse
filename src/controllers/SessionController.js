
//metodos: index, show, update, store, destry

/*
index: listagem de sessões
store: cria uma sessão
show: listar uma sessão
update: atualizar sessão
destry: deletar uma sessão
*/

class SessionController {
    store(req,res){
        return res.json({
            message:'Minha Api'
        })
    }
}

export default new SessionController();
