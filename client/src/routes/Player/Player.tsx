import Header from "../../GlobalComponents/Header/Header";
import * as S from "./SPlayer";
import * as T from "../../GlobalComponents/Text/Text";
import { useParams } from "react-router-dom";
import Footer from "../../GlobalComponents/Footer/Footer";
import dummyVideoDetail from "../../assets/dummyData/dummyVideoDetail.json";
import { useEffect } from "react";
import Comment from "../../GlobalComponents/Comment/Comment";
import NewCommentForm from "../../GlobalComponents/Comment/NewCommentForm";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../storage/common";

function Player () {
  const {videoId} = useParams();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const comments = [...dummyVideoDetail.result.comments];
  const videoDetail = {...dummyVideoDetail.result};
  const titles = (videoDetail.title.indexOf('(') !== -1) ? videoDetail.title.split('(') : [videoDetail.title, ')'];
  const [titleSorted, nameSorted] = [titles[0], titles[1].replace(')', '')];
  const copy = () => {
    navigator.clipboard.writeText(`https://youtu.be/${videoId}`).then(()=> {alert("링크가 복사되었습니다")});
  };

    /**클릭하면 스크롤이 위로 올라가는 함수 */
    const handleTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    };
    
    useEffect(()=> {
      handleTop();
    }, []);

  return (
    <>
      <Header thickness={false}/>
      <S.VideoWrapper>
        <S.Container>
          <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}/>
        </S.Container>
      </S.VideoWrapper>
      <S.Wrapper>
        <S.TitleContainer>
          <T.Pretendard19B>{titleSorted}</T.Pretendard19B>
          <S.TitleBox>
            <T.Pretendard13R>{nameSorted}</T.Pretendard13R>
            <button onClick={copy}>
              <T.Pretendard13R>{"공유하기"}</T.Pretendard13R>
            </button>
          </S.TitleBox>
        </S.TitleContainer>
      </S.Wrapper>
      <S.DescriptionWrapper>
        <S.DescriptionContainer>
          <T.Pretendard15R>
            {videoDetail.description}
          </T.Pretendard15R>
        </S.DescriptionContainer>
      </S.DescriptionWrapper>
      <S.CommentWrapper>
        <S.CommentContainer>
          <S.contentTitle>
            <T.Pretendard17M>comments</T.Pretendard17M>
          </S.contentTitle>
          <S.CommentsBox>
            {comments.map(list => <Comment key={list.createdAt} {...list}/>)}
          </S.CommentsBox>
          <S.CommentsBox>
            <NewCommentForm/>
          </S.CommentsBox>
        </S.CommentContainer>
      </S.CommentWrapper>
      <S.Space/>
      <Footer />
    </>
  )
}

export default Player;