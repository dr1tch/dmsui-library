import React from "react";
import {
  Input,
  InputNumber as NumberInput,
  InputNumberProps,
  InputProps,
} from "antd";
import "./index.css";
export type InputTextProps = InputProps & {
  placeholder?: string;
  type?: string;
  prefix?: React.ReactNode;
  className?: string;
  onChange?: ({ target: { value } }: { target: { value: any } }) => void;
  isDisabled?: boolean;
};

export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  type = "text",
  onChange,
  isDisabled = false,
  ...rest
}) => {
  return (
    <Input
      className={`w-full rounded-md font-semibold border-[1.5px] px-3 py-2 focus:border-green-700`}
      allowClear
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
      {...rest}
    />
  );
};

export type InputPasswordProps = {
  placeholder?: string;
  isDisabled?: boolean;
};

export const InputPassword: React.FC<InputPasswordProps> = ({
  placeholder,
  isDisabled = false,
  ...rest
}) => {
  return (
    <Input.Password
      className={`w-full rounded-md font-semibold border-[1.5px] px-3 py-2 focus:border-green-700`}
      allowClear
      placeholder={placeholder}
      disabled={isDisabled}
      {...rest}
    />
  );
};

export type IInputNumber = InputNumberProps & {
  isDisabled?: boolean;
  placeholder?: string;
};

export const InputNumber: React.FC<IInputNumber> = ({
  isDisabled,
  placeholder,
  ...rest
}) => {
  return (
    <NumberInput disabled={isDisabled} placeholder={placeholder} {...rest} />
  );
};
