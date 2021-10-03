import React from 'react'

import UsuarioService from '../app/services/usuarioService'
import {AuthContext} from '../main/provedorAutenticacao'
class Home extends React.Component {
    state = {
        saldo: 0
    }
    constructor(){
        super()
        this.usuarioService = new UsuarioService()
    }

    componentDidMount() {
       const usuarioLogado = this.context.usuarioAutenticado


     
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Converse com todas as pessoas </p>
                <hr className="my-4" />
                <p>veja todas as ultimas atualizações</p>
                <p className="lead">
                 
                </p>
            </div>
        )
    }
}
Home.contextType = AuthContext
export default Home