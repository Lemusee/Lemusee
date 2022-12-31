import { useSetRecoilState } from "recoil";
import { myUserIdAtom } from "../atoms";

const useSetUserId = () => {
  const setUserId = useSetRecoilState(myUserIdAtom);
  return setUserId;
};

export default useSetUserId;