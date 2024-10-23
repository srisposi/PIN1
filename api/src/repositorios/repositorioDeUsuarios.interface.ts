import { Usuario } from "src/entidades/usuario.entity"

export interface RepositorioDeUsuariosInterface {
    guardarUsuario(email:string, contraseña:string):boolean
    buscarUsuarioPorEmail(email:string):Usuario
}