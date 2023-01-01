import curatorImg from "../images/HomeTeams/curator.png";
import contentImg from "../images/HomeTeams/content.png";
import cultureImg from "../images/HomeTeams/culture.png";
import adminImg from "../images/HomeTeams/admin.png";

export const TeamData = [
  {
    title : "curator",
    routerUrl : "/curator_notice/list",
    imgUrl : curatorImg,
    content : "강연과 박물관의 합성어인 레뮤제는 동아리 회장직을 ‘큐레이터’라고 호칭하고 있습니다. 큐레이터는 동아리 운영을 비롯한 각 팀과의 협업, 외부 기관 및 단체와 소통 등의 업무를 담당합니다."
  },
  {
    title : "contents team",
    routerUrl : "/contents_notice/list",
    imgUrl : contentImg,
    content : "컨텐츠팀은 연사자와 함께 강연을 만들어나갑니다. 강연 준비 단계에서 강연 방식에 대한 아이디어를 같이 구상하기도 하고, 정식 강연 전 리허설을 통해 연사자와 의견을 주고 받으며 레뮤지앙에게 더 좋은 강연을 들려주기 위한 활동을 합니다."
  },
  {
    title : "culture team",
    routerUrl : "/culture_notice/list",
    imgUrl : cultureImg,
    content : "컬처 팀은 강연 외 활동들을 기획합니다. 레뮤지앙끼리 친해지기 위한 프로그램을 기획하는 것이 컬쳐 팀의 가장 궁극적인 목표라고 할 수 있습니다."
  },
  {
    title : "administration team",
    routerUrl : "/admin_notice/list",
    imgUrl : adminImg,
    content : "어드민팀은 레뮤제의 다양한 활동들을 기록합니다.  어드민팀은 주로 강연 영상을 촬영하고 편집하는 업무를 도맡아 하고 있습니다. 이외에도 SNS에 레뮤제의 활동 모습들을 편집하여 업로드 합니다."
  }
]