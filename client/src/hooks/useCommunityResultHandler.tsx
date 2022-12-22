import { ICategoriesData, ICategories } from "../Types";

/**{title : _title-_subtitle, index : _number} 형식의 data를 받아서 [..., {title:_title, subtitle:[]}, ...]의 형태로 반환하는 함수*/
const titlelistHandler = (data:ICategoriesData[]) => {
  const titles = data.map((item:ICategoriesData) => {return item.title?.split('-')[0] as string});
  const titleSet = Array.from(new Set(titles));
  const titleList = titleSet.map(t => {
    return {title:t, subtitle:[]}
  })
  return titleList;
};

/**title:string, data:ICategories[] 를 받아서 data[title]에 해당하는 subtitle[]의 원소를 리스트에 넣어서 반환 */
const subtitleHandler = (title:string, data:ICategories[]) => {
  const sortSubtitleByTitle = data.filter(i => (i.title === title));
  const subtitles = sortSubtitleByTitle.map(i => {if (i.subtitle) return i.subtitle[0]});
  return subtitles;
};

/**{title : _title-_subtitle, index : _number} 형식의 인수를 받아서 {title:_title, subtitle:[{name:_subtitle, index:_number}]} 형식으로 반환하는 함수 */
const titleSubtitleDivider = (data:ICategoriesData[]) => {
  const titleList = data.map(i =>{
    const _title = i.title?.split('-')[0] as string;
    const _subtitle = i.title?.split('-')[1] as string | undefined;
    return {title:_title, subtitle:[{name:_subtitle, index:i.index as number}]}
  })
  return titleList;
};


/**{title : _title-_subtitle, index : _number}형식의 데이터를 받아서 같은 _title을 가진 _subtitle끼리 묶어 {title:_title, subtitle:[{name:_subtitle, index:_number},...]} 형태로 반환 */
export const useCommunityResultHandler = (data:ICategoriesData[]) => {
  const titleList = titlelistHandler(data);
  const dividedlist = titleSubtitleDivider(data);
  const result = titleList.map(i =>{
    const subtitleList = subtitleHandler(i.title, dividedlist);
    return {title:i.title, subtitle:[...subtitleList]};
  })
  return result;
};