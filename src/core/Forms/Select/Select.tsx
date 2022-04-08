import { Select as Selectionner } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import React from "react";
import "./index.css";
const { Option } = Selectionner;

interface ISelect {
  placeholder: React.ReactNode;
  options: { value: any; title: string }[];
  onChange:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  isDisabled?: boolean;
}

const Select: React.FC<ISelect> = ({
  placeholder,
  options,
  isDisabled = false,
  onChange,
  ...rest
}) => {
  return (
    <Selectionner
      className={`w-full text-gray-900`}
      onChange={onChange}
      disabled={isDisabled}
      placeholder={placeholder}
      allowClear
      {...rest}
    >
      {options.length > 0 &&
        options.map((op, idx) => {
          return (
            <Option key={idx} value={op.value}>
              {op.title}
            </Option>
          );
        })}
    </Selectionner>
  );
};

export default Select;
