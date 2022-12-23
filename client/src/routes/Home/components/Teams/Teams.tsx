import * as S from "./STeams";
import * as T from "../../../../GlobalComponents/Text/Text";
import teamData from "../../../../assets/StaticData/Team.json";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import {useState} from "react";
import { IHomeTeamData } from "../../../../Types";

function Teams () {
  const [team, setTeam] = useState<IHomeTeamData[]>([...teamData]);
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.contentTitle>
            <T.Pretendard17M>Teams of lemusee</T.Pretendard17M>
          </S.contentTitle>
          <S.TeamCardList>
            {team.map((list:IHomeTeamData) => (
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