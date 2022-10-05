import Header from "../../components/Global/Header/Header";
import * as S from "./SPlayer";
import * as T from "../../components/Global/Text/Text";
import { useParams } from "react-router-dom";
import Footer from "../../components/Global/Footer/Footer";
import CommentsData from "../../assets/dummyData/dummyComments.json";
import CommentsCard from "../../components/PlayerComponents/CommentsCard";
import dummyVideoDetail from "../../assets/dummyData/dummyVideoDetail.json";

function Player () {
  const {videoId} = useParams();
  const comments = [...CommentsData.result.items];
  const videoDetail = {...dummyVideoDetail.result};
  const copy = () => {
    navigator.clipboard.writeText(`https://youtu.be/${videoId}`).then(()=> {alert("링크가 복사되었습니다")});
  };
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
          <T.Pretendard19B>{videoDetail.title}</T.Pretendard19B>
          <S.TitleBox>
            <T.Pretendard13R>{videoDetail.speaker}</T.Pretendard13R>
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
            {comments.map(list => <CommentsCard key={list.createdAt} {...list}/>)}
          </S.CommentsBox>
        </S.CommentContainer>
      </S.CommentWrapper>
      <S.Space/>
      <Footer />
    </>
  )
}

export default Player;