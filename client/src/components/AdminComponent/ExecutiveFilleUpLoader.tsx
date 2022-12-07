import styled from "styled-components";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function ExecutiveFileUpLoader() {
  const [imgFile, setImgFile] = useState(null);
  const handleChange = (file:any) => {
    setImgFile(file);
  };
  return (
    <>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </>
  );
}

export default ExecutiveFileUpLoader;