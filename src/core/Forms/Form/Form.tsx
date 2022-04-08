import { FieldData } from "../../types/forms/field-data";
import { Form as Formulaire, FormInstance } from "antd";
import { Store } from "antd/lib/form/interface";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import React from "react";
import "./index.css";

export interface FormProps {
  initialValues?: Store | undefined;
  form?: FormInstance;
  onFinish?: ((values: any) => void) | undefined;
  onFinishFailed?: (errorInfo: ValidateErrorEntity<any>) => void;
  children: React.ReactNode;
  fields?: FieldData[];
  onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
  onChange?: (fields: FieldData[]) => void;
  name?: string;
}

const Form: React.FC<FormProps> = ({
  initialValues,
  onChange,
  onFinish,
  fields,
  onFieldsChange,
  onFinishFailed,
  children,
  name,
  ...rest
}) => {
  return (
    <Formulaire
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
      layout="vertical"
      requiredMark={false}
      scrollToFirstError={true}
      labelWrap
      fields={fields}
      {...rest}
      name={name}
    >
      <div className="flex flex-col gap-0.5">{children}</div>
    </Formulaire>
  );
};
export default Form;
