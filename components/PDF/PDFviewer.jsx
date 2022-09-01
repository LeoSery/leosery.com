import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { ThemeContext } from "../../context/themeContext";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useContext } from "react";

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

  const { isDark } = useContext(ThemeContext);

  return (
    <>
      {/* <Toolbar /> */}
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js">
        <Viewer
          fileUrl="/CV.pdf"
          // plugins={[toolbarPluginInstance]}
          defaultScale={1}
          theme={isDark ? "light" : "dark"}
        />
      </Worker>
    </>
  );
}
