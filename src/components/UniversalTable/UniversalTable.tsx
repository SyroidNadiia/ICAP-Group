import React from "react";

type DataRow = {
  [key: string]: string | number;
};

type UniversalTableProps = {
  data: DataRow[];
};

const UniversalTable: React.FC<UniversalTableProps> = ({data}) => {
  if (!data || data.length === 0) {
    return <div>No data to display</div>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UniversalTable;
