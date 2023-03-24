//metodos: index, show, update, store, destry

/*
index: listagem de sessões
store: cria uma sessão
show: listar uma sessão
update: atualizar sessão
destry: deletar uma sessão
*/

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    // verifica a existencia do usuario
    let user = await User.findOne({ email });

    // cria novo usuario caso ele não exista
    if (!user) {
      let user = await User.create({ email });
    }


    return res.json(user);
  }
}

export default new SessionController();
