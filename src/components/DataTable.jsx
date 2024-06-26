import React from "react";
import useDataTable from "../hooks/useDataTable";
const DataTable = ({ caption, headers, rows, showSearch }) => {
  const {
    data,
    handleSearch,
    handleDeleteRow,
    showSortIcon,
    handleHeaderClick,
  } = useDataTable({
    rows,
  });

  return (
    <div>
      <caption className="d-flex align-items-center justify-content-between">
        <h5>{caption}</h5>
        {showSearch && (
          <input
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search from any key..."
            type="search"
          />
        )}
      </caption>

      <table>
        <thead>
          <tr>
            {headers?.map((each) => (
              <th
                scope="col"
                className="cursor-pointer"
                key={each.key}
                onClick={() =>
                  handleHeaderClick({
                    key: each.key,
                    datatype: each?.datatype ?? "string",
                  })
                }
              >
                {each.label}
                <sup>{showSortIcon(each.key)}</sup>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((each) => {
            return (
              <tr key={Object.values(each).join(",")}>
                {headers.map((h) => (
                  <td
                    key={h.key}
                    onClick={() =>
                      h.onClick ? h.onClick(h.key, each) : undefined
                    }
                  >
                    {h.renderer
                      ? h.renderer({ key: h.key, row: each, handleDeleteRow })
                      : each[h.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
