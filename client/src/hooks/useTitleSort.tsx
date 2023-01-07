const useTitleSort = (title: string | undefined) => {
  if (title && title.indexOf('(') !== -1) {
    const titles = (title.indexOf('(') !== -1) ? title.split('(') : [title, ')'];
    const [titleSorted, nameSorted] = [titles[0], titles[1].replace(')', '')];
    return [titleSorted, nameSorted];
  };
  if (title && title.indexOf('(') === -1) return [title, ""];
  if (!title) return ["", ""];
};

export default useTitleSort;