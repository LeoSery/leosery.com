import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ThemeContext } from "../../context/themeContext";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useContext } from "react";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { themePlugin } from '@react-pdf-viewer/theme';

export default function PDFviewer() {
  const { isDark } = useContext(ThemeContext);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const themePluginInstance = themePlugin();

  return (
    <div className="w-9/12 mx-auto mt-14">
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <Viewer
          theme={isDark ? "light" : "dark"}
          fileUrl="/CV.pdf"
          plugins={[
            defaultLayoutPluginInstance,
            themePlugin
          ]}
        />
      </Worker>
    </div>
  );
}
