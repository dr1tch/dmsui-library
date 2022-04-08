import { Table as Tableau } from "antd";
import React from "react";
import "./style.css";
interface TableProps {
  data: object[];
  columns: object[];
  rowSelection: object;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  rowSelection,
  ...rest
}) => {
  return (
    <Tableau
      rowSelection={rowSelection}
      dataSource={data}
      columns={columns}
      pagination={{
        position: ["bottomRight"],
        // onShowSizeChange: (current, size) => `Total: ${size} lignes`,
        showSizeChanger: true,
        defaultPageSize: 8,
        // showQuickJumper: true,
        showTotal: (total) => `Total: ${total} lignes`,
        pageSizeOptions: [5, 8, 10, 16, 20, 30, 40, 50],
        size: "default",
      }}
      size="small"
      // rowKey={(record) => record.key}
    />
  );
};

export default Table;
