import { RepositorioDeUsuariosInterface } from 'src/repositorios/repositorioDeUsuarios.interface';
import { ServicioRegistracionInterface } from './registracion.service.interface';

export class ServicioRegistracion implements ServicioRegistracionInterface {
  private repositorio: RepositorioDeUsuariosInterface
  constructor(repositorio: RepositorioDeUsuariosInterface) {
    this.repositorio = repositorio
  }
  registrarNuevoUsuario(email: string, contraseña: string): boolean {
    const usuarioExistente = this.repositorio.buscarUsuarioPorEmail(email)
    if(usuarioExistente){
      return false
    }
    this.repositorio.guardarUsuario(email, contraseña);
    return true;
  }
}