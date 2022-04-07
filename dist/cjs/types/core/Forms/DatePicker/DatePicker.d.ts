import React from "react";
import "./index.css";
export interface DatePickerProps {
    onChange: (value: any) => void;
    placeholder?: string;
    isDisabled?: boolean;
}
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
