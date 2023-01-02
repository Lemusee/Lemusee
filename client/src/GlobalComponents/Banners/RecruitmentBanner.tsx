import { Link } from "react-router-dom";
import ApplyBtn from "../Buttons/ApplyBtn";
import * as T from "../Text/Text";
import * as S from "./SRecruitmentBanner";
import dummyRecruitmentData from "../../assets/dummyData/dummyRecruitment.json";
import moment from "moment";
import { useRecoilState } from "recoil";
import { recruitmentInfoAtom } from "../../storage/common";
import { isRecruitmentAtom } from "../../storage/common";
import { useEffect, useState } from "react";
import Moment from "react-moment";

function RecruitmentBanner () {
  const [recruitmentInfo, setRecruitmentInfo] = useRecoilState(recruitmentInfoAtom);
  const [isRecruitment, setIsRecruitment] = useRecoilState(isRecruitmentAtom);
  const today = moment().format('YYYY-MM-DDTHH:MM:SSZ');
  const isOutdated = moment(today).isBefore(dummyRecruitmentData.result.due_at);
  useEffect(()=>{
    setRecruitmentInfo({...dummyRecruitmentData.result});
    setIsRecruitment(isOutdated);
    // console.log("recruitment", moment(today).isBefore(recruitmentInfo.due_at), isOutdated);
  }, [isOutdated]);

  return (
    <>
      {isRecruitment ? 
        <S.Wrapper>
          <S.Container>
            <S.InfoArea>
              <T.Pretendard21B>now on recruiting!</T.Pretendard21B>
              <T.Pretendard21R>
              <Moment format="YYYY. MM. DD. HH:MM 까지">
                  {recruitmentInfo.due_at}
              </Moment>
              </T.Pretendard21R>
            </S.InfoArea>
            <Link to="/recruitment">
              <ApplyBtn type={"button"} name={"Go to apply"}/>
            </Link>
          </S.Container>
        </S.Wrapper>
      : <></> }
    </>
  )
}

export default RecruitmentBanner;