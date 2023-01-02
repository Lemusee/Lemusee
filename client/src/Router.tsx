import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./routes/AboutUs/AboutUs";
import Admin from "./routes/Admin/Admin";
import Archive from "./routes/Archive/Archive";
import Community from "./routes/Community/Community";
import CommunityContent from "./routes/Community/components/CommunityContent/CommunityContent";
import CommunityList from "./routes/Community/components/CommunityList/CommunityList";
import Editor from "./routes/Editor/Editor";
import Home from "./routes/Home/Home";
import Login from "./routes/Member/components/Login/Login";
import SignUp1 from "./routes/Member/components/SignUp1/SignUp1";
import Members from "./routes/Member/Members";
import Personal from "./routes/Personal/Personal";
import Player from "./routes/Player/Player";
import SignUp2 from "./routes/Member/components/SignUp2/SignUp2";
import FindAccount from "./routes/Member/components/FindAccount/FindAccount";
import ResetPassword from "./routes/Member/components/ResetPassword/ResetPassword";
import Recruitment from "./routes/Recruitment/Recruitment";
import Loading from "./GlobalComponents/Loading/Loading";

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/members/*" element={<Members/>}>
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup1" element={<SignUp1/>}></Route>
          {/* <Route path="signup2" element={<SignUp2/>}></Route> */}
          <Route path="findaccount" element={<FindAccount/>}></Route>
          <Route path="resetpassword" element={<ResetPassword/>}></Route>
        </Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
        <Route path="/player/:videoId" element={<Player/>}></Route>
        <Route path="/:category/*" element={<Community/>}>
          <Route path="list" element={<CommunityList/>}></Route>
          <Route path="content/:contentId" element={<CommunityContent/>}></Route>
        </Route>
        <Route path="/editor" element={<Editor/>}></Route>
        <Route path="/personal" element={<Personal/>}></Route>
        <Route path="/recruitment" element={<Recruitment/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/loading" element={<Loading/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;