import React, { useState } from "react";
import convert from "xml-js";
import { Convert, Invoice } from "./model/Invoice";
import { Viewer } from "./Viewer";

function App() {
  const [invoice, setInvoice] = useState<Invoice>();

  const showFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const reader: FileReader = new FileReader();
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      const text: any = e.target!.result;
      const json: string = convert.xml2json(text?.toString()!, {
        compact: true,
      });
      const invoice: Invoice = Convert.toInvoice(json);
      setInvoice(invoice);
    };
    reader.readAsText(e.target.files![0]);
  };

  return (
    <div>
      <input type="file" accept="text/xml" onChange={(e) => showFile(e)} />
      <Viewer invoice={invoice!} />
    </div>
  );
}

export default App;
