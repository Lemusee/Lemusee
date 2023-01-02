import * as S from "./STeams";
import * as T from "../../../../GlobalComponents/Text/Text";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import { IHomeTeamData } from "../../../../Types";
import { TeamData } from "../../../../assets/StaticData/Team";

function Teams () {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.contentTitle>
            <T.Pretendard17M>Teams of lemusee</T.Pretendard17M>
          </S.contentTitle>
          <S.TeamCardList>
            {TeamData.map((list:IHomeTeamData) => (
              <Link key={list.title} to={list.routerUrl}>
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