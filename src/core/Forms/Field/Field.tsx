import { Rule } from "antd/lib/form";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import "antd/dist/antd.css";
import "./style.css";

export interface FieldProps {
  name: string;
  label: string;
  // isRequired: boolean;
  children: React.ReactNode;
  rules?: Rule[];
  hasFeedback?: boolean;
}

const Field: React.FC<FieldProps> = ({
  name,
  label,
  // isRequired,
  children,
  rules,
  hasFeedback = false,
  ...rest
}) => {
  return (
    <FormItem
      name={name}
      label={label}
      rules={rules}
      hasFeedback={hasFeedback}
      {...rest}
    >
      {children}
    </FormItem>
  );
};
export default Field;
