import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function PDFviewer() {
  // const toolbarPluginInstance = toolbarPlugin({
  //   searchPlugin: {
  //     keyword: "PDF",
  //   },
  //   selectionModePlugin: {
  //     selectionMode: SelectionMode.Hand,
  //   },
  // });

  // const { Toolbar } = toolbarPluginInstance;

  return (
    <div>
      <>
        {/* <Toolbar /> */}
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js">
          <Viewer
            fileUrl="/CV.pdf"
            // plugins={[toolbarPluginInstance]}
            defaultScale={1}
          />
        </Worker>
      </>
    </div>
  );
}
