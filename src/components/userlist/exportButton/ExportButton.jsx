import React from "react";
import "./_exportButton.scss";

export const ExportButton = ({ users }) => {
  const downloadJson = () => {
    const json = JSON.stringify(users);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="exportButton">
      <button onClick={downloadJson}>Download User Data</button>
    </div>
  );
};
