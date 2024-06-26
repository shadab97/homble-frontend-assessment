import { sortData } from "../helpers";

import { useEffect, useState } from "react";

const useDataTables = ({ rows }) => {
  const [data, setData] = useState(rows);

  const [sort, setSort] = useState({
    by: undefined,
    order: undefined,
    datatype: "string",
  });

  const handleHeaderClick = ({ key, datatype }) => {
    const sortObj = {
      by: key,
      datatype: datatype ?? "string",
      order: sort.order === "asc" ? "desc" : "asc",
    };
    setSort((prev) => sortObj);

    setData(sortData({ data, sortObj }));
  };

  const showSortIcon = (key) => {
    if (sort.by === key && sort.order === "asc") {
      return "▲";
    }
    if (sort.by === key && sort.order === "desc") {
      return "▼";
    }
  };

  const handleSearch = (query) => {
    const filteredData = rows.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    setData(filteredData);
  };
  const handleDeleteRow = (id) => {
    setData((prev) => prev.filter((each) => each.id !== id));
  };

  useEffect(() => {
    setData(rows);
  }, [rows]);

  return {
    data,
    sort,
    showSortIcon,
    handleDeleteRow,
    handleHeaderClick,
    handleSearch,
  };
};

export default useDataTables;
