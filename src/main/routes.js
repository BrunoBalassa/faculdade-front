import React from 'react'

import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'

import {AuthConsumer} from '../main/provedorAutenticacao'



function RotaAutenticada ({component: Component, isUsuarioAutenticado, ...props}) {
    return (
        <Route {...props} render={ (componentProps) => {
            if(isUsuarioAutenticado) {
                return (
                    <Component {...componentProps} />
                )
            }else {
                return(
                    <Redirect to={ {pathname: '/login', state: {from: componentProps.location}} }/>
                )
            }
        }}/>
    )
}

function Rotas(props){
    return(
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/cadastro-usuarios' component={CadastroUsuario}/>   

                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path='/home' component={Home}/>                           
            </Switch>
        </HashRouter>
    )
}
export default () => (
 <AuthConsumer>
     {(context) => (<Rotas isUsuarioAutenticado={context.isAutenticado}/>)}
 </AuthConsumer>
)