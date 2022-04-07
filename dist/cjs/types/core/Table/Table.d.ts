import React from "react";
import "antd/dist/antd.css";
import "./style.css";
interface TableProps {
    data: object[];
    columns: object[];
    rowSelection: object;
}
declare const Table: React.FC<TableProps>;
export default Table;
