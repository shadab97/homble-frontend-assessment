const stringSorter = (a, b, sortOrder) => {
  if (sortOrder === "asc") {
    return a.localeCompare(b);
  } else {
    return b.localeCompare(a);
  }
};

const numberSorter = (a, b, sortOrder) => {
  if (sortOrder === "asc") {
    return a - b;
  } else {
    return b - a;
  }
};

export const sortData = ({ data, sortObj }) => {
  return data?.sort((a, b) => {
    const aValue = a[sortObj.by];
    const bValue = b[sortObj.by];

    if (sortObj?.datatype === "string") {
      return stringSorter(aValue, bValue, sortObj.order);
    } else if (sortObj.datatype === "number") {
      return numberSorter(aValue, bValue, sortObj.order);
    } else {
      return 0;
    }
  });
};
