import { useSetRecoilState } from "recoil";
import { myUserIdAtom } from "../storage/user";

const useSetUserId = () => {
  const setUserId = useSetRecoilState(myUserIdAtom);
  return setUserId;
};

export default useSetUserId;