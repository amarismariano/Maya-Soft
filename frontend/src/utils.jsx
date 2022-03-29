export const sortFunction = (arr, order) => {
  let catSorted = arr;

  catSorted.sort(({ name: nameA }, { name: nameB }) => {
    const textA = nameA.toUpperCase();
    const textB = nameB.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  if (order === "az") {
    return catSorted;
  }

  catSorted.sort(({ name: nameA }, { name: nameB }) => {
    const textA = nameA.toUpperCase();
    const textB = nameB.toUpperCase();
    return textA < textB ? 1 : textA > textB ? -1 : 0;
  });

  return catSorted;
};
