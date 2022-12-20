import styled from "styled-components";
import * as G from "../../components/Global/Spacing/Spacing";
import * as T from "../../components/Global/Text/Text"; 

export const hookGrid = styled.div`
  width: 510px;
  display: grid;
  row-gap: 30px;
  column-gap: 70px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 60px);
  justify-items: start;
  margin-bottom: 120px;
`;

export const btnArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: 70px;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  justify-items: start;
  gap: 70px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: left;
  justify-content: flex-start;
  ${T.Pretendard13R}{
    color: ${props=>props.theme.lemuseeblack_100};
  };
  input {
    width: 220px;
    color: ${props=>props.theme.lemuseeblack_60};
    font-size: 13px;
    font-weight: 400;
    width: 100%;
    background-color: transparent !important;
    border: none;
    outline: none;
    &:focus {
      border-bottom: 1px solid ${props=>props.theme.lemuseeblack_60};
      background-color: transparent !important;
    };
  };
  span {
    font-size: 11px;
    color: ${props=>props.theme.error_red};
    text-align: left;
  };
`;

export const GoogleLoginBtn = styled.div`
  height: 46px;
  width: 191px;
  background-image: url("https://lh3.googleusercontent.com/NSljbB1M15GOSw2Tni5PfP1w9LWyN9xPlCUnjsPAMoFkbXnxoQNON2QkT0hJx_7Xh1MBazOl-L_JEOuPoJZ3Pmsob3zJ34DZZ8dyRM92AJyPlowHTeFfjsMwdl8bW5VyJju5n2C2S30XVn5qBSFqms5vESrsAj3kOQLrlK-OGJm6VDpQK7HA0VAO4jOVN3NeoXdwP2RRPnjvEJKTErwDpEoGbHfeAl6z4hXTtVsPeZ-MD4xNmrzj2VLlUAk2HzaUbxJGDko9JM-LfEXAuXY7tG2BvyHLeO_Oc8eKZAUGM2qGmiwv_hfSX0nA8R55mkiMxHorDrYF3RZtdeNQETyUj8QfZjizW9q0UBlW8_0_xjeFN8JO97KhoBBHxjlLF2CKcaOpBSGzmb1FqMPrQd-pnkW4iXS5sbZytFxieknqP5zTty1oRaEKsAUFjlk9hYPf9--x887RrRhSMkaHgmdrhUXHfOYA2CpE9fmPomRbHyQjXKUhE2GKykLZNIIZIs32StlSn1ZK9D_v9cIaSFCgSzDPTULuQY4qob7hCvftIWXwU1HOkiDtLEAUXaENQetpBYyVmQsfAVyFmXLio5ayketXcH6FWkki_77lsLCOAIpc143oe8IwYPSxtwUdV72vztGKhCMgouFRJLOq_DockIvJC-p85Fn2rGLJpWwCK6dyBhLd5jZgxUlLEtbNr9KWObfKd-QcBRyjrMAAJ4hiFYJ4lzb9Ep4_F6ViKjazVVMlozgMVXgHmlzVF5Ir4fombi5138O1MpeqHGnS3fiONi3xew1KccIroJZs1VMOtX7pnyABuIBN2BC4NebVOJEQFr0k2294oDUYIkWX9hEtez5bjlM0vjfDk6NhHUVCoZZFk13kPJ30omXwbfcWcOD-zo--cfE4IifH0FD60SDP3SgGjVc4zpyiP9zeyQKxqmppTC3rRJOoD83cqWrvzogyX-v8IwH5GDtBufyJ-0tD7G4VLQq41cc3m3sESsk=w382-h92-no?authuser=2");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0px;
  cursor: pointer;
  &:active {
    background-image: url("https://lh3.googleusercontent.com/L5d0jvuOpv-sfOxwmN4EM37frZ5ZLfK1n2oN4RTGcFHrDnrvxLEVD4N1hBLI2uf5VPpfgsEzoeJzQZAfsToM6fejZKszdGMymRN_BeGPa82gqNgUHZLG5tgU4MchxxeZx4KVK3qVsw1RC9k7VAlvBvPtQHRqL9Rn_mVVxUZKmfxjjaTgL5zf2MDJNSsDBYRyuzxbKFWlj19gzWmxlVm7Tw98hU96PcxpJZSompCMOspwYuVlLNrEuBuzhXk2X-I325x32IiLORIBN3KlZCmLgqQxOOtN551o6BZctijFywKLnCal6IP680uqKHWpRqV1_3P5qPeBmLHLt1-y9JMQys9qxnnsGaF7c2HLB6lMHZRd9k4w9ApapBdAbSBz2ZYwK9KpIrioZ-pOtXmv_CAWOQvhIJH_3pClO2uRwuSPXD3qX2Y2kZEzi9bdffPg5ovJdl2JCHZpQYhN3Kmhj_EGNueIasRU1y8xQDFbpN03kW24muMHu11BsXJQsSVNq5XDvZ2QO5Dymhh4csERienESHrWJXpQ9kqoMx7M9MEp9JxDIVUmgWdmURX1Pbw0JbWsEnZg0CvUgJ49IOQO9PIltuwLL8GEeLh0xCeWb5L-5AzPmNFP_KLWaa-doEX4GJPb6uGuW6w2RhrIcPba_wfH4ORsYijBymM_BclLbPzTQN5fBqyyUiCngJ3P-5TNtDa5nFz5aFNAF4mMvfERO1Hmn0gJQ4-mEEW-mTSMoPbGZUZrqSQywNxNAcK7yI50zy-UyDXVYR6xBsmfgKJTEDkUuC27PJ-7dC0L-P4HYiCJ1K53imfbD9G9TKpw23otuWzxzeEAY5jyDPdGGsbeOVjRQ5flLghar21u_peo9mqhmfg_qKiujxlTfcdxxLyEEu33tWXZYGiPkCJ9wPQFJluAEx56f35jkQeTddzldheuuW0Riszy7uY360BDoeaKhKlpig7uyALq_zt9XPw63ZVxz9X5MMLuV971F2kbZJQ=w191-h46-no?authuser=2");
  }
  &:focus {
    background-image: url("https://lh3.googleusercontent.com/qP8kLmgQXysCKwj52Elmv-UaII16OU8y201wHH33XYC6caTuEnUVsUkIHWNo84S_tJ1q_wxECu1RreYBpk-WhT5gXUQoxHlZwTjdtfePPjtk5V9yX2FvtQk9HyYn0qVgQIUkQ1mVa1Bx0WBqIn9u26UTr-pKLo5pEqv_vt7fDMawDXU-66HdhvGessq9jgiaE43FMcH4aStOV-tfIcb2CjGrUGj6oHuLkijE8I1o_C4Or-izatXd2anefj9BuiMZFtXLdc9NmZ0ax0qhC0UKB6NwjmnCno9J29j6bQtLm89fkKnZX9Jhle2UpK2vg-vmuRWwq30fZ_vO9O25GFF6It_sk8p0rLAIBzk-6ia6u7Mh_dJFgNbjLG2L84PgTK2tgsSQm1b0CYjydfwj4ffmZWiOjLJOWwMEAhYbPOF70bYcYBJU5uAC6au6lDbGDm1V2wf7Gomt2WJ7v_kOryO24b8O6gynep1q9Rm_tU2u_RQJIecKNwndnF9V70nqxIHzpIzSJnIo_x_ewlG34YQuKK31fD97bERN_Oxg-m0mcW31TYmdSB7Q5g9lSRfM0liytZoDfpIWTtC4pAgv8YO7cGMBaHu69d-Z-pLCE3H7k-HnIi3bGtzy0JBa6c2G7xHL5eQejDHfDBeW_jvvjEc2fXFm7r3rlKhf7Zgn86SL3JAkwwNBN8JhrX28AE3XcgJjrmfPMCDE0gPTH2548hGUwshUcSMdVzOR7GB_EBnSC4W6c9qtVfOPXKg6YT0pJr6ilxectcuG2ObO2CAqemtbH22HhRv39aT2PUFER0o-GpZfH1sJ3wtGS4eJe4wPdCGvwGybYjN19rcUxjZvwCmhDRv_A9s4o4evyERCeg7JePYDZ8ZCUoWEsrEahRDLSc64aDelTqxyPYvQ6oPRYHiQwl9gJTFdivCS8nDjzcJCjUczDJIxRwodK42TdltKDEpdYDNXEl3vyj7YlDr_94rXIvJoC9A59m4JGVU8lTU=w191-h46-no?authuser=2");
  }
`;

export const AutoLogInInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;