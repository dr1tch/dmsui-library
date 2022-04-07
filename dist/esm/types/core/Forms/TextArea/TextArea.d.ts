import React from "react";
import "antd/dist/antd.css";
import "./index.css";
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
export default TextArea;
