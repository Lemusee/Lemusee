import Router from './Router';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle } from "./theme";
import {ReactQueryDevtools} from "react-query/devtools";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { playlistItemState } from './storage/archive';
import { isLoadingAtom } from './storage/common';
import { isDarkThemeAtom } from './storage/common';
import { Categories } from './Types';
import dummySelfItem from "./assets/dummyData/dummySelfItems.json";
import dummySocietyItme from "./assets/dummyData/dummySocietyItems.json";
import dummyCultureItem from "./assets/dummyData/dummyCultureItems.json";
import dummyScienceItem from "./assets/dummyData/dummyScienceItem.json";
import dummyActivityItem from "./assets/dummyData/dummyActivityItem.json"
import { useEffect } from 'react';
import { authAtom } from './storage/auth';
  
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
  // const {mutate, isLoading, isError, error, isSuccess} = useMutation(axiosGetMyProfile);
  const accessToken = useRecoilValue(authAtom);
  const [videoItem, setVideoItem] = useRecoilState(playlistItemState);
  // const [channelData, setChannelData] = useRecoilState(channelState);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  useEffect(()=> {
    setVideoItem(AllVideoList);
    // setChannelData([...channelInfo]);
    setIsLoading(true);
  },[]);
  const isDark = useRecoilValue(isDarkThemeAtom);
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
