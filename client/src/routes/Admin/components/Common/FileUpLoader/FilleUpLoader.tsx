import styled from "styled-components";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as T from "../../../../../GlobalComponents/Text/Text";
import { IImgUrl, IImgFileUpLoaderPlaceholder } from "../../../../../Types";

const fileTypes = ["JPG", "PNG", "GIF"];

const ImgViewer = styled.div<IImgUrl>`
  width: 300px;
  height: 194px;
  background-image: url(${props => props.imgurl});
  background-size: cover;
  background-position: center;
  filter: ${props => props.grayscale ? `grayscale(${props.grayscale}%)` : "grayscale(0%)"};
  ${T.Pretendard15B} {
    color: transparent;
  };
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: transparent;
  };
  &:hover {
    ${T.Pretendard15B} {
      color: ${props=> props.theme.lemuseeblack_00};
    };
    div {
      background-color: rgba(0, 0, 0, 0.3);
    };
  };
`;

const FileUploaderForm = styled.div`
  width: 300px;
  height: 194px;
  label {
    min-width: 300px !important;
    width: 300px !important;
    height: 100%;
    margin: 0 28px 0 0;
    padding: 0;
    border-radius: 15px;
    border: dashed 2px ${props => props.theme.lemuseeblack_60};
    background-color: ${props => props.theme.lemuseeblack_20};
    margin: 0;
  };
  svg {
    display: none;
  };
  div {
    flex-direction: column;
    align-items: center;
  };
  span {
    font-family: Pretendard;
    color: ${props=>props.theme.lemuseeblack_60};
  };
`;

function FileUpLoader({imgUrlPlaceholder, grayscale, setRecoil}:IImgFileUpLoaderPlaceholder) {
  const [imgFile, setImgFile] = useState(null);
  const [imgURL, setImgURL] = useState<string | undefined>(imgUrlPlaceholder);
  const handleChange = (file:any) => {
    setImgFile(file);
    const url = URL.createObjectURL(file);
    setImgURL(url);
    setRecoil(prev => [...prev, file]);
  };
  const handleDelete = () => {
    setRecoil(prev => {
      if (prev.length === 1) return [];
      const index = prev.findIndex(item => item === imgFile);
      return [...prev].splice(index, 1);
    });
    setImgFile(null);
    setImgURL(undefined);
  };
  return (
    <>
      {imgURL ? (
        <ImgViewer imgurl={imgURL} grayscale={grayscale} onClick={handleDelete}>
          <div>
            <T.Pretendard15B>Click again to delete your image.</T.Pretendard15B>
          </div>
        </ImgViewer>
      ) : (
        <FileUploaderForm>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        </FileUploaderForm>
      )}
    </>
  );
}

export default FileUpLoader;