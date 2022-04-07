import { FormInstance, InputProps, InputNumberProps } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React from 'react';
import { Rule } from 'antd/lib/form';
import { DefaultOptionType } from 'antd/lib/select';

declare type FieldData = {
    name: string | number | (string | number)[];
    value?: any;
};

interface FormProps {
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

declare type InputTextProps = InputProps & {
    placeholder?: string;
    type?: string;
    prefix?: React.ReactNode;
    className?: string;
    onChange?: ({ target: { value } }: {
        target: {
            value: any;
        };
    }) => void;
    isDisabled?: boolean;
};
declare const InputText: React.FC<InputTextProps>;
declare type InputPasswordProps = {
    placeholder?: string;
    isDisabled?: boolean;
};
declare const InputPassword: React.FC<InputPasswordProps>;
declare type IInputNumber = InputNumberProps & {
    isDisabled?: boolean;
    placeholder?: string;
};
declare const InputNumber: React.FC<IInputNumber>;

interface FieldProps {
    name: string;
    label: string;
    children: React.ReactNode;
    rules?: Rule[];
    hasFeedback?: boolean;
}
declare const Field: React.FC<FieldProps>;

interface DatePickerProps {
    onChange: (value: any) => void;
    placeholder?: string;
    isDisabled?: boolean;
}
declare const DatePicker: React.FC<DatePickerProps>;

interface ImageUploadProps {
    onChange: (file: File | null) => void;
    path?: string;
}
declare const ImageUpload: React.FC<ImageUploadProps>;

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

interface StepsProps {
    current: number;
    steps: string[];
}
declare const Steps: React.FC<StepsProps>;

interface TextAreaProps {
    maxLength?: number;
    placeholder: string;
    onChange?: ({ target: { value } }: {
        target: {
            value: any;
        };
    }) => void;
    isDisabled?: boolean;
}
declare const TextArea: React.FC<TextAreaProps>;

interface IItem {
    title: string;
    key: string;
}
declare type ITreeData = IItem & {
    children: IItem[] | [] | ITreeData[];
};

interface ITreeTransferProps {
    data: ITreeData[];
    targetKeys: string[];
    onChange: (keys: string[]) => void;
    titles: string[];
    isDisabled?: boolean;
}
declare const TreeTransfer: React.FC<ITreeTransferProps>;

declare type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
    isOpen: boolean;
    children: React.ReactNode;
    closeModal: () => void;
    removeFooter?: boolean;
    title: string;
};
declare const Modal: React.FC<ModalProps>;

interface TableProps {
    data: object[];
    columns: object[];
    rowSelection: object;
}
declare const Table: React.FC<TableProps>;

export { DatePicker, Field, Form, ImageUpload, InputNumber, InputPassword, InputText, Modal, Select, Steps, Table, TextArea, TreeTransfer };
