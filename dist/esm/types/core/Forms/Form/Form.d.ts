import { FieldData } from "../../types/forms/field-data";
import { FormInstance } from "antd";
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
declare const Form: React.FC<FormProps>;
export default Form;
