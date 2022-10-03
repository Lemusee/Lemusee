import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./routes/AboutUs/AboutUs";
import Admin from "./routes/Admin/Admin";
import Archive from "./routes/Archive/Archive";
import Community from "./routes/Community/Community";
import CommunityContent from "./routes/Community/CommunityContent";
import CommunityList from "./routes/Community/CommunityList";
import Editor from "./routes/Editor/Editor";
import Home from "./routes/Home/Home";
import Login from "./routes/Member/Login";
import Members from "./routes/Member/Members";
import Player from "./routes/Player/Player";

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/members/*" element={<Members/>}>
          <Route path="login" element={<Login/>}></Route>
        </Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
        <Route path="/player/:videoId" element={<Player/>}></Route>
        <Route path="/community/:category/*" element={<Community/>}>
          <Route path="list" element={<CommunityList/>}></Route>
          <Route path="content/:contentId" element={<CommunityContent/>}></Route>
        </Route>
        <Route path="/editor" element={<Editor/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;