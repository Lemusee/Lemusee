import * as S from "./STeams";
import * as T from "../../Global/Text/Text";
import teamData from "../../../assets/StaticData/Team.json";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import {useState} from "react";

interface ITeam {
  title : string;
  routerUrl : string;
  imgUrl : string;
  content : string;
};

function Teams () {
  const [team, setTeam] = useState<ITeam[]>([...teamData]);
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.contentTitle>
            <T.Pretendard17M>Teams of lemusee</T.Pretendard17M>
          </S.contentTitle>
          <S.TeamCardList>
            {team.map((list:ITeam) => (
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