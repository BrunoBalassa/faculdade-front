import React from 'react'

import Card from '../components/Card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'
import UsuarioService from '../app/services/usuarioService'
import { msgSuccess, msgErro } from '../components/toastr'
class CadastroUsuario extends React.Component {
    state = {
        email: null,
        nome: null,    
        password: null,
        telefone: null,
    }
    constructor() {
        super()
        this.service = new UsuarioService()
    }

  
    
    cadastrar = () => {
        const {nome, email,  telefone, senha} = this.state
        
        const usuario = {nome, email,  telefone, senha,}

        try{
            this.service.validar(usuario)        
        }catch(erro){
            const msgs = erro.mensagens
            msgs.forEach(msgs => msgErro(msgs))
            return false    
        }
        this.service.salvar(usuario)       
            .then(responde => {
                console.log(usuario.response)
                msgSuccess('Usuario cadastrado com sucesso')
                this.props.history.push('/login')
            }).catch(err => {
                msgErro(err.response.data)
            })
    }
    retornarLogin = () => {
        this.props.history.push('/login')
    }


    render() {
        return (

            <Card title='Cadastro de Usuário'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome. *" htmlFor='inputNome'>
                                <input type='text' id='inputNome' className='form-control' name='Nome' onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <FormGroup label='Email. *' htmlFor='inputEmail'>
                                <input type='text' id='inputEmail' className='form-control' name='Email' onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label='Telefone. *' htmlFor='inputConfirmSenha'>
                                <input type='text' id='telefone' className='form-control' name='telefone' onChange={e => this.setState({ telefone: e.target.value })} />
                            </FormGroup>
                            <FormGroup label='Senha. *' htmlFor='inputSenha'>
                                <input type='password' id='inputSenha' className='form-control' name='Senha' onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            
                            <button onClick={this.cadastrar} type='button' className='btn btn-success'>Salvar</button>

                            <button onClick={this.retornarLogin} type='button' className='btn btn-danger'>Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>


        )
    }
}
export default withRouter(CadastroUsuario)