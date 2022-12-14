import { useRecoilState, useRecoilValue } from "recoil";
import { communityCategoryTitleAtom, communityCategorySubTitleAtom, communityPageIndex, contentTitleAtom, newContentTitleAtom } from "../../storage/community";
import styled from "styled-components";
import * as T from "../../GlobalComponents/Text/Text";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useRef, useState, useMemo } from "react";
import "./Editor.css";
import { useNavigate } from "react-router-dom";
import NextBtn from "../../GlobalComponents/Buttons/NextBtn";

const Container = styled(G.Container)`
  align-items: center;
  width: 900px;
`;

const TitleBar = styled.div`
  z-index: 60;
  width: 100%;
  height: 190px;
  background-color: ${props=>props.theme.lemuseeblack_20};
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TitleArea = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:10px;
`;

const Title = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_50};
`;

const SubTitle = styled(T.Pretendard24B)`
  color: ${props=>props.theme.lemuseeblack_100};
  max-width: 540px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TitleInput = styled.input`
  color: ${props=>props.theme.lemuseeblack_100};
  overflow: hidden;
  width: 500px;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  background-color: transparent;
  border: none;
  outline: none;
`;

function Editor () {
  const title = useRecoilValue(communityCategoryTitleAtom);
  const subtitle = useRecoilValue(communityCategorySubTitleAtom);
  const contentTitle = useRecoilValue(contentTitleAtom);
  const [newcontentTitle, setNewContentTitle] = useRecoilState(newContentTitleAtom);
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState("");
  const navigate = useNavigate();
  /**editor ?????? (TitleInput??? ?????? onChange??? ????????? newcontentTitle recoil??? ??????) */
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewContentTitle(e.target.value);
  };


  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ 'font': [] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          ['bold', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          [{ 'align': [] }],
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],          // outdent/indent
        ],
      },
    }),
    []
  );

  return (
    <>
      <TitleBar>
        <Container>
          <TitleArea>
            <Titles>
              <Title>{`${title} /`}</Title>
              <SubTitle>{`${subtitle ? subtitle + " /" : ""}`}</SubTitle>
              <TitleInput placeholder="????????? ???????????????" onChange={onChangeHandler} maxLength={30}/>
            </Titles>
            <NextBtn 
              name="Save Changes" 
              onClick={() => {
                if(contents === ""){
                  let exit = window.confirm("????????? ????????? ????????????. ????????? ???????????? ??????????????????????");
                  if (exit) navigate(-1);
                };
                console.log(newcontentTitle, contents.replaceAll("\"", "\'"));
                navigate(-1);
              }}
              />
          </TitleArea>
        </Container>
      </TitleBar>
      <G.Wrapper>
        <Container>
          <ReactQuill
            ref={(element) => {
              if (element !== null) {
                QuillRef.current = element;
              }
            }}
            value={contents}
            onChange={setContents}
            modules={modules}
            theme="snow"
            placeholder="????????? ??????????????????."
            style={{
              width:'900px',
              minHeight:'900px',
              border:'none',
              fontFamily:'Pretendard',
              paddingBottom:'150px'
            }}
          />
        </Container>
      </G.Wrapper>
    </>
  )
}

export default Editor;