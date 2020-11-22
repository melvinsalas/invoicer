import React from "react";
import {
  Clave,
  DetalleServicio,
  Emisor,
  Invoice,
  Receptor,
} from "./model/Invoice";

export function Viewer(props: { invoice: Invoice }) {
  const paintEmisor = (emisor: Emisor) => {
    return (
      <div>
        <h2>Emisor</h2>
        <div>Nombre: {emisor.Nombre._text}</div>
        <div>Nombre Comercial: {emisor.NombreComercial._text}</div>
        <div>
          Identificación: {emisor.Identificacion.Numero._text} (tipo{" "}
          {emisor.Identificacion.Tipo._text})
        </div>
        <div>
          Ubicación: {emisor.Ubicacion.OtrasSenas._text} (
          {emisor.Ubicacion.Provincia._text}
          {emisor.Ubicacion.Canton._text}
          {emisor.Ubicacion.Distrito._text})
        </div>
        <div>
          Teléfono: {emisor.Telefono.CodigoPais._text}{" "}
          {emisor.Telefono.NumTelefono._text}
        </div>
        <div>Email: {emisor.CorreoElectronico._text}</div>
        <hr />
      </div>
    );
  };

  const paintReceptor = (receptor: Receptor) => {
    return (
      <div>
        <h2>Receptor</h2>
        <div>Nombre: {receptor.Nombre._text}</div>
        <div>
          Identificación: {receptor.Identificacion.Numero._text} (tipo{" "}
          {receptor.Identificacion.Tipo._text})
        </div>
        <div>
          Teléfono: {receptor.Telefono.CodigoPais._text}{" "}
          {receptor.Telefono.NumTelefono._text}
        </div>
        <div>Email: {receptor.CorreoElectronico._text}</div>
        <hr />
      </div>
    );
  };

  const paintDetalleServicio = (detalle: DetalleServicio) => {
    return (
      <div>
        <h2>Detalle</h2>
        {detalle.LineaDetalle.map((linea) => {
          return (
            <div>
              <h3>Línea {linea.NumeroLinea._text}</h3>
              <div>
                Código comercial: {linea.CodigoComercial.Codigo._text} (tipo{" "}
                {linea.CodigoComercial.Tipo._text})
              </div>
              <div>Cantidad: {linea.Cantidad._text}</div>
              <div>Unidad de medida: {linea.UnidadMedida._text}</div>
              <div>Detalle: {linea.Detalle._text}</div>
              <div>Precio unitario: {linea.PrecioUnitario._text}</div>
              <div>Monto total: {linea.MontoTotal._text}</div>
              <div>Subtotal: {linea.SubTotal._text}</div>
              <h4>Impuesto</h4>
              <div>
                Monto: {linea.Impuesto.Monto._text} (código{" "}
                {linea.Impuesto.Codigo._text})
              </div>
              <div>
                Tarifa: {linea.Impuesto.Tarifa._text} (código{" "}
                {linea.Impuesto.CodigoTarifa._text})
              </div>
              <div>Impuesto neto: {linea.ImpuestoNeto._text}</div>
              <div>Monto total línea: {linea.MontoTotalLinea._text}</div>
            </div>
          );
        })}
        <hr />
      </div>
    );
  };

  const paintResumenFactura = (resumen: { [key: string]: Clave }) => {
    return (
      <div>
        <h2>Resumen</h2>
        <div>TotalServGravados: {resumen["TotalServGravados"]._text}</div>
        <div>TotalServExentos: {resumen["TotalServExentos"]._text}</div>
        <div>TotalServExonerado: {resumen["TotalServExonerado"]._text}</div>
        <div>
          TotalMercanciasGravadas: {resumen["TotalMercanciasGravadas"]._text}
        </div>
        <div>
          TotalMercanciasExentas: {resumen["TotalMercanciasExentas"]._text}
        </div>
        <div>TotalMercExonerada: {resumen["TotalMercExonerada"]._text}</div>
        <div>TotalGravado: {resumen["TotalGravado"]._text}</div>
        <div>TotalExento: {resumen["TotalExento"]._text}</div>
        <div>TotalExonerado: {resumen["TotalExonerado"]._text}</div>
        <div>TotalVenta: {resumen["TotalVenta"]._text}</div>
        <div>TotalDescuentos: {resumen["TotalDescuentos"]._text}</div>
        <div>TotalVentaNeta: {resumen["TotalVentaNeta"]._text}</div>
        <div>TotalImpuesto: {resumen["TotalImpuesto"]._text}</div>
        <div>TotalComprobante: {resumen["TotalComprobante"]._text}</div>
        <hr />
      </div>
    );
  };

  const paint = ({ FacturaElectronica }: Invoice) => {
    return (
      <div>
        <h1>Factura Electrónica</h1>
        <div>Clave: {FacturaElectronica.Clave._text}</div>
        <div>Código Actividad: {FacturaElectronica.CodigoActividad._text}</div>
        <div>Consecutivo: {FacturaElectronica.NumeroConsecutivo._text}</div>
        <div>Emisión: {FacturaElectronica.FechaEmision._text}</div>
        {paintEmisor(FacturaElectronica.Emisor)}
        {paintReceptor(FacturaElectronica.Receptor)}
        <div>Condición de venta: {FacturaElectronica.CondicionVenta._text}</div>
        <div>Plazo de credito: {FacturaElectronica.PlazoCredito._text}</div>
        <div>Medio de pago: {FacturaElectronica.MedioPago._text}</div>
        {paintDetalleServicio(FacturaElectronica.DetalleServicio)}
        {paintResumenFactura(FacturaElectronica.ResumenFactura)}
      </div>
    );
  };

  if (props.invoice != null) {
    return paint(props.invoice);
  }
  return <div>Not working</div>;
}
