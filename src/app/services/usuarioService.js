import ApiService from '../apiService'

class UsuarioService extends ApiService {
    constructor(){
        super('/api/usuarios')
    }
    autenticar(credenciais) {
        return this.post('/autenticar', credenciais)
    }
    salvar(usuario){
        return this.post('/', usuario)
    }
    validar(usuario){
        const erros = []
        
        if(!usuario.nome){
            erros.push('O campo nome é obrigatorio.')
        }
        if(!usuario.email){
            erros.push('O campo Email é obrigatorio.')
        }else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            erros.push('Informe um email valido')
        }

        if(!usuario.senha){
            erros.push('Digite a senha')
            
        }
    }
    
}
export default UsuarioService