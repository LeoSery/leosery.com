import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { printPlugin } from "@react-pdf-viewer/print";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import React from "react";

export default function PDFviewer() {
  return (
    <div>
      <>
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js">
          <Viewer
            fileUrl="/CV.pdf"
            plugins={[
              fullScreenPlugin,
              printPlugin,
              getFilePlugin,
              toolbarPlugin,
              zoomPlugin,
            ]}
            defaultScale={1}
          />
        </Worker>
      </>
    </div>
  );
}
