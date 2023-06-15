import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ThemeContext } from "../../context/themeContext";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useContext } from "react";

export default function PDFviewer() {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <Viewer
          fileUrl="/CV.pdf"
          defaultScale={1}
          theme={isDark ? "light" : "dark"}
        />
      </Worker>
    </>
  );
}
