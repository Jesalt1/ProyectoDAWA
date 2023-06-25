import { Producto } from './Producto';

export class ItemFactura {
  idItem: number;
  producto: Producto;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;

  constructor(
    _idItem: number,
    _producto: Producto,
    _cantidad: number,
    _precioUnitario: number
  ) {
    this.idItem = _idItem;
    this.producto = _producto;
    this.cantidad = _cantidad;
    this.precioUnitario = this.producto.precioUnitario;
    this.subtotal = this.calcularSubtotal();
  }

  private calcularSubtotal(): number {
    return this.cantidad * this.precioUnitario;
  }
}
