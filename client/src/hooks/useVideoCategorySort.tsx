import moment from "moment";
import { Categories, IVideoItems } from "../Types";

const useVideoCategorySort = (videoList:IVideoItems[] | null) => {
  if (videoList) {
    const AllVideoListByCat = {
      recent : [...videoList].sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), "seconds")).reverse(),
      atoz : [...videoList].sort((a,b) => {
        if(a.title.toLowerCase() > b.title.toLowerCase()) return 1; 
        if(a.title.toLowerCase() < b.title.toLowerCase()) return -1; 
        return 0;
        }),
      self_dev : [...videoList].filter(list => list.category === Categories.self_dev).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
      humanities_society : [...videoList].filter(list => list.category === Categories.humanities_society).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
      culture_art : [...videoList].filter(list => list.category === Categories.culture_art).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
      science_tech : [...videoList].filter(list => list.category === Categories.science_tech).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
      activity : [...videoList].filter(list => list.category === Categories.activity).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
    };
    
    return AllVideoListByCat;
  };
  if (videoList === null) return null;
  else return null;
};
export default useVideoCategorySort;

