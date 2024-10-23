import { RepositorioDeUsuariosInterface } from 'src/repositorios/repositorioDeUsuarios.interface';
import { ServicioRegistracion } from '../../src/servicios/registracion.service';
import { Usuario } from '../../src/entidades/usuario.entity';

describe('Registración', () => {
  it('Una persona se registra correctamente', async () => {
    //precondiciones
    const repositorioDeUsuarios: RepositorioDeUsuariosInterface = dadoUnRepositorioDeUsuariosYElCorreoNoExiste();
    const servicioRegistracion = new ServicioRegistracion(repositorioDeUsuarios);
    //ejecucion
    const response = servicioRegistracion.registrarNuevoUsuario("email@correo.co", "contraseña");
    //resultados
    expect(response).toBeTruthy();
    expect(repositorioDeUsuarios.guardarUsuario).toHaveBeenCalledTimes(1);
  });

  it('Cuando una persona ingresa un correo que ya está guardado, no se registra de nuevo', async () => {
    //precondiciones
    const repositorioDeUsuarios: RepositorioDeUsuariosInterface = dadoUnRepositorioDeUsuariosYElCorreoExiste();
    const servicioRegistracion = new ServicioRegistracion(repositorioDeUsuarios);
    //ejecucion
    const response = servicioRegistracion.registrarNuevoUsuario("email@correo.co", "contraseña");
    //resultados
    expect(response).toBeFalsy();
  });
});

function dadoUnRepositorioDeUsuariosYElCorreoNoExiste(): RepositorioDeUsuariosInterface {
  return {
    guardarUsuario: jest.fn().mockImplementation(() => true),
    buscarUsuarioPorEmail: jest.fn().mockImplementation(()=> undefined)
  };
}

function dadoUnRepositorioDeUsuariosYElCorreoExiste(): RepositorioDeUsuariosInterface {
  return {
    guardarUsuario: jest.fn().mockImplementation(() => true),
    buscarUsuarioPorEmail: jest.fn().mockImplementation(()=> new Usuario('correo@correo.co', 'contraseña'))
  };
}

/*
jest.spyOn(repositorioDeUsuarios, 'registrarUsuario').mockReturnValue(true);
*/