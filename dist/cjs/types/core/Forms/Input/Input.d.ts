import React from "react";
import { InputNumberProps, InputProps } from "antd";
import "./index.css";
export declare type InputTextProps = InputProps & {
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
export declare const InputText: React.FC<InputTextProps>;
export declare type InputPasswordProps = {
    placeholder?: string;
    isDisabled?: boolean;
};
export declare const InputPassword: React.FC<InputPasswordProps>;
export declare type IInputNumber = InputNumberProps & {
    isDisabled?: boolean;
    placeholder?: string;
};
export declare const InputNumber: React.FC<IInputNumber>;
