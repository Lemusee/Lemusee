import Router from './Router';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle } from "./theme";
import {ReactQueryDevtools} from "react-query/devtools";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { playlistItemCatState, playlistItemState } from './storage/archive';
import { isLoadingAtom, isLoggedInAtom } from './storage/common';
import { isDarkThemeAtom } from './storage/common';
import { Categories } from './Types';
import dummySelfItem from "./assets/dummyData/dummySelfItems.json";
import dummySocietyItme from "./assets/dummyData/dummySocietyItems.json";
import dummyCultureItem from "./assets/dummyData/dummyCultureItems.json";
import dummyScienceItem from "./assets/dummyData/dummyScienceItem.json";
import dummyActivityItem from "./assets/dummyData/dummyActivityItem.json"
import { useEffect } from 'react';
import { curationState, executiveState } from './storage/home';
import useVideoCategorySort from './hooks/useVideoCategorySort';
import useAuthAPI from './hooks/useAuthAPI';
import { getCookieToken } from './storage/accesCookie';
import { userAPI } from './api/users';
import { myPersonalDataAtom } from './storage/user';
  
const selfItemData = {...dummySelfItem};
const societyItemData = {...dummySocietyItme};
const scienceItemData = {...dummyScienceItem};
const cultureItemData = {...dummyCultureItem};
const activityItemData = {...dummyActivityItem};
const videoItemList = [
  selfItemData.items.map(list => {
    return (
      {
        id: list.id,
        playlistId : list.snippet.playlistId,
        publishedAt : list.snippet.publishedAt,
        title: list.snippet.title,
        description: list.snippet.description,
        thumnailUrl: list.snippet.thumbnails.medium?.url,
        videoURL: list.snippet.resourceId.videoId,
        category: Categories.self_dev,
      }
    )
  }),
  societyItemData.items.map(list => {
    return (
      {
        id: list.id,
        playlistId : list.snippet.playlistId,
        publishedAt : list.snippet.publishedAt,
        title: list.snippet.title,
        description: list.snippet.description,
        thumnailUrl: list.snippet.thumbnails.medium.url,
        videoURL: list.snippet.resourceId.videoId,
        category: Categories.humanities_society,
      }
    )
  }),
  scienceItemData.items.map(list => {
    return (
      {
        id: list.id,
        playlistId : list.snippet.playlistId,
        publishedAt : list.snippet.publishedAt,
        title: list.snippet.title,
        description: list.snippet.description,
        thumnailUrl: list.snippet.thumbnails.medium.url,
        videoURL: list.snippet.resourceId.videoId,
        category: Categories.science_tech,
      }
    )
  }),
  cultureItemData.items.map(list => {
    return (
      {
        id: list.id,
        playlistId : list.snippet.playlistId,
        publishedAt : list.snippet.publishedAt,
        title: list.snippet.title,
        description: list.snippet.description,
        thumnailUrl: list.snippet.thumbnails.medium.url,
        videoURL: list.snippet.resourceId.videoId,
        category: Categories.culture_art,
      }
    )
  }),
  activityItemData.items.map(list => {
    return (
      {
        id: list.id,
        playlistId : list.snippet.playlistId,
        publishedAt : list.snippet.publishedAt,
        title: list.snippet.title,
        description: list.snippet.description,
        thumnailUrl: list.snippet.thumbnails.medium.url,
        videoURL: list.snippet.resourceId.videoId,
        category: Categories.activity,
      }
    )
  }),
]
const AllVideoList = [
  ...videoItemList[0], 
  ...videoItemList[1], 
  ...videoItemList[2], 
  ...videoItemList[3], 
  ...videoItemList[4],
]


function App() {
  const isDark = useRecoilValue(isDarkThemeAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const setVideoItem = useSetRecoilState(playlistItemState);
  const setVideoCategory = useSetRecoilState(playlistItemCatState);
  const videoReady = useRecoilValue(playlistItemState);
  const curationsReady = useRecoilValue(curationState);
  const executiveReady = useRecoilValue(executiveState);
  const videoListByCategory = useVideoCategorySort(AllVideoList);
  const setUserData = useSetRecoilState(myPersonalDataAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);

  const {silentlyRefreshAccessToken} = useAuthAPI();

  useEffect(()=> {
    setVideoItem(AllVideoList);
    setVideoCategory(videoListByCategory);
    const token = getCookieToken('accessToken');
    if (token) {
      silentlyRefreshAccessToken();
    };
    if (!token) {
      userAPI.handleLogout(setUserData, setIsLoggedIn);
    };
  }, []);

  useEffect(()=> {
    if (videoReady && curationsReady && executiveReady) {
      /**videolist, executiveData, curation jwt => refreshToken??? ?????? ??????(myprofile) ????????? ???  */
      setIsLoading(false);
    };
  },[videoReady, curationsReady, executiveReady]);
  
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <Router/>
        <ReactQueryDevtools initialIsOpen={true}/>
      </ThemeProvider>
    </>
  );
}

export default App;
  