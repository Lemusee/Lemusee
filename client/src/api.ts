import axios from "axios";


//======youtube Item apis

// import dotenv from "dotenv";
// dotenv.config({ path: "../.env", encoding: "utf8" });

// const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const API_KEY = `AIzaSyBTRV2lZH0H0p-r4MRdDIW8NBpF-2ruSrw`;

const BASE_URL = `https://www.googleapis.com/youtube/v3`
const CHANNEL_ID = `UCGagrr6S5Q8dGXkxnT-ScmA`;
const playlistIDs = {
  PLAYLIST_SELF_ID : `PLUxiW-oLdlowhJ0--Q3qm85e_ob85O7Pd`,
  PLAYLIST_CULTURE_ID : `PLUxiW-oLdloyMVkEatxjriCa_ebmihgRX`,
  PLAYLIST_SOCIETY_ID : `PLUxiW-oLdlowIfhNXnjXe7CZRbr2_09PP`,
  PLAYLIST_SCIENCE_ID : `PLUxiW-oLdloxf1adb5EaS5UosufnEUaRL`,
  PLAYLIST_ACTIVITY_ID : `PLUxiW-oLdlowtNuQjr1II556i7wiIaeWs`,
};

export function fetchChannelInfo(){
  return fetch(`${BASE_URL}/chennels?key=${API_KEY}&id=${CHANNEL_ID}&part=snippet,contentDetails,statistics`).then(response => response.json());
};

export function fetchActivityItem(){
  return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_ACTIVITY_ID}&key=${API_KEY}`).then(response => response.json());
};
export function fetchSelfItem(){
  return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_SELF_ID}&key=${API_KEY}`).then(response => response.json());
};
export function fetchCultureItem(){
  return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_CULTURE_ID}&key=${API_KEY}`).then(response => response.json());
};
export function fetchSocietyItem(){
  return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_SOCIETY_ID}&key=${API_KEY}`).then(response => response.json());
};
export function fetchScienceItem(){
  return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_SCIENCE_ID}&key=${API_KEY}`).then(response => response.json());
};

export function fetchVideoDetail(VIDEO_ID:string){
  return fetch(`${BASE_URL}/videos?part=snippet&status=&id=${VIDEO_ID}&key=${API_KEY}`);
}

//=========================

export interface IJoinBody {
  name: string;
  email: string;
  password: string;
  birthYear?: number;
  depaartment?: string;
  phone?: string;
  studentId?: string;
  introduce?: string;
  team?: string;
  role?: string;
  isChief?: boolean;
};

export function fetchJoin (joinData :IJoinBody){
  return fetch('/auth/join', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joinData),
  }).then(response => response.json())
  .catch((error) => console.log(error));
};

export interface ISignupBody {
  name: string;
  password: string;
  autoSignup: boolean;
};

export function fetchSignup (signupData: ISignupBody) {
  return fetch('/auth/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  }).then(response => response.json())
  .catch((error) => console.log(error));
};



const BASE_URL1 = `https://api.coinpaprika.com/v1`

export function fetchCoins(){
  return fetch(`${BASE_URL1}/coins`).then(response => response.json());
};