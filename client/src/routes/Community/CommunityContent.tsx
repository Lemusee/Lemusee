import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import contentData from "../../assets/dummyData/dummyCommunityContent.json";
import { contentTitle } from "../../atoms";

interface IComment {
  index: number;
  writer : string;
  content : string;
  updatedAt : string;
}

interface IContent {
  index : number;
  title : string;
  updatedAt : string;
  writer : string;
  content : string;
  comment : IComment[];
}

function CommunityContent () {
  const [copydata, setCopydata] = useState<IContent>();
  const [title, setTitle] = useRecoilState(contentTitle);
  
  useEffect(()=>{
    const data = contentData.result;
  },[]);

  return (
    <>
      <h1>content area</h1>
    </>
  )
}

export default CommunityContent;