import * as S from "./STeams";
import * as T from "../../Global/Text/Text";
import teamData from "../../../assets/StaticData/Team.json";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";

function Teams () {
  const teamInfo = [...teamData];
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.contentTitle>
            <T.Pretendard17M>Teams of lemusee</T.Pretendard17M>
          </S.contentTitle>
          <S.TeamCardList>
            {teamInfo.map(list => (
              <Link key={list.title} to={`community/${list.title.replace(/ /g, "")}`}>
                <TeamCard {...list}/>
              </Link>
            ))}
          </S.TeamCardList>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Teams;