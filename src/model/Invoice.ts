// To parse this data:
//
//   import { Convert, Invoice } from "./file";
//
//   const invoice = Convert.toInvoice(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Invoice {
    _declaration:       Declaration;
    FacturaElectronica: FacturaElectronica;
}

export interface FacturaElectronica {
    _attributes:       FacturaElectronicaAttributes;
    Clave:             Clave;
    CodigoActividad:   Clave;
    NumeroConsecutivo: Clave;
    FechaEmision:      Clave;
    Emisor:            Emisor;
    Receptor:          Receptor;
    CondicionVenta:    Clave;
    PlazoCredito:      Clave;
    MedioPago:         Clave;
    DetalleServicio:   DetalleServicio;
    ResumenFactura:    { [key: string]: Clave };
    "ds:Signature":    DsSignature;
}

export interface Clave {
    _text: string;
}

export interface DetalleServicio {
    LineaDetalle: LineaDetalle[];
}

export interface LineaDetalle {
    NumeroLinea:     Clave;
    CodigoComercial: CodigoComercial;
    Cantidad:        Clave;
    UnidadMedida:    Clave;
    Detalle:         Clave;
    PrecioUnitario:  Clave;
    MontoTotal:      Clave;
    SubTotal:        Clave;
    Impuesto:        Impuesto;
    ImpuestoNeto:    Clave;
    MontoTotalLinea: Clave;
    Descuento?:      Descuento;
}

export interface CodigoComercial {
    Tipo:   Clave;
    Codigo: Clave;
}

export interface Descuento {
    MontoDescuento:      Clave;
    NaturalezaDescuento: Clave;
}

export interface Impuesto {
    Codigo:       Clave;
    CodigoTarifa: Clave;
    Tarifa:       Clave;
    Monto:        Clave;
}

export interface Emisor {
    Nombre:            Clave;
    Identificacion:    Identificacion;
    NombreComercial:   Clave;
    Ubicacion:         Ubicacion;
    Telefono:          Telefono;
    CorreoElectronico: Clave;
}

export interface Identificacion {
    Tipo:   Clave;
    Numero: Clave;
}

export interface Telefono {
    CodigoPais:  Clave;
    NumTelefono: Clave;
}

export interface Ubicacion {
    Provincia:  Clave;
    Canton:     Clave;
    Distrito:   Clave;
    OtrasSenas: Clave;
}

export interface Receptor {
    Nombre:            Clave;
    Identificacion:    Identificacion;
    Telefono:          Telefono;
    CorreoElectronico: Clave;
}

export interface FacturaElectronicaAttributes {
    "xsi:schemaLocation": string;
    xmlns:                string;
    "xmlns:xsi":          string;
    "xmlns:xsd":          string;
}

export interface DsSignature {
    _attributes:         DsSignatureAttributes;
    "ds:SignedInfo":     DsSignedInfo;
    "ds:SignatureValue": DsSignatureValue;
    "ds:KeyInfo":        DsKeyInfo;
    "ds:Object":         DsObject;
}

export interface DsSignatureAttributes {
    "xmlns:ds": string;
    Id:         string;
}

export interface DsKeyInfo {
    _attributes:   DsKeyInfoAttributes;
    "ds:X509Data": DsX509Data;
    "ds:KeyValue": DsKeyValue;
}

export interface DsKeyInfoAttributes {
    Id: string;
}

export interface DsKeyValue {
    "ds:RSAKeyValue": DsRSAKeyValue;
}

export interface DsRSAKeyValue {
    "ds:Modulus":  Clave;
    "ds:Exponent": Clave;
}

export interface DsX509Data {
    "ds:X509Certificate": Clave;
}

export interface DsObject {
    _attributes:                  DsKeyInfoAttributes;
    "xades:QualifyingProperties": XadesQualifyingProperties;
}

export interface XadesQualifyingProperties {
    _attributes:              XadesQualifyingPropertiesAttributes;
    "xades:SignedProperties": XadesSignedProperties;
}

export interface XadesQualifyingPropertiesAttributes {
    "xmlns:xades": string;
    Id:            string;
    Target:        string;
}

export interface XadesSignedProperties {
    _attributes:                        DsKeyInfoAttributes;
    "xades:SignedSignatureProperties":  XadesSignedSignatureProperties;
    "xades:SignedDataObjectProperties": XadesSignedDataObjectProperties;
}

export interface XadesSignedDataObjectProperties {
    "xades:DataObjectFormat": XadesDataObjectFormat;
}

export interface XadesDataObjectFormat {
    _attributes:      XadesDataObjectFormatAttributes;
    "xades:MimeType": Clave;
    "xades:Encoding": Clave;
}

export interface XadesDataObjectFormatAttributes {
    ObjectReference: string;
}

export interface XadesSignedSignatureProperties {
    "xades:SigningTime":               Clave;
    "xades:SigningCertificate":        XadesSigningCertificate;
    "xades:SignaturePolicyIdentifier": XadesSignaturePolicyIdentifier;
    "xades:SignerRole":                XadesSignerRole;
}

export interface XadesSignaturePolicyIdentifier {
    "xades:SignaturePolicyId": XadesSignaturePolicyID;
}

export interface XadesSignaturePolicyID {
    "xades:SigPolicyId":   XadesSigPolicyID;
    "xades:SigPolicyHash": Xades;
}

export interface Xades {
    "ds:DigestMethod": Ds;
    "ds:DigestValue":  Clave;
}

export interface Ds {
    _attributes: DsCanonicalizationMethodAttributes;
}

export interface DsCanonicalizationMethodAttributes {
    Algorithm: string;
}

export interface XadesSigPolicyID {
    "xades:Identifier":  Clave;
    "xades:Description": XadesDescription;
}

export interface XadesDescription {
}

export interface XadesSignerRole {
    "xades:ClaimedRoles": XadesClaimedRoles;
}

export interface XadesClaimedRoles {
    "xades:ClaimedRole": Clave;
}

export interface XadesSigningCertificate {
    "xades:Cert": XadesCERT;
}

export interface XadesCERT {
    "xades:CertDigest":   Xades;
    "xades:IssuerSerial": XadesIssuerSerial;
}

export interface XadesIssuerSerial {
    "ds:X509IssuerName":   Clave;
    "ds:X509SerialNumber": Clave;
}

export interface DsSignatureValue {
    _attributes: DsKeyInfoAttributes;
    _text:       string;
}

export interface DsSignedInfo {
    "ds:CanonicalizationMethod": Ds;
    "ds:SignatureMethod":        Ds;
    "ds:Reference":              DsReference[];
}

export interface DsReference {
    _attributes:       DsReferenceAttributes;
    "ds:Transforms"?:  DsTransforms;
    "ds:DigestMethod": Ds;
    "ds:DigestValue":  Clave;
}

export interface DsReferenceAttributes {
    Id?:   string;
    URI:   string;
    Type?: string;
}

export interface DsTransforms {
    "ds:Transform": Ds;
}

export interface Declaration {
    _attributes: DeclarationAttributes;
}

export interface DeclarationAttributes {
    version:  string;
    encoding: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toInvoice(json: string): Invoice {
        return cast(JSON.parse(json), r("Invoice"));
    }

    public static invoiceToJson(value: Invoice): string {
        return JSON.stringify(uncast(value, r("Invoice")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Invoice": o([
        { json: "_declaration", js: "_declaration", typ: r("Declaration") },
        { json: "FacturaElectronica", js: "FacturaElectronica", typ: r("FacturaElectronica") },
    ], false),
    "FacturaElectronica": o([
        { json: "_attributes", js: "_attributes", typ: r("FacturaElectronicaAttributes") },
        { json: "Clave", js: "Clave", typ: r("Clave") },
        { json: "CodigoActividad", js: "CodigoActividad", typ: r("Clave") },
        { json: "NumeroConsecutivo", js: "NumeroConsecutivo", typ: r("Clave") },
        { json: "FechaEmision", js: "FechaEmision", typ: r("Clave") },
        { json: "Emisor", js: "Emisor", typ: r("Emisor") },
        { json: "Receptor", js: "Receptor", typ: r("Receptor") },
        { json: "CondicionVenta", js: "CondicionVenta", typ: r("Clave") },
        { json: "PlazoCredito", js: "PlazoCredito", typ: r("Clave") },
        { json: "MedioPago", js: "MedioPago", typ: r("Clave") },
        { json: "DetalleServicio", js: "DetalleServicio", typ: r("DetalleServicio") },
        { json: "ResumenFactura", js: "ResumenFactura", typ: m(r("Clave")) },
        { json: "ds:Signature", js: "ds:Signature", typ: r("DsSignature") },
    ], false),
    "Clave": o([
        { json: "_text", js: "_text", typ: "" },
    ], false),
    "DetalleServicio": o([
        { json: "LineaDetalle", js: "LineaDetalle", typ: a(r("LineaDetalle")) },
    ], false),
    "LineaDetalle": o([
        { json: "NumeroLinea", js: "NumeroLinea", typ: r("Clave") },
        { json: "CodigoComercial", js: "CodigoComercial", typ: r("CodigoComercial") },
        { json: "Cantidad", js: "Cantidad", typ: r("Clave") },
        { json: "UnidadMedida", js: "UnidadMedida", typ: r("Clave") },
        { json: "Detalle", js: "Detalle", typ: r("Clave") },
        { json: "PrecioUnitario", js: "PrecioUnitario", typ: r("Clave") },
        { json: "MontoTotal", js: "MontoTotal", typ: r("Clave") },
        { json: "SubTotal", js: "SubTotal", typ: r("Clave") },
        { json: "Impuesto", js: "Impuesto", typ: r("Impuesto") },
        { json: "ImpuestoNeto", js: "ImpuestoNeto", typ: r("Clave") },
        { json: "MontoTotalLinea", js: "MontoTotalLinea", typ: r("Clave") },
        { json: "Descuento", js: "Descuento", typ: u(undefined, r("Descuento")) },
    ], false),
    "CodigoComercial": o([
        { json: "Tipo", js: "Tipo", typ: r("Clave") },
        { json: "Codigo", js: "Codigo", typ: r("Clave") },
    ], false),
    "Descuento": o([
        { json: "MontoDescuento", js: "MontoDescuento", typ: r("Clave") },
        { json: "NaturalezaDescuento", js: "NaturalezaDescuento", typ: r("Clave") },
    ], false),
    "Impuesto": o([
        { json: "Codigo", js: "Codigo", typ: r("Clave") },
        { json: "CodigoTarifa", js: "CodigoTarifa", typ: r("Clave") },
        { json: "Tarifa", js: "Tarifa", typ: r("Clave") },
        { json: "Monto", js: "Monto", typ: r("Clave") },
    ], false),
    "Emisor": o([
        { json: "Nombre", js: "Nombre", typ: r("Clave") },
        { json: "Identificacion", js: "Identificacion", typ: r("Identificacion") },
        { json: "NombreComercial", js: "NombreComercial", typ: r("Clave") },
        { json: "Ubicacion", js: "Ubicacion", typ: r("Ubicacion") },
        { json: "Telefono", js: "Telefono", typ: r("Telefono") },
        { json: "CorreoElectronico", js: "CorreoElectronico", typ: r("Clave") },
    ], false),
    "Identificacion": o([
        { json: "Tipo", js: "Tipo", typ: r("Clave") },
        { json: "Numero", js: "Numero", typ: r("Clave") },
    ], false),
    "Telefono": o([
        { json: "CodigoPais", js: "CodigoPais", typ: r("Clave") },
        { json: "NumTelefono", js: "NumTelefono", typ: r("Clave") },
    ], false),
    "Ubicacion": o([
        { json: "Provincia", js: "Provincia", typ: r("Clave") },
        { json: "Canton", js: "Canton", typ: r("Clave") },
        { json: "Distrito", js: "Distrito", typ: r("Clave") },
        { json: "OtrasSenas", js: "OtrasSenas", typ: r("Clave") },
    ], false),
    "Receptor": o([
        { json: "Nombre", js: "Nombre", typ: r("Clave") },
        { json: "Identificacion", js: "Identificacion", typ: r("Identificacion") },
        { json: "Telefono", js: "Telefono", typ: r("Telefono") },
        { json: "CorreoElectronico", js: "CorreoElectronico", typ: r("Clave") },
    ], false),
    "FacturaElectronicaAttributes": o([
        { json: "xsi:schemaLocation", js: "xsi:schemaLocation", typ: "" },
        { json: "xmlns", js: "xmlns", typ: "" },
        { json: "xmlns:xsi", js: "xmlns:xsi", typ: "" },
        { json: "xmlns:xsd", js: "xmlns:xsd", typ: "" },
    ], false),
    "DsSignature": o([
        { json: "_attributes", js: "_attributes", typ: r("DsSignatureAttributes") },
        { json: "ds:SignedInfo", js: "ds:SignedInfo", typ: r("DsSignedInfo") },
        { json: "ds:SignatureValue", js: "ds:SignatureValue", typ: r("DsSignatureValue") },
        { json: "ds:KeyInfo", js: "ds:KeyInfo", typ: r("DsKeyInfo") },
        { json: "ds:Object", js: "ds:Object", typ: r("DsObject") },
    ], false),
    "DsSignatureAttributes": o([
        { json: "xmlns:ds", js: "xmlns:ds", typ: "" },
        { json: "Id", js: "Id", typ: "" },
    ], false),
    "DsKeyInfo": o([
        { json: "_attributes", js: "_attributes", typ: r("DsKeyInfoAttributes") },
        { json: "ds:X509Data", js: "ds:X509Data", typ: r("DsX509Data") },
        { json: "ds:KeyValue", js: "ds:KeyValue", typ: r("DsKeyValue") },
    ], false),
    "DsKeyInfoAttributes": o([
        { json: "Id", js: "Id", typ: "" },
    ], false),
    "DsKeyValue": o([
        { json: "ds:RSAKeyValue", js: "ds:RSAKeyValue", typ: r("DsRSAKeyValue") },
    ], false),
    "DsRSAKeyValue": o([
        { json: "ds:Modulus", js: "ds:Modulus", typ: r("Clave") },
        { json: "ds:Exponent", js: "ds:Exponent", typ: r("Clave") },
    ], false),
    "DsX509Data": o([
        { json: "ds:X509Certificate", js: "ds:X509Certificate", typ: r("Clave") },
    ], false),
    "DsObject": o([
        { json: "_attributes", js: "_attributes", typ: r("DsKeyInfoAttributes") },
        { json: "xades:QualifyingProperties", js: "xades:QualifyingProperties", typ: r("XadesQualifyingProperties") },
    ], false),
    "XadesQualifyingProperties": o([
        { json: "_attributes", js: "_attributes", typ: r("XadesQualifyingPropertiesAttributes") },
        { json: "xades:SignedProperties", js: "xades:SignedProperties", typ: r("XadesSignedProperties") },
    ], false),
    "XadesQualifyingPropertiesAttributes": o([
        { json: "xmlns:xades", js: "xmlns:xades", typ: "" },
        { json: "Id", js: "Id", typ: "" },
        { json: "Target", js: "Target", typ: "" },
    ], false),
    "XadesSignedProperties": o([
        { json: "_attributes", js: "_attributes", typ: r("DsKeyInfoAttributes") },
        { json: "xades:SignedSignatureProperties", js: "xades:SignedSignatureProperties", typ: r("XadesSignedSignatureProperties") },
        { json: "xades:SignedDataObjectProperties", js: "xades:SignedDataObjectProperties", typ: r("XadesSignedDataObjectProperties") },
    ], false),
    "XadesSignedDataObjectProperties": o([
        { json: "xades:DataObjectFormat", js: "xades:DataObjectFormat", typ: r("XadesDataObjectFormat") },
    ], false),
    "XadesDataObjectFormat": o([
        { json: "_attributes", js: "_attributes", typ: r("XadesDataObjectFormatAttributes") },
        { json: "xades:MimeType", js: "xades:MimeType", typ: r("Clave") },
        { json: "xades:Encoding", js: "xades:Encoding", typ: r("Clave") },
    ], false),
    "XadesDataObjectFormatAttributes": o([
        { json: "ObjectReference", js: "ObjectReference", typ: "" },
    ], false),
    "XadesSignedSignatureProperties": o([
        { json: "xades:SigningTime", js: "xades:SigningTime", typ: r("Clave") },
        { json: "xades:SigningCertificate", js: "xades:SigningCertificate", typ: r("XadesSigningCertificate") },
        { json: "xades:SignaturePolicyIdentifier", js: "xades:SignaturePolicyIdentifier", typ: r("XadesSignaturePolicyIdentifier") },
        { json: "xades:SignerRole", js: "xades:SignerRole", typ: r("XadesSignerRole") },
    ], false),
    "XadesSignaturePolicyIdentifier": o([
        { json: "xades:SignaturePolicyId", js: "xades:SignaturePolicyId", typ: r("XadesSignaturePolicyID") },
    ], false),
    "XadesSignaturePolicyID": o([
        { json: "xades:SigPolicyId", js: "xades:SigPolicyId", typ: r("XadesSigPolicyID") },
        { json: "xades:SigPolicyHash", js: "xades:SigPolicyHash", typ: r("Xades") },
    ], false),
    "Xades": o([
        { json: "ds:DigestMethod", js: "ds:DigestMethod", typ: r("Ds") },
        { json: "ds:DigestValue", js: "ds:DigestValue", typ: r("Clave") },
    ], false),
    "Ds": o([
        { json: "_attributes", js: "_attributes", typ: r("DsCanonicalizationMethodAttributes") },
    ], false),
    "DsCanonicalizationMethodAttributes": o([
        { json: "Algorithm", js: "Algorithm", typ: "" },
    ], false),
    "XadesSigPolicyID": o([
        { json: "xades:Identifier", js: "xades:Identifier", typ: r("Clave") },
        { json: "xades:Description", js: "xades:Description", typ: r("XadesDescription") },
    ], false),
    "XadesDescription": o([
    ], false),
    "XadesSignerRole": o([
        { json: "xades:ClaimedRoles", js: "xades:ClaimedRoles", typ: r("XadesClaimedRoles") },
    ], false),
    "XadesClaimedRoles": o([
        { json: "xades:ClaimedRole", js: "xades:ClaimedRole", typ: r("Clave") },
    ], false),
    "XadesSigningCertificate": o([
        { json: "xades:Cert", js: "xades:Cert", typ: r("XadesCERT") },
    ], false),
    "XadesCERT": o([
        { json: "xades:CertDigest", js: "xades:CertDigest", typ: r("Xades") },
        { json: "xades:IssuerSerial", js: "xades:IssuerSerial", typ: r("XadesIssuerSerial") },
    ], false),
    "XadesIssuerSerial": o([
        { json: "ds:X509IssuerName", js: "ds:X509IssuerName", typ: r("Clave") },
        { json: "ds:X509SerialNumber", js: "ds:X509SerialNumber", typ: r("Clave") },
    ], false),
    "DsSignatureValue": o([
        { json: "_attributes", js: "_attributes", typ: r("DsKeyInfoAttributes") },
        { json: "_text", js: "_text", typ: "" },
    ], false),
    "DsSignedInfo": o([
        { json: "ds:CanonicalizationMethod", js: "ds:CanonicalizationMethod", typ: r("Ds") },
        { json: "ds:SignatureMethod", js: "ds:SignatureMethod", typ: r("Ds") },
        { json: "ds:Reference", js: "ds:Reference", typ: a(r("DsReference")) },
    ], false),
    "DsReference": o([
        { json: "_attributes", js: "_attributes", typ: r("DsReferenceAttributes") },
        { json: "ds:Transforms", js: "ds:Transforms", typ: u(undefined, r("DsTransforms")) },
        { json: "ds:DigestMethod", js: "ds:DigestMethod", typ: r("Ds") },
        { json: "ds:DigestValue", js: "ds:DigestValue", typ: r("Clave") },
    ], false),
    "DsReferenceAttributes": o([
        { json: "Id", js: "Id", typ: u(undefined, "") },
        { json: "URI", js: "URI", typ: "" },
        { json: "Type", js: "Type", typ: u(undefined, "") },
    ], false),
    "DsTransforms": o([
        { json: "ds:Transform", js: "ds:Transform", typ: r("Ds") },
    ], false),
    "Declaration": o([
        { json: "_attributes", js: "_attributes", typ: r("DeclarationAttributes") },
    ], false),
    "DeclarationAttributes": o([
        { json: "version", js: "version", typ: "" },
        { json: "encoding", js: "encoding", typ: "" },
    ], false),
};
