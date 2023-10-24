import React from "react";
import styles from "./UniversalTable.module.scss";

type DataRow = {
  [key: string]: string | number;
};

type UniversalTableProps = {
  data: DataRow[];
};

const UniversalTable: React.FC<UniversalTableProps> = ({ data }) => {
  const columns = Object.keys(data[0]);

  return (
    <table className={styles.universalTable}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className={styles.universalHeader}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow}
          >
            {columns.map((column) => (
              <td key={column} className={styles.universalCell}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UniversalTable;
