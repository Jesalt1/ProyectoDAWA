export class Usuario {
  nombreUsuario: string;
  contraseña: string;
  correoElectronico: string;
  nombre: string;
  apellido: string;

  constructor(
    _nombreUsuario: string,
    _contraseña: string,
    _correoElectronico: string,
    _nombre: string,
    _apellido: string
  ) {
    this.nombreUsuario = _nombreUsuario;
    this.contraseña = _contraseña;
    this.correoElectronico = _correoElectronico;
    this.nombre = _nombre;
    this.apellido = _apellido;
  }


}
