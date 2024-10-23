export interface ServicioRegistracionInterface{
  registrarNuevoUsuario(email: string, contraseña: string): boolean;
}