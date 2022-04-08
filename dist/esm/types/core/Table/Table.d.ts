import React from "react";
import "./style.css";
interface TableProps {
    data: object[];
    columns: object[];
    rowSelection: object;
}
declare const Table: React.FC<TableProps>;
export default Table;
