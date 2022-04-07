import { Rule } from "antd/lib/form";
import React from "react";
import "antd/dist/antd.css";
import "./style.css";
export interface FieldProps {
    name: string;
    label: string;
    children: React.ReactNode;
    rules?: Rule[];
    hasFeedback?: boolean;
}
declare const Field: React.FC<FieldProps>;
export default Field;
