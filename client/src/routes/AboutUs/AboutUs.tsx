import Header from "../../GlobalComponents/Header/Header";
import Footer from "../../GlobalComponents/Footer/Footer";
import * as T from "../../GlobalComponents/Text/Text";
import * as S from "./SAboutUs";
import * as G from "../../GlobalComponents/Spacing/Spacing";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";

function AboutUs () {
  return (
    <>
      <S.Wrapper>
        <Header thickness={false} isDark={true}/>
        <S.Content>
          <S.LogoRound>
            <Logo/>
          </S.LogoRound>
          <S.NanumMyeongjo24R>따뜻한 인간관계를 바탕으로 수평적인 지식나눔을 추구합니다.</S.NanumMyeongjo24R>
          <G.Spacer height={20}/>
          <T.Pretendard17R>레뮤제(Le’Musée)는 영어로 강연을 뜻하는 ‘Lecture’와 불어로 박물관을 뜻하는<br/> ‘Musée’를 합성한 말로 ‘강연 박물관’이라는 뜻입니다.</T.Pretendard17R>
          <G.Spacer height={50}/>
          <S.VerticalBar/>
          <G.Spacer height={100}/>
          <T.Pretendard17R>서로 다른 환경에 있고, 서로 다른 생각과 관심사를 가진 다양한 사람들이 모여서<br/> 지식과 경험을 공유하고 대화를 나누는 것이 레뮤제의 지식나눔 활동입니다.</T.Pretendard17R>
          <G.Spacer height={40}/>
          <G.HorizentalBar width={20}/>
          <G.Spacer height={40}/>
          <T.Pretendard17R>2008년부터 매주 다른 주제로 이야기를 나누는 ‘잡담’이라는 대학생들의 모임에서 출발하여,<br/> 구성원들이 직접 강연의 연사자가 되고 청중으로 참여하는 지식나눔활동을 지속하고 있습니다.</T.Pretendard17R>
          <G.Spacer height={90}/>
          <S.DimmedPretendard17R>레뮤제는 지식 나눔을 목적으로 하는 비영리 모임으로 어떠한 상업적/정치적 목적도 배제합니다.</S.DimmedPretendard17R>
          <G.Spacer height={100}/>
          <G.VerticalBar height={150}/>
          <G.Spacer height={200}/>
          <S.MiddleBanner>
            <S.MiddleImg>
              <S.NanumMyeongjo24R>“레뮤제의 무대는 화려하지 않습니다”</S.NanumMyeongjo24R>
            </S.MiddleImg>
          </S.MiddleBanner>
          <G.Spacer height={70}/>
          <T.Pretendard17R>청중의 규모도 작습니다.</T.Pretendard17R>
          <G.Spacer height={40}/>
          <T.Pretendard17R>하지만 레뮤제의 무대는 누구에게나 열려 있습니다.</T.Pretendard17R>
          <G.Spacer height={40}/>
          <T.Pretendard17R>유명하지 않아도, 훌륭한 업적이 없어도, 귀 기울일만한 이야기가 있고 나눌 수 있는 지식과 경험이 있다는 생각이<br/> 레뮤제를 지속되게 한 힘입니다.</T.Pretendard17R>
          <G.Spacer height={70}/>
          <S.NanumMyeongjo17R>“레뮤제에서는 누구나 연사자와 청중이 될 수 있습니다”</S.NanumMyeongjo17R>
          <G.Spacer height={65}/>
          <G.HorizentalBar width={20}/>
          <G.Spacer height={65}/>
          <T.Pretendard17R>레뮤제의 무대 위에 오른 연사자가 기대에 미치지 못할 수도 있고 강연 내용이 틀릴 수도 있지만,<br/> 그에 대한 비방보다는 적극적인 소통이 필요합니다.</T.Pretendard17R>
          <G.Spacer height={40}/>
          <T.Pretendard17R>서로 다른 환경, 생각, 관심사를 가진 다양한 사람들이 모여서 지식과 경험을 공유하고 대화를 나누는 것이 레뮤제의 지식나눔활동입니다.<br/>연사자와 청중 모두가 지식나눔의 능동적 주체로 참여하여 함께 성장하는 것이 레뮤제가 추구하는 가치입니다.</T.Pretendard17R>
          <G.Spacer height={70}/>
          <S.NanumMyeongjo17R>"연사자, 청중, 레뮤지앙은 같이 성장합니다."</S.NanumMyeongjo17R>
          <G.Spacer height={150}/>
          <S.BottomImg/>
          <G.Spacer height={40}/>
          <S.NanumMyeongjo24R>"레뮤제는 따뜻한 인간관계를 바탕으로 한<br/> 지식 나눔을 지향합니다."</S.NanumMyeongjo24R>
          <G.Spacer height={50}/>
          <T.Pretendard17R>레뮤제의 지식 나눔 활동은 '인간적 관계 형성’을 기반으로 합니다.<br/>상호간의 신뢰와 소통을 바탕으로 한 지속가능한 지식 나눔을 지향합니다.</T.Pretendard17R>
          <G.Spacer height={40}/>
          <T.Pretendard17R>이를 통해 다양한 사회 구성원들이 지식과 경험을 공유할 뿐 아니라 서로 소통하게 되고, <br/>궁극적으로는 사회 소외계층의 교육과 지식습득의 장벽을 낮추는데 일조하고자 합니다.</T.Pretendard17R>
          <G.Spacer height={70}/>
          <G.VerticalBar height={150}/>
          <G.Spacer height={200}/>
          <Footer isDark={true}/>
        </S.Content>
        <S.TopBanner/>
      </S.Wrapper>
    </>
  )
}

export default AboutUs;