import { DefaultOptionType } from "antd/lib/select";
import React from "react";
import "./index.css";
interface ISelect {
    placeholder: React.ReactNode;
    options: {
        value: any;
        title: string;
    }[];
    onChange: ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined;
    isDisabled?: boolean;
}
declare const Select: React.FC<ISelect>;
export default Select;
