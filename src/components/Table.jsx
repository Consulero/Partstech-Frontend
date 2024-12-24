const Table = ({ data, columns, onRowSelect }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-300">
      <div className="overflow-auto" style={{ maxHeight: "420px" }}>
        <table className="table-auto w-full">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border-b bg-gray-200 p-2 text-sm text-left text-semibold"
                  style={{ width: column.width || "auto" }}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={row.selected ? "bg-green-100" : ""}
                onClick={() => onRowSelect(rowIndex)}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-b border-gray-300 p-1 text-sm pl-2"
                  >
                    {typeof row[column.key] === "boolean" ? (
                      <span
                        className={`px-3 py-1 rounded-md text-white text-xs font-semibold ${
                          row[column.key] ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {row[column.key] ? "True" : "False"}
                      </span>
                    ) : (
                      row[column.key]?.toString()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
